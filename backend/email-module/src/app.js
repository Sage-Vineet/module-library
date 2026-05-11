const express = require('express');
const cors = require('cors');
require('dotenv').config();

const emailRoutes = require('./routes/email.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/email', emailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Email Module Running on Port ${PORT}`);
});
