const express = require("express");
const app = express();


let port = 8080; 

app.listen(port, () => {
    console.log(`app is listen on port ${port}`);
});



app.get("/", (req, res) => {
    res.send("you contacted root path");
});

app.get("/orange", (req, res) => {
  res.send("you contacted orange path");
});

app.get("/apple", (req, res) => {
  res.send("you contacted apple path");
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`welcome ${username} id ${id}`);
});

app.get("/search", (req, res) => {
  let { q } = (req.query);
  res.send(`search result for querry: ${q}`);
});