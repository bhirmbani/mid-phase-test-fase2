const express = require('express');
const router = express.Router();
const passport = require('passport');
const food = require('../controllers/food');
const isLogin = require('../helpers/auth');

// create
router.post('/create', food.create);

// get route
router.get('/', food.getAll);
router.get('/:id', food.findByName);

module.exports = router;