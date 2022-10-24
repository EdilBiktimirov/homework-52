import Card from "./Card";

const suits: string[] = ['diams', 'hearts', 'clubs', 'spades'];
const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

class CardDeck {
  cardsArray: Card[];

  constructor() {
    this.cardsArray = [];

    for (let i = 0; i < suits.length; i++) {
      for (let k = 0; k < ranks.length; k++) {
        const NewCard = new Card(ranks[k], suits[i]);
        this.cardsArray.push(NewCard);
      }
    }
  }

  getCard(): Card {
    const min = 0;
    const max = this.cardsArray.length - 1;
    const randomInt: number = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomCard = this.cardsArray.splice(randomInt, 1);

    return randomCard[0];
  }

  getCards(howMany: number): Card[] {
    const data = [];
    for (let i = 0; i < howMany; i++) {
      data.push(this.getCard());
    }
    return data;
  }
}

export default CardDeck;