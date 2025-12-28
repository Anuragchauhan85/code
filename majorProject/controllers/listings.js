const { models } = require("mongoose");
const Listing = require("../models/listing.js");



module.exports.index = async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listings/index.ejs", { allListing });
};



module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};



module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};



module.exports.createListing = async (req, res, next) => {
  try {
    const place = req.body.listing.location;
    const MAPTILER_KEY = process.env.MAP_TOKEN;

    const geoUrl = `https://api.maptiler.com/geocoding/${encodeURIComponent(
      place
    )}.json?key=${MAPTILER_KEY}`;
    const response = await fetch(geoUrl);
    const data = await response.json();

    let url = req.file.path;
    let filename = req.file.filename;

    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id;
    newlisting.image = { url, filename };

    // ✅ Fix: assign full GeoJSON object
    if (data.features && data.features.length > 0) {
      const coords = data.features[0].geometry.coordinates; // [lng, lat]
      newlisting.geometry = {
        type: "Point",
        coordinates: coords,
      };
    } else {
      req.flash("error", "Location not found");
      return res.redirect("/listings/new");
    }

    let savedListing = await newlisting.save();
    console.log(savedListing);

    req.flash("success", "New Listing Created");
    res.redirect("/listings");
  } catch (err) {
    next(err);
  }
};
  

module.exports.editListing=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist");
      return res.redirect("/listings");
  }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing,originalImageUrl });
}
  
module.exports.updateListing=async (req, res) => {
    let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
    req.flash("success", " Listing Updated");
    res.redirect(`/listings/${id}`);
}
  
module.exports.deleteListing=async (req, res) => {
    let { id } = req.params;
    let deletedlisting = await Listing.findByIdAndDelete(id);
    console.log(deletedlisting);
    req.flash("success", "Listing Deleted");
    res.redirect("/listings");
  }