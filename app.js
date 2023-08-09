const express = require('express');
require('dotenv').config(); //.env file
const ejs = require('ejs');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const connectDB = require('./db/db');
const routes = require('./routes/routes');

app.use('/', routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(3000, function () {
      console.log('Server started on port 3000');
    });
  } catch (error) {
    console.log(error);
  }
};

start();
