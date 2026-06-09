const cors = require('cors');
require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/db');
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoute = require('./routes/user.route');

app.use('/api/users', userRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;