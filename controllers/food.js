const Food = require('../model/food');
const methods = {};

methods.create = (req, res, next) => {
  Food.create({
    name: req.body.name,
    price: req.body.price,
    expired_date: req.body.expired_date
  }, (err, done) => {
    if(err) res.send(err);
    res.send(done);
  })
}

methods.getAll = (req, res, next) => {
  Food.find({}, (err, foods) => {
    if(err) res.send(err);
    res.send(foods);
  })
}

module.exports = methods;