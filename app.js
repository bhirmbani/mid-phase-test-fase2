const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// auth
const passport = require('passport');
const passwordHash = require('password-hash');

// passport
const Strategy = require('passport-local').Strategy;

// set
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());

// mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/uts-fase2');

// route

// use the route

app.listen(app.get('port'), () => {
  console.log(`app listening on ${app.get('port')}`);
})

module.exports = app;

