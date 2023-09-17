const express = require("express");
const passport = require("passport");
const router = express.Router();
const UserController = require("../controllers/UserController");
const DownloadController = require('../controllers/DownloadController');

router.get("/login", UserController.login);
router.get("/SignUp", UserController.signup);
router.get("/SignOut", passport.checkAuthentication, UserController.signout);

router.post("/create", UserController.CreateUser);

//use passport as a middleware for authenication
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/users/login" }),
  UserController.CreateSession
);

router.get("/fetchdata", passport.checkAuthentication, DownloadController.downloadfile);

module.exports = router;