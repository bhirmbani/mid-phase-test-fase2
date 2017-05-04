const express = require('express');
const router = express.Router();
const passport = require('passport');
const restaurant = require('../controllers/restaurant');
const isLogin = require('../helpers/auth');

// create
router.post('/create', restaurant.create);

// get route
router.get('/', restaurant.getAll);
router.get('/:name', restaurant.findByName);

// edit
router.put('/:name', restaurant.edit);

// delete
router.delete('/:name', restaurant.delete);

module.exports = router;