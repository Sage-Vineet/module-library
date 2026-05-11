const express = require('express');
const router = express.Router();

const {
    sendWelcome,
    sendOTP,
} = require('../controllers/email.controller');

router.post('/welcome', sendWelcome);
router.post('/otp', sendOTP);

module.exports = router;
