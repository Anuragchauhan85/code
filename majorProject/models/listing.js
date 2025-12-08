const mongoose = require("mongoose");
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
          type:String,
          default:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5UtekBF2OHTxfnDj4RuFNOtcDHHysCq8o7g&s",
          set: (v) =>
              v === ""
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5UtekBF2OHTxfnDj4RuFNOtcDHHysCq8o7g&s"
                  : v,
      }
     },
  price: Number,
  location: String,
  country: String,
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;