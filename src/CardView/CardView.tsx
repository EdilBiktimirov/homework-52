import React from "react";

interface cardProps extends React.PropsWithChildren {
  rank: string;
  suit: string;
}

const CardView: React.FC<cardProps> = props => {

  const cardClass = 'card rank-' + props.rank + ' ' + props.suit;

  if (props.suit === 'diams') {
    props.suit = '♦';
  } else if (props.suit === 'hearts') {
    props.suit = '♥';
  } else if (props.suit === 'clubs') {
    props.suit = '♣';
  } else if (props.suit === 'spades') {
    props.suit = '♠';
  }

  return (
    <span className={cardClass}>
    <span className="rank">{props.rank}</span>
    <span className="suit">{props.suit}</span>
</span>
  );
}

export default CardView;