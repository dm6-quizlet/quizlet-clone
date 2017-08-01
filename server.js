
require("dotenv").config();
const express = require('express');
const {json} = require ('body-parser')
const session = require('express-session');
const cors = require ('cors')
const axios = require ('axios')

const app = express();

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
//const configAuth = require('./auth.js');


// Set Middleware
app.use(json());
app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true

        }));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


const fbOpts = {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
}

const fbCallback = function(accessToken, refreshToken, profile, cb){
    console.log(accessToken, refreshToken, profile);
    cb(null, profile)
};

passport.use(new FacebookStrategy(fbOpts, fbCallback));

app.use(express.static(__dirname + "/build"))

app.route('/auth/facebook')
    .get(passport.authenticate('facebook', { scope: ['email']}));

app.route('/auth/facebook/callback')
    // For development, we're hitting back end endpoints; eventually, we might hit front-end routes
    .get(passport.authenticate('facebook', {successRedirect: '/success', failureRedirect: '/failure'}));

app.get('/success', function(req, res, next) {
    console.log(req.user)
    res.redirect('/')
})
app.get('/failure', function(req, res, next) {
    console.log("No user or some kind of error")
    res.redirect('/')
})



///Splash endpoint
app.get('/api/datasets', (req, res) => {
  axios.get("https://api.quizlet.com/2.0/users/dadleatherwood/sets?client_id=s4VUDpxjrx&whitespace=1")
  .then(response => {
    res.status(200).json(response.data)
  })
  .catch(err => {
    console.log(err);
  })
})

app.listen(process.env.PORT,function(){
           console.log(`Listening on ${process.env.PORT}`);
});
