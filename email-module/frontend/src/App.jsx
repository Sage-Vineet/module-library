import React, { useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:5000/api/email';

export default function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const sendWelcome = async () => {
    try {
      const res = await axios.post(`${API}/welcome`, { email, name });
      setMessage(res.data.message);
    } catch (err) {
      setMessage('Failed to send welcome email');
    }
  };

  const sendOtp = async () => {
    try {
      const res = await axios.post(`${API}/otp`, { email, otp });
      setMessage(res.data.message);
    } catch (err) {
      setMessage('Failed to send OTP email');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial' }}>
      <h1>MySage Email Module Demo</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />

      <input
        type="text"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      /><br /><br />

      <button onClick={sendWelcome}>Send Welcome Email</button>

      <button onClick={sendOtp} style={{ marginLeft: '10px' }}>
        Send OTP
      </button>

      <p>{message}</p>
    </div>
  );
}
