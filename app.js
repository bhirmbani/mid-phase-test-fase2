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
const food = require('./routes/food');
const restaurant = require('./routes/restaurant');
const user = require('./routes/user');

// use passport
passport.use(new Strategy(function(username, password, done) {
    let User = require('./model/user');
    User.findOne({username: username}, (err, user) => {
      if (err) {
        return done(err)
      } else {
        if(user !== null) {
          if (passwordHash.verify(password, user.password)) {
              return done(null, {username: user.username, password: user.password});
            } else {
              return done('username or password is not exist');
            }
        } else {
          return done('user not found');
        }
      }
      
    })
  }
))

// use the route
app.use('/api/users', user);
app.use('/api/restaurants', restaurant);
app.use('/api/foods', food);

app.listen(app.get('port'), () => {
  console.log(`app listening on ${app.get('port')}`);
})

module.exports = app;

