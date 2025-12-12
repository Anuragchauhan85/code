const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection sucessful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
      type: Schema.Types.ObjectId,
      ref:"User"
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// const addData = async () => {
//     // let User1 = new User({
//     //     username: "rahul",
//     //     email: "rahul@gmail.com"
//     // });
    

//     // let post1 = new Post({
//     //     content: "hello world",
//     //     likes: 7,
//     // })

     
//     // post1.user = User1;
    

//     // await User1.save();
//     // await post1.save();
    
// };

// addData();


// const addData = async () => {
//     let user = await User.findOne({ username: "rahul" });
    
//   let post2 = new Post({
//     content: "bye bye",
//     likes: 70,
//   });
    
//   post2.user = user;
//   await post2.save();
// };

// addData();

