const express = require('express');
const router = express.Router();
const passport = require('passport');
const food = require('../controllers/food');
const isLogin = require('../helpers/auth');

// create
router.post('/create', food.create);

// get route
router.get('/', food.getAll);
router.get('/:name', food.findByName);

// edit
router.put('/:name', food.edit);

// delete
router.delete('/:name', food.delete);

module.exports = router;