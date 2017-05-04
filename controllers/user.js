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

methods.getAll = (req, res, next) => {
  User.find({}, (err, users) => {
    if(err) res.send(err);
    res.send(users);
  })
}

methods.findByUsername = (req, res, next) => {
  User.findOne({ username: req.params.username }, (err, user) => {
    if(err) res.send(err);
    res.send(user)
  })
}

methods.edit = (req, res, next) => {
  User.findOneAndUpdate({ username: req.params.username }, { $set: req.body }, (err, done) => {
    if (err) res.send(err)
    res.send(`user edited`);
  })
}

methods.delete = (req, res, next) => {
  User.remove({ username: req.params.username }, (err, done) => {
    if (err) res.send(err)
    res.send(`user successfully deleted`);
  })
}

module.exports = methods;