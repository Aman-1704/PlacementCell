const User = require("../models/user");

module.exports.home = async function(req,resp){

    if (!req.isAuthenticated()) {
      return resp.redirect("/users/login");
    }

    return resp.render("home");
}

// render the sign In page
module.exports.login = function (req, resp) {

  if (!req.isAuthenticated()) {
    return resp.render("signin");
  }

  return resp.redirect("/");
};


// render the sign up page
module.exports.signup = function (req, resp) {

  if (!req.isAuthenticated()) {
    return resp.render("signup");
  }

  return resp.redirect("/");
};

module.exports.CreateUser = async function (req, resp) {
  try {
    if (req.body.password != req.body.confirmpassword) {
      return resp.redirect("back");
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
        return resp.redirect("back");
      }
      return resp.redirect("/users/login");
    } else {
      return resp.redirect("back");
    }
  } catch (error) {
    console.log(`Error during submit the sigup form:  ${error}`);
    resp.redirect("back");
  }
};

// sign in and create the session for the user
module.exports.CreateSession = function (req, resp) {
  return resp.redirect("/");
};

module.exports.signout = function (req, res) {
  req.logout();
  return res.redirect("/");
};