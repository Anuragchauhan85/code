const express = require("express");
const app = express();
const path = require("path");

let port = 8080;
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
    let diceval = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs",{diceval});
});

//app.get("/ig/:username", (req, res) => {
  //  const followers = ["adam", "bob", "smith", "danny"];
  //  let { username } = req.params;
  //  res.render("instagram.ejs", { username, followers });
//});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instadata = require("./data.json")
    const data = instadata[username];
    if (data) {
        res.render("insta.ejs", { data });
    } else {
        res.render("error.ejs");
    }
});

app.listen(port,() => {
    console.log(`listen on port:${port}`);
});