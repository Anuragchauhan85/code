const mongoose = require("mongoose");

main().then(() => {
    console.log("connection sucessfull"); 
 })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  tittle: {
    type: String,
    required: true,
    maxLength:20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min:[1,"price is too low for amazon selling"],
  },
  discount: {
    type: Number,
    default:0,
  },
    category: {
    type: String,
    enum:["fiction","Non-fiction"],
  },
    genre:[String]
});

const book = mongoose.model("book", bookSchema);

book
  .findByIdAndUpdate("69233ce75e56f90b17e085de", { price: -100 },{runValidators:true},)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });


// book.findByIdAndUpdate("69233ce75e56f90b17e085de", { price: -500 })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// let book1 = new book({
//   tittle: "Marvel comics",
//   price: 600,
//   category:"fiction",
//   genre:["comic","superhero","fiction"]
// });

// let book1 = new book({
//   tittle: "Gone Girl ",
//   price: 399,
// });

// let book1 = new book({
//     tittle: "Mathematics XII ",
//     author: "RD Sharma",
//     price: 1200,
// });

// book1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });