const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db');
const userRoute = require('./route/user');
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(express.json());
app.use(cors());
app.use(cookieParser());

connectDB();

app.use('/user', userRoute);

if (process.env.NODE_ENV !== 'production') {
  app.use('/', express.static('frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend/build/index.html'));
  });
}

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
