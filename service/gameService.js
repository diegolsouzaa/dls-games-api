const { games } = require('./db');
const Game = require('../model/Game');

function addGame(title, description, price, sellerId) {
  const id = games.length + 1;
  const game = new Game(id, title, description, price, sellerId);
  games.push(game);
  return game;
}

function getGames() {
  return games;
}

function searchGames(query) {
  return games.filter(g => g.title.toLowerCase().includes(query.toLowerCase()));
}

module.exports = { addGame, getGames, searchGames };
