//showing users 

const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine ", "ejs");
app.set("views", path.join(__dirname, "/views"));


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Ghost@_315",
});


let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};


//this was our home route
app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs",{count});
    });
  } catch (error) {
    console.log(err);
    res.send("some error in db");
  }
});


//all user table
app.get("/user", (req, res) => {
  let q = "SELECT * FROM user";
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showuser.ejs", { users });
    });
  } catch (error) {
    console.log(err);
    res.send("some error in db");
  }
});


//edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id ='${id}' `;
  try {
    connection.query(q, (err,result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs",{user});
    });
  } catch (error) {
    console.log(err);
    res.send("some error in db");
  }
})


//update route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formpass, username: newusername } = req.body;
  let q = `SELECT * FROM user WHERE id ='${id}' `;
 try {
   connection.query(q, (err, result) => {
     if (err) throw err;
     let user = result[0];
    if (formpass != user.password) {
      res.send("wrong password");
    } else {
      let q2 = `UPDATE user SET username='${newusername}' WHERE id ='${id}'`;
      connection.query(q2, (err, result) => {
        if (err) throw err;
        res.redirect("/user");
      });
    }
   });
 } catch (error) {
   console.log(err);
   res.send("some error in db");
 }
})


app.listen("8080", () => {
   console.log("app is listning ")
 })





//  let q = "INSERT INTO user(id,username,email,password) VALUES ?";
//  let data = [];
//  for (let i = 1; i <= 100; i++) {
//    data.push(getRandomUser());
//  }

 // let q = "INSERT INTO user(id,username,email,password) VALUES ?";
 // let users = [
 //   ["123a", "123_newusera", "abc@gmaila.com", "abca"],
 //   ["123b", "123_newuserb", "abc@gmailb.com", "abcb"],
 // ];

//  try {
//    connection.query(q, [data], (err, result) => {
//      if (err) throw err;
//      console.log(result);
//    });
//  } catch (error) {
//    console.log(err);
//  }
//  connection.end();