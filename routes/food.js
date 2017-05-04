const express = require('express');
const router = express.Router();
const passport = require('passport');
const food = require('../controllers/food');
const isLogin = require('../helpers/auth');

router.post('/create', food.create);

module.exports = router;