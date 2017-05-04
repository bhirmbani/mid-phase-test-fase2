const express = require('express');
const router = express.Router();
const passport = require('passport');
const restaurant = require('../controllers/restaurant');
const isLogin = require('../helpers/auth');

module.exports = router;