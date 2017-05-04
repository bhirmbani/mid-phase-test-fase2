const User = require('../model/user');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const methods = {};

methods.signup = (req, res, next) => {
  User.create({
    username: req.body.username,
    password: passwordHash.generate(req.body.password),
  }, (err, done) => {
    if(err) res.send(err);
    res.send(done);
  })
}

module.exports = methods;