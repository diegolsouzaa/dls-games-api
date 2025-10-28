const jwt = require('jsonwebtoken');
const SECRET = 'supersecretkey';

function generateToken(user, role) {
  return jwt.sign({ id: user.id, role }, SECRET, { expiresIn: '1h' });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
}

module.exports = { generateToken, verifyToken };
