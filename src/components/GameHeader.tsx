import React from "react";

type GameHeaderProps = {
  title: string;
  score: number;
};

// title of the game and a score tracker
const GameHeader = ({ title, score }: GameHeaderProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p> {score}</p>
    </div>
  );
};

export default GameHeader;
