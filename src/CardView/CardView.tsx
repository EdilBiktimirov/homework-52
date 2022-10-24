import React from "react";

interface cardProps extends React.PropsWithChildren {
  rank: string;
  suit: string;
}

const CardView: React.FC<cardProps> = props => {
  const cardClass = 'card rank-' + props.rank.toLowerCase() + ' ' + props.suit;

  let suitSymbol: string = '';

  if (props.suit === 'diams') {
   suitSymbol = '♦';
  } else if (props.suit === 'hearts') {
    suitSymbol = '♥';
  } else if (props.suit === 'clubs') {
    suitSymbol = '♣';
  } else if (props.suit === 'spades') {
    suitSymbol = '♠';
  }

  return (
    <span className={cardClass}>
    <span className="rank">{props.rank}</span>
    <span className="suit">{suitSymbol}</span>
</span>
  );
}

export default CardView;