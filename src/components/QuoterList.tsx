import React from "react";
import QuoterCard from "./QuoterCard";
import { useGame } from "../context/GameContext";

const QuoterList = () => {
  const { quotersList } = useGame();
  return (
    <div>
      {quotersList.map((quoter) => (
        <QuoterCard key={quoter.id} id={quoter.id} name={quoter.name} />
      ))}
    </div>
  );
};

export default QuoterList;
