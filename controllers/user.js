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

methods.login = (req, res, next) => {
  let user = req.user;
  let token = jwt.sign({
  username: req.user.username,
  password: req.user.password
  }, process.env.SECRET_KEY, {expiresIn: '3h'})  
  res.send({'token': token});
}



module.exports = methods;