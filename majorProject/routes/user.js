const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

router.route("/signup")
  //route to render signup form
  .get(userController.signupFormUser)
  //route to signup user
  .post(wrapAsync(userController.signupUser));


router.route("/login")
//route to render login form
.get( userController.loginFormUser)
//route to login users
.post(
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.loginUser
);

//route to logout user
router.get("/logout", userController.logoutUser);


module.exports = router;