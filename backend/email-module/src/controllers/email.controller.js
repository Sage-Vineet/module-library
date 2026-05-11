const {
    sendWelcomeEmail,
    sendOTPEmail,
} = require('../services/email.service');

const sendWelcome = async (req, res) => {
    try {
        const { email, name } = req.body;

        await sendWelcomeEmail(email, name);

        res.json({
            success: true,
            message: 'Welcome email sent successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const sendOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;

        await sendOTPEmail(email, otp);

        res.json({
            success: true,
            message: 'OTP email sent successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    sendWelcome,
    sendOTP,
};
