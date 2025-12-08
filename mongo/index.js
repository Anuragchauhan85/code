const mongoose = require("mongoose");

main().then(() => {
    console.log("connection sucessfull"); 
 })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

// User.deleteMany({ age:20 }).then((res) => {
//   console.log(res);
// });

// User.deleteOne({ name: "rony" }).then((res) => { console.log(res) });

// User.findByIdAndUpdate("6921dcf1c524be407e0e4814", {age:61},{new:true})
// .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
  
// User.findOneAndUpdate({ name: "peter" }, { age: 38 },{new:true})
// .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateMany({ age:{$gt:48} }, { age: 55 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateOne({ name: "peter" }, { age: 49 }).then((res) => {
//   console.log(res)
// })
//   .catch((err) => {
//     console.log(err);
//   });

// User.find({ age:{$gt:40}}).then((res) => {
//     console.log(res);
//     console.log(res[0].name);
// }).catch((err) => {
//     console.log(err);
// });


// User.findById("6921dcf1c524be407e0e4813")
//   .then((res) => {
//     console.log(res);
//     console.log(res.name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   { name: "tony", email: "tony@gmail.com", age: 50 },
//   { name: "peter", email: "peter@gmail.com", age: 30 },
//   { name: "rony", email: "rony@gmail.com", age: 40 },
// ]).then((res) => {
//     console.log(res);
// });


// const user2 = new User({
//     name: "Anur",
//     email: "adam@gmail.com",
//     age: 21,
// });

// user2.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err); 
//     });