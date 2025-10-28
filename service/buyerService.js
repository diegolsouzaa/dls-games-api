const { buyers } = require('./db');
const Buyer = require('../model/Buyer');

function registerBuyer(name, email, password) {
  const id = buyers.length + 1;
  const buyer = new Buyer(id, name, email, password);
  buyers.push(buyer);
  return buyer;
}

function findBuyerByEmail(email) {
  return buyers.find(b => b.email === email);
}

module.exports = { registerBuyer, findBuyerByEmail };
