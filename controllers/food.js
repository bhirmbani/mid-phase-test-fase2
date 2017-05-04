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

methods.findByName = (req, res, next) => {
  Food.findOne({ name: req.params.name }, (err, food) => {
    if(err) res.send(err);
    res.send(food)
  })
}

methods.edit = (req, res, next) => {
  Food.findOneAndUpdate({ name: req.params.name }, { $set: req.body }, (err, done) => {
    if (err) res.send(err)
    res.send(`food edited`);
  })
}

methods.delete = (req, res, next) => {
  Food.remove({ name: req.params.name }, (err, done) => {
    if (err) res.send(err)
    res.send(`food successfully deleted`);
  })
}

module.exports = methods;