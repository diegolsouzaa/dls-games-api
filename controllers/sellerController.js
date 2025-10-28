const sellerService = require('../service/sellerService');
const authService = require('../service/authService');

function register(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'Missing fields' });
  if (sellerService.findSellerByEmail(email)) return res.status(409).json({ error: 'Email already registered' });
  const seller = sellerService.registerSeller(name, email, password);
  res.status(201).json(seller);
}

function login(req, res) {
  const { email, password } = req.body;
  const seller = sellerService.findSellerByEmail(email);
  if (!seller || seller.password !== password) return res.status(401).json({ error: 'Invalid credentials' });
  const token = authService.generateToken(seller, 'seller');
  res.json({ token });
}

module.exports = { register, login };
