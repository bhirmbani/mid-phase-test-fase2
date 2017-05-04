const express = require('express');
const router = express.Router();
const passport = require('passport');
const restaurant = require('../controllers/restaurant');
const isLogin = require('../helpers/auth');

// create
router.post('/create', isLogin.auth, restaurant.create);

// get route
router.get('/', isLogin.auth, restaurant.getAll);
router.get('/:name', isLogin.auth, restaurant.findByName);

// edit
router.put('/:name', isLogin.auth, restaurant.edit);

// delete
router.delete('/:name', isLogin.auth, restaurant.delete);

module.exports = router;