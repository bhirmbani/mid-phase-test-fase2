const express = require('express');
const router = express.Router();
const passport = require('passport');
const food = require('../controllers/food');
const isLogin = require('../helpers/auth');

// create
router.post('/create', food.create);

// get all
router.get('/', food.getAll);

module.exports = router;