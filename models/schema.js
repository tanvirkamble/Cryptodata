const mongoose = require('mongoose');

// Create a schema for the data
const cryptoSchema = new mongoose.Schema({
  name: String,
  last: Number,
  buy: Number,
  sell: Number,
  volume: Number,
  base_unit: String,
});

const CryptoModel = mongoose.model('Crypto', cryptoSchema);

module.exports = CryptoModel;
