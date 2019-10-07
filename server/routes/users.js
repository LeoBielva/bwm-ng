const express = require('express');
const User = require('../contoller/user');
const router = express.Router();

router.post('/auth', User.auth);

router.post('/register', User.register);

module.exports = router;