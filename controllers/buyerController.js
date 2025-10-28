const buyerService = require('../service/buyerService');
const authService = require('../service/authService');

function register(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'Missing fields' });
  if (buyerService.findBuyerByEmail(email)) return res.status(409).json({ error: 'Email already registered' });
  const buyer = buyerService.registerBuyer(name, email, password);
  res.status(201).json(buyer);
}

function login(req, res) {
  const { email, password } = req.body;
  const buyer = buyerService.findBuyerByEmail(email);
  if (!buyer || buyer.password !== password) return res.status(401).json({ error: 'Invalid credentials' });
  const token = authService.generateToken(buyer, 'buyer');
  res.json({ token });
}

module.exports = { register, login };
