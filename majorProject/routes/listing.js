const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isloggedin, isOwner,validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");


router
  .route("/")
  //index route for all listings
  .get(wrapAsync(listingController.index))
  //route to create new listing
  .post(
    isloggedin,
    validateListing,
    wrapAsync(listingController.createListing)
  );

  
// route for form of new listing
router.get("/new",isloggedin, listingController.renderNewForm);


router
  .route("/:id")
  //route to show details of any listing
  .get(wrapAsync(listingController.showListing))
  //route to update listing
  .put(
    isloggedin,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  //route to delete listings
  .delete(
    isloggedin,
    isOwner,
    wrapAsync(listingController.deleteListing)
  );


//route to edit listing
router.get(
  "/:id/edit",
  isloggedin,
  isOwner,
  wrapAsync(listingController.editListing)
);



module.exports = router;