const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "anurag",
    content: "i am studing in itm",
  },
  {
    id: uuidv4(),
    username: "aditya",
    content: "i am studing in gla",
  },
  {
    id: uuidv4(),
    username: "ankit",
    content: "i am a web developer",
  },
  {
    id: uuidv4(),
    username: "adhya",
    content: "i am studing in pragati",
  },
  {
    id: uuidv4(),
    username: "drisha",
    content: "i am studing in pragati junior",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs",{posts});
});


app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
    posts.push({id, username, content });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  console.log(post);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  let newcontent = req.body.content;
  post.content = newcontent;
  res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res) => {
   let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
})

app.listen(port, () => {
    console.log("listning to port 8080");
});


