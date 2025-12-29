const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry:{
      type: "Point",
      coordinates: [-118.6923, 34.0381],
    },

  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry:{
      type: "Point",
      coordinates: [74.0060,40.7128],
    },
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry:{
      type: "Point",
      coordinates: [106.8175,39.1911],
    },
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry:{
      type: "Point",
      coordinates: [11.2558,43.7696],
    },
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry:{
      type: "Point",
      coordinates: [-122.6784, 45.5152],
    },
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry:{
      type: "Point",
      coordinates: [-86.8515, 21.1619],
    },
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry:{
      type: "Point",
      coordinates: [-120.0324, 39.0968],
    },
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry:{
      type: "Point",
      coordinates: [-118.2437, 34.0522],
    },
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry:{
      type: "Point",
      coordinates: [7.2266, 46.0962],
    },
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry:{
      type: "Point",
      coordinates: [34.8333, -2.3333],
    },
  },

  {
    title: "Traditional Ryokan with Hot Springs",
    description:
      "Immerse yourself in Japanese culture at this authentic ryokan. Enjoy traditional tatami rooms, kaiseki dining, and natural hot springs.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW5lc2UlMjByeW9rYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Kyoto",
    country: "Japan",
    geometry:{
      type: "Point",
      coordinates: [135.7681, 35.0116],
    },
  },
  {
    title: "Overwater Bungalow",
    description:
      "Wake up to crystal-clear lagoon waters beneath your feet. This overwater bungalow offers unparalleled luxury in paradise.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3ZlcndhdGVyJTIwYnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 5000,
    location: "Bora Bora",
    country: "French Polynesia",
    geometry:{
      type: "Point",
      coordinates: [-151.7415, -16.5004],
    },
  },
  {
    title: "Desert Glamping Experience",
    description:
      "Sleep under the stars in luxury tents with modern amenities. Experience the magic of the Sahara Desert in comfort.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzZXJ0JTIwY2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2200,
    location: "Marrakech",
    country: "Morocco",
    geometry:{
      type: "Point",
      coordinates: [-7.9811, 31.6295],
    },
  },
  {
    title: "Arctic Glass Igloo",
    description:
      "Watch the Northern Lights from your heated glass igloo. A once-in-a-lifetime Arctic experience with all modern comforts.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2xhc3MlMjBpZ2xvb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2800,
    location: "Lapland",
    country: "Finland",
    geometry:{
      type: "Point",
      coordinates: [25.7294, 66.5039],
    },
  },
  {
    title: "Cliff-Top Castle in Ireland",
    description:
      "Live like royalty in this authentic medieval castle perched on dramatic cliffs. Complete with turrets, Great Hall, and ocean views.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJpc2glMjBjYXN0bGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 3200,
    location: "County Cork",
    country: "Ireland",
    geometry:{
      type: "Point",
      coordinates: [-8.4863, 51.8969],
    },
  },
  {
    title: "Floating House on Amazon River",
    description:
      "Experience the Amazon rainforest from this unique floating lodge. Wake up to exotic birds and explore pristine jungle.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9uJTIwcmFpbmZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1600,
    location: "Manaus",
    country: "Brazil",
    geometry:{
      type: "Point",
      coordinates: [-60.0217, -3.1190],
    },
  },
  {
    title: "Cave House in Santorini",
    description:
      "Stay in a traditional cave house carved into the volcanic cliffs. Enjoy sunset views over the Aegean Sea and white-washed architecture.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FudG9yaW5pJTIwY2F2ZSUyMGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 2100,
    location: "Oia",
    country: "Greece",
    geometry:{
      type: "Point",
      coordinates: [25.3756, 36.4615],
    },
  },
  {
    title: "Lighthouse Keeper's Cottage",
    description:
      "Experience maritime history in this converted lighthouse cottage. Enjoy 360-degree ocean views and crashing waves below.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlnaHRob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1300,
    location: "Cornwall",
    country: "United Kingdom",
    geometry:{
      type: "Point",
      coordinates: [-5.0520, 50.2660],
    },
  },
  {
    title: "Mongolian Yurt Experience",
    description:
      "Live like nomads in an authentic Mongolian yurt on the vast steppes. Experience traditional culture and horseback riding.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uZ29saWFuJTIweXVydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 950,
    location: "Ulaanbaatar",
    country: "Mongolia",
    geometry:{
      type: "Point",
      coordinates: [106.9057, 47.8864],
    },
  },
  {
    title: "Ice Hotel Suite",
    description:
      "Sleep in a room made entirely of ice and snow. This unique accommodation includes thermal sleeping bags and ice sculptures.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aWNlJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2400,
    location: "Jukkasj盲rvi",
    country: "Sweden",
    geometry:{
      type: "Point",
      coordinates: [20.3414, 67.8558],
    },
  },
  {
    title: "Underwater Hotel Room",
    description:
      "Sleep surrounded by marine life in this submerged hotel room. Watch tropical fish and rays swim by your bedroom window.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dW5kZXJ3YXRlciUyMGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 4500,
    location: "Conrad Maldives",
    country: "Maldives",
    geometry:{
      type: "Point",
      coordinates: [73.2207, 3.2028],
    },
  },
  {
    title: "Hobbit Hole Cottage",
    description:
      "Experience Middle-earth in this authentic hobbit hole built into a hillside. Complete with round doors and cozy interiors.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9iYml0JTIwaG9sZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 750,
    location: "Rotorua",
    country: "New Zealand",
    geometry:{
      type: "Point",
      coordinates: [176.2497, -38.1368],
    },
  },
  {
    title: "Windmill Converted Loft",
    description:
      "Stay in a beautifully converted 18th-century windmill. Enjoy panoramic countryside views from this unique circular space.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbmRtaWxsJTIwY29udmVyc2lvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1400,
    location: "Amsterdam",
    country: "Netherlands",
    geometry:{
      type: "Point",
      coordinates: [4.9041, 52.3676],
    },
  },
  {
    title: "Rainforest Canopy Lodge",
    description:
      "Wake up in the treetops of the Costa Rican rainforest. Spot sloths, toucans, and monkeys from your elevated perch.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhaW5mb3Jlc3QlMjBjYW5vcHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1750,
    location: "Manuel Antonio",
    country: "Costa Rica",
    geometry:{
      type: "Point",
      coordinates: [-84.1399, 9.3895],
    },
  },
  {
    title: "Converted Train Car",
    description:
      "Experience luxury travel nostalgia in this beautifully restored vintage train car. Complete with original fixtures and modern amenities.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYWluJTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 850,
    location: "Napa Valley",
    country: "United States",
    geometry:{
      type: "Point",
      coordinates: [-122.2654,38.5025],
    },
  },
  {
    title: "Cliffside Monastery Retreat",
    description:
      "Find peace and tranquility in this converted monastery perched on dramatic cliffs. Includes meditation gardens and sea views.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vbmFzdGVyeSUyMGNsaWZmc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1900,
    location: "Meteora",
    country: "Greece",
    geometry:{
      type: "Point",
      coordinates: [21.6316,39.7215],
    },
  },
  {
    title: "Space-Themed Pod Hotel",
    description:
      "Experience futuristic living in this space-themed pod with LED star ceiling and modern technology throughout.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNwYWNlJTIwdGhlbWVkJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1100,
    location: "Tokyo",
    country: "Japan",
    geometry:{
      type: "Point",
      coordinates: [139.6503,35.6762],
    },
  },
  {
    title: "Pirate Ship Accommodation",
    description:
      "Ahoy matey! Sleep aboard this authentic replica pirate ship complete with cannons, rigging, and harbor views.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBpcmF0ZSUyMHNoaXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1350,
    location: "Cartagena",
    country: "Colombia",
    geometry:{
      type: "Point",
      coordinates: [-75.4794,10.3910],
    },
  },
  {
    title: "Geodesic Dome in Patagonia",
    description:
      "Experience the end of the world in this sustainable geodesic dome with panoramic views of glaciers and mountains.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdlb2Rlc2ljJTIwZG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2300,
    location: "El Calafate",
    country: "Argentina",
    geometry:{
      type: "Point",
      coordinates: [-72.2646,-50.3379],
    },
  },
  {
    title: "Luxury Houseboat on Dal Lake",
    description:
      "Float on the serene waters of Dal Lake in this ornately decorated Kashmiri houseboat with mountain backdrop views.",
    image:{
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGRhbCUyMGxha2UlMjBob3VzZWJvYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1250,
    location: "Srinagar",
    country: "India",
    geometry:{
      type: "Point",
      coordinates: [74.7973,34.0837],
    },
  },
];

module.exports = { data: sampleListings };
