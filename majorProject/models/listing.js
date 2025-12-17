const mongoose = require("mongoose");
const Review = require("./review.js");
const schema = mongoose.Schema;

const listingSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: { type: String, default: "listingimage" },
    url: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5UtekBF2OHTxfnDj4RuFNOtcDHHysCq8o7g&s",
      set: (v) =>
        v === ""
          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5UtekBF2OHTxfnDj4RuFNOtcDHHysCq8o7g&s"
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;