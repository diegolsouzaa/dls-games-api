const gameService = require('../service/gameService');

function addGame(req, res) {
  const { title, description, price } = req.body;
  const sellerId = req.user.id;
  if (!title || !description || !price) return res.status(400).json({ error: 'Missing fields' });
  const game = gameService.addGame(title, description, price, sellerId);
  res.status(201).json(game);
}

function getGames(req, res) {
  res.json(gameService.getGames());
}

function searchGames(req, res) {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Missing search query' });
  res.json(gameService.searchGames(q));
}

module.exports = { addGame, getGames, searchGames };
