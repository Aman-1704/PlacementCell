//PASSPORT LOCAL STRATEGY WITH SETTING THE USER IN OUR REQUEST

const passport = require('passport');
const LocalStrategy   = require("passport-local").Strategy;

const User = require('../models/user');

passport.use(new LocalStrategy(
    {
        usernameField:"email",
    }, function (email, password, done) {
        // now find the user and establish identity
        User.findOne({email: email})
        .then(user => {
            if (!user || user.password != password) {
                req.flash("error", "Invalid the user/password");
                console.log('Invalid Username/Password');
                return done(null, false);
            }
            return done(null, user);
        })
        .catch(err => {
            req.flash("error", err);
            return done(err);
        })
    }
));

// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

// Deserializing the user from the key in the cookies
passport.deserializeUser(function (id, done) {
    User.findById(id)
    .then(user=>{
        return done(null, user);
    })
    .catch(err=>{
        console.log('error in finding user --> passport');
        return done(err);
    })
});

// checck if the user is authenticated
passport.checkAuthentication = function (req, res, next) {
    // if the user is signed in then pass on the request to the next function(controller's action)
    if (req.isAuthenticated()) {
      return next();
    }
    // if the user is not signed in
    return res.redirect('/users/login');
};
  
//set the authenicated user for views
passport.setAuthenticatedUser = function (req, res, next) {
    if(req.isAuthenticated()){
      // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
      res.locals.user = req.user;
    }
    next();
};

module.exports = passport;