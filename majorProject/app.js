const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");



//requring different routes 
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

//for making connection with db 
const MongoUrl = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MongoUrl);
}



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  Cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.get("/", (req, res) => {
  res.send("hii i am root page");
});



app.use(session(sessionOptions));
app.use(flash());


app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

//using all listing routes
app.use("/listings", listings);
//using all review routes
app.use("/listings/:id/reviews",reviews);



app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
  let { statuscode = 500, message = "Something went wrong!" } = err;
  res.status(statuscode).render("error.ejs", { message });
});



app.listen(8080, () => {
  console.log("app is listning");
});


// app.get("/testinListing", async (req, res) => {
//     let sampleListning = new Listing({
//         title: "My new villa",
//         description: "By the beach",
//         price: 1220,
//         loacation: "goa",
//         country: "india"
//     });
//     await sampleListning.save();
//     console.log("sample was saved");
//     res.send("sucessful testing");
// });