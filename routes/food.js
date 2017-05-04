const express = require('express');
const router = express.Router();
const passport = require('passport');
const food = require('../controllers/food');
const isLogin = require('../helpers/auth');

// create
router.post('/create', isLogin.auth, food.create);

// get route
router.get('/', isLogin.auth, food.getAll);
router.get('/:name', isLogin.auth, food.findByName);

// edit
router.put('/:name', isLogin.auth, food.edit);

// delete
router.delete('/:name', isLogin.auth, food.delete);

module.exports = router;