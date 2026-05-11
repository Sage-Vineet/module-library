const transporter = require('../config/email.config');

const sendWelcomeEmail = async (email, name) => {
    return transporter.sendMail({
        from: process.env.FROM_EMAIL,
        to: email,
        subject: 'Welcome to MySage',
        html: `<h2>Welcome ${name}</h2><p>Your account is ready.</p>`,
    });
};

const sendOTPEmail = async (email, otp) => {
    return transporter.sendMail({
        from: process.env.FROM_EMAIL,
        to: email,
        subject: 'OTP Verification',
        html: `<h2>Your OTP is ${otp}</h2>`,
    });
};

module.exports = {
    sendWelcomeEmail,
    sendOTPEmail,
};
