const { verifyToken } = require('../service/authService');

function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ error: 'No token provided' });
  const token = authHeader.split(' ')[1];
  const user = verifyToken(token);
  if (!user) return res.status(401).json({ error: 'Invalid token' });
  req.user = user;
  next();
}

function authorizeSeller(req, res, next) {
  if (req.user.role !== 'seller') return res.status(403).json({ error: 'Access denied: seller only' });
  next();
}

function authorizeBuyer(req, res, next) {
  if (req.user.role !== 'buyer') return res.status(403).json({ error: 'Access denied: buyer only' });
  next();
}

module.exports = { authenticate, authorizeSeller, authorizeBuyer };
