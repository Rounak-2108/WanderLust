const Listing = require("../models/listing");
const { cloudinary } = require("../cloudConfig");

// INDEX
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

// NEW FORM
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

// SHOW
module.exports.showListing = async (req, res) => {
  const { id } = req.params;

  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing does not exist!");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", { listing });
};

// ================= CREATE =================
module.exports.createListing = async (req, res, next) => {
    try {

        console.log("FILE RECEIVED:", req.file); // HERE

        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
    // ✅ IMAGE (DEFENSIVE)
    if (req.file) {
      newListing.image = {
        url: req.file.path,
        filename: req.file.filename,
      };
    }

    // ✅ GEOMETRY
    const lat = parseFloat(req.body.listing.latitude);
    const lng = parseFloat(req.body.listing.longitude);

    if (isNaN(lat) || isNaN(lng)) {
      req.flash("error", "Invalid latitude or longitude");
      return res.redirect("/listings/new");
    }

    newListing.geometry = {
      type: "Point",
      coordinates: [lng, lat],
    };

    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  } catch (err) {
    console.error("❌ CREATE LISTING ERROR:", err);
    next(err);
  }
};

// ================= EDIT FORM =================
module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing does not exist!");
    return res.redirect("/listings");
  }

  let originalImageUrl = "";
  if (listing.image?.url) {
    originalImageUrl = listing.image.url.replace(
      "/upload",
      "/upload/w_250,h_300"
    );
  }

  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

// ================= UPDATE =================
module.exports.updateListing = async (req, res, next) => {
  try {
    const { id } = req.params;

    const listing = await Listing.findByIdAndUpdate(
      id,
      { ...req.body.listing },
      { new: true }
    );

    // ✅ IMAGE UPDATE (SAFE)
    if (req.file && req.file.path && req.file.filename) {
      if (listing.image?.filename) {
        await cloudinary.uploader.destroy(listing.image.filename);
      }

      listing.image = {
        url: req.file.path,
        filename: req.file.filename,
      };
    }

    // ✅ GEOMETRY UPDATE
    const lat = parseFloat(req.body.listing.latitude);
    const lng = parseFloat(req.body.listing.longitude);

    if (!isNaN(lat) && !isNaN(lng)) {
      listing.geometry = {
        type: "Point",
        coordinates: [lng, lat],
      };
    }

    await listing.save();
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.error("❌ UPDATE ERROR:", err);
    next(err);
  }
};

// ================= DELETE =================
module.exports.destroyListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (listing?.image?.filename) {
    await cloudinary.uploader.destroy(listing.image.filename);
  }

  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};