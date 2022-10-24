import Card from "./Card";

class PokerHand {
  constructor(public cards: Card[]) {
  }

  getOutcome() {
    let countRank: number = 0;
    let countSuit: number = 0;

    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[0].suit === this.cards[i].suit) {
        countSuit++
      }
      for (let k = 0; k < this.cards.length; k++) {
        if (this.cards[i].rank === this.cards[k].rank && this.cards[i].suit !== this.cards[k].suit) {
          countRank++;
        }
      }
    }

    let message = '';

    if (countRank === 2) {
      message = 'Одна пара';
    } else if (countRank === 4) {
      message = 'Две пары';
    } else if (countRank === 6) {
      message = 'Тройка';
    } else if (countSuit === 5) {
      message = 'Флэш';
    } else if (countRank === 12) {
      message = 'Каре';
    } else if (countRank === 8) {
      message = 'Фулл-хаус';
    }
    return message;
  }
}

export default PokerHand;