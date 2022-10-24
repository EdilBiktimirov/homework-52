import React, {useState} from 'react';
import CardView from "./CardView/CardView";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";
import PokerHand from "./lib/PokerHand";

let handResult = '';

function App() {
  const [cardsStatus, setCardsStatus] = useState<Card[]>([]);

  const dealCards = () => {
    const newCardDeck = new CardDeck();
    const newCards = newCardDeck.getCards(5);
    setCardsStatus(newCards);

    const Hand = new PokerHand(newCards);
    handResult = Hand.getOutcome();
  }

  if (cardsStatus.length === 0) {
    return (
      <div className="App">
        <button onClick={dealCards}>Раздать карты</button>
      </div>);
  } else {
    return (
      <div className="App">
        <button onClick={dealCards}>Раздать карты</button>
        <div className="playingCards faceImages">
          <CardView rank={cardsStatus[0].rank} suit={cardsStatus[0].suit}/>
          <CardView rank={cardsStatus[1].rank} suit={cardsStatus[1].suit}/>
          <CardView rank={cardsStatus[2].rank} suit={cardsStatus[2].suit}/>
          <CardView rank={cardsStatus[3].rank} suit={cardsStatus[3].suit}/>
          <CardView rank={cardsStatus[4].rank} suit={cardsStatus[4].suit}/>
        </div>
        <p>{handResult}</p>
      </div>
    );
  }
}

export default App;
