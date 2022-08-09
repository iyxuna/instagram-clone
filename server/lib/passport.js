const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

passport.serializeUser(function(user, done){
    try{
        done(null, user.email);
    }catch(e){
        console.log("serializeUser ERROR : ", e);
    }
});

passport.deserializeUser(function(email, done){
    try{
        User.findOne({ email: email}, function(err, user){
            done(err, user);
        });
    }catch(e){
        console.log("deserializeUser ERROR : ", e);
    }
});

passport.use("local", new LocalStrategy({
        usernameField: "email",
        passwordField: "password"
    },
    function (email, password, done){
        User.findOne({ email: email }, function(err, user){
            if(err){ return done(err); }
            if(!user){ return done(null, false); }
            if(!user.password === password){ return done(null, false); }
            return done(null, user);
        });
    }
));

module.exports = passport;