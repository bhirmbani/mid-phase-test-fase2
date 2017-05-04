const Restaurant = require('../model/restaurant');
const methods = {};

methods.create = (req, res, next) => {
  Restaurant.create({
    name: req.body.name,
    owner: req.body.price,
    address: req.body.expired_date,
    open_status: req.body.open_status
  }, (err, done) => {
    if(err) res.send(err);
    res.send(done);
  })
}

methods.getAll = (req, res, next) => {
  Restaurant.find({}, (err, restaurants) => {
    if(err) res.send(err);
    res.send(restaurants);
  })
}

methods.findByName = (req, res, next) => {
  Restaurant.findOne({ name: req.params.name }, (err, restaurant) => {
    if(err) res.send(err);
    res.send(restaurant)
  })
}

methods.edit = (req, res, next) => {
  Restaurant.findOneAndUpdate({ name: req.params.name }, { $set: req.body }, (err, done) => {
    if (err) res.send(err)
    res.send(`restaurant edited`);
  })
}

methods.delete = (req, res, next) => {
  Restaurant.remove({ name: req.params.name }, (err, done) => {
    if (err) res.send(err)
    res.send(`restaurant successfully deleted`);
  })
}

module.exports = methods;