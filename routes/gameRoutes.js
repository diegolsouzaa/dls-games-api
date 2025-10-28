const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');
const { authenticate, authorizeSeller, authorizeBuyer } = require('../middleware/authMiddleware');

router.post('/', authenticate, authorizeSeller, gameController.addGame);
router.get('/', authenticate, authorizeBuyer, gameController.getGames);
router.get('/search', authenticate, authorizeBuyer, gameController.searchGames);

module.exports = router;
