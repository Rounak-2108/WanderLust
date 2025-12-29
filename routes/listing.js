const express = require("express");
const router = express.Router();
const multer = require("multer");

const wrapAsync = require("../utils/wrapAsync");
const ListingController = require("../controllers/listings");
const { isLoggedIn, isOwner } = require("../middleware");
const { storage } = require("../cloudConfig");

const upload = multer({ storage });

/* ================= NEW ================= */
// IMPORTANT: STATIC ROUTES FIRST
router.get("/new", isLoggedIn, ListingController.renderNewForm);

/* ================= INDEX + CREATE ================= */
router.route("/")
  .get(wrapAsync(ListingController.index))
  .post(
    isLoggedIn,
    upload.single("image"),
    wrapAsync(ListingController.createListing)
  );

/* ================= EDIT ================= */
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(ListingController.renderEditForm)
);

/* ================= SHOW / UPDATE / DELETE ================= */
router.route("/:id")
  .get(wrapAsync(ListingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("image"),
    wrapAsync(ListingController.updateListing)
  )
  .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(ListingController.destroyListing)
  );

module.exports = router;