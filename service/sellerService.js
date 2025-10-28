const { sellers } = require('./db');
const Seller = require('../model/Seller');

function registerSeller(name, email, password) {
  const id = sellers.length + 1;
  const seller = new Seller(id, name, email, password);
  sellers.push(seller);
  return seller;
}

function findSellerByEmail(email) {
  return sellers.find(s => s.email === email);
}

module.exports = { registerSeller, findSellerByEmail };
