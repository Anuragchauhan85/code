const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.get("/register", (req, res) => {
    let { username, password } = req.query;
    res.send(`standard get response. welcome ${username}!`);
});

app.post("/register", (req, res) => {
    let { username, password } = req.body;
    res.send(`standard post response. welcome ${username}!`);
});

app.listen(port, () => {
    console.log("listning on port")
})