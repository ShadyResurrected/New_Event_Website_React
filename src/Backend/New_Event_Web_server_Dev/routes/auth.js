const express = require('express');
const { createOrUpdateUser } = require('../controller/auth');
const { authCheck } = require('../middleware/auth');
const router = express.Router();

router.post('/create-update-user', authCheck, createOrUpdateUser);

module.exports = router;
