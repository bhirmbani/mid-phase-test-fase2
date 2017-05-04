const express = require('express');
const router = express.Router();
const passport = require('passport');
const user = require('../controllers/user');
const isLogin = require('../helpers/auth');

// signup & login
router.post('/signup', user.signup);
router.post('/login', passport.authenticate('local', {session: false}), user.login);

// get method
router.get('/', isLogin.auth, user.getAll);
router.get('/:username', isLogin.auth, user.findByUsername)

// edit
router.put('/:username', isLogin.auth, user.edit);

// delete
router.delete('/:username', isLogin.auth, user.delete)

module.exports = router;