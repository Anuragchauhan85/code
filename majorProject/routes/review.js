const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isloggedin ,isreviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");


//route to post review
router.post("/",isloggedin,validateReview,wrapAsync( reviewController.postReview));

//route to delete review 
router.delete("/:reviewId",isloggedin,isreviewAuthor, wrapAsync(reviewController.deleteRoute));

module.exports = router;