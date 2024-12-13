const express = require('express');
const app = express();
require('dotenv').config();
const userRoutes = require('./src/routes/userRoutes');
const userModel = require('./src/models/User');
const connectDB = require('./src/db');

const PORT = process.env.PORT || 3120

connectDB();

app.use(express.json());

app.use("*", (req, res, next) => {
    console.log("Request was made", req.originalUrl);
    next();
})

app.use('/', userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

