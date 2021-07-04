const express = require('express');
const router = express.Router();

const notification = require('./../routers/notification')

router.use('/notifications', notification);

module.exports = router