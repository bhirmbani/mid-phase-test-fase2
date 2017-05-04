const express = require('express');
const router = express.Router();
const passport = require('passport');
const user = require('../controllers/user');
const isLogin = require('../helpers/auth');

// signup & login
router.post('/signup', user.signup);
// router.post('/login', passport.authenticate('local', {session: false}), user.login);

module.exports = router;