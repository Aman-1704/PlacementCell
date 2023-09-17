const User = require("../models/user");
const Student = require("../models/student");

module.exports.home = async function(req,res){

    if (!req.isAuthenticated()) {
      return res.redirect("/users/login");
    }

    let students = await Student.find({});

    return res.render("home",{students});
}

// render the sign In page
module.exports.login = function (req, res) {

  if (!req.isAuthenticated()) {
    return res.render("signin");
  }

  return res.redirect("/");
};


// render the sign up page
module.exports.signup = function (req, res) {

  if (!req.isAuthenticated()) {
    return res.render("signup");
  }

  return res.redirect("/");
};

module.exports.CreateUser = async function (req, res) {
  try {
    if (req.body.password != req.body.confirmpassword) {
      req.flash("error", "Password doesn't match..Renter..");
      return res.redirect("back");
    }

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      const newuser = await User.create({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      await newuser.save();

      if (!newuser) {
        console.log("error in creating new user");
        return res.redirect("back");
      }
      return res.redirect("/users/login");
    } else {
      req.flash("error", "E-Mail ID Already present");
      return res.redirect("back");
    }
  } catch (error) {
    console.log(`Error during submit the sigup form:  ${error}`);
    res.redirect("back");
  }
};

// sign in and create the session for the user
module.exports.CreateSession = function (req, res) {
  req.flash("success", "Yayy !!! Logged In Successfully");
  return res.redirect("/");
};

module.exports.signout = function (req, res) {
  req.logout(function(err) {
    if (err) { return next(err); }
    else{
      req.flash("success", "Ooops !!! Logged Out Successfully");
      return res.redirect('/');
    }
   
  });
};