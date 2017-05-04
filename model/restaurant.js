const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema ({
  name: String,
  owner: Number,
  address: String,
  open_status: String
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;