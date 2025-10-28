// Game model (in-memory)
class Game {
  constructor(id, title, description, price, sellerId) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.sellerId = sellerId;
  }
}
module.exports = Game;
