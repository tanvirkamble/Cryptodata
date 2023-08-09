const express = require('express');
const CryptoModel = require('../models/schema');
const axios = require('axios');
const path = require('path');

// Fetch data from API and store in the database
const get_fetchData = async (req, res) => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const data = response.data;

    // Store data in MongoDB
    await CryptoModel.insertMany(Object.values(data));

    //res.send('Data fetched and stored successfully!');
    res.render('fetch-succes');
  } catch (error) {
    res.status(500).send('An error occurred while fetching data.');
  }
};

// Retrieve stored data from the database
const get_GetData = async (req, res) => {
  try {
    const cryptoData = await CryptoModel.find().limit(10);
    // res.json(cryptoData);
    res.render('data', { data: cryptoData });
  } catch (error) {
    res.status(500).send('An error occurred while retrieving data.');
    console.log(error);
  }
};

const get_dashboard = async (req, res) => {
  res.render('dashboard');
};

module.exports = { get_GetData, get_fetchData, get_dashboard };
