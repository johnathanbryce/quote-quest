import React, { useState } from "react";
import QuoteDisplay from "./QuoteDisplay";
import QuoterList from "./QuoterList";
import GameHeader from "./GameHeader";
import GameFooter from "./GameFooter";

// wrap all the main game logic and manage the state
const GameContainer = () => {
  return (
    <div>
      <GameHeader title="Quote Quest" score={score} />
      <QuoteDisplay quote={currentQuote} />
      <QuoterList quoters={quoters} handleSelect={handleSelect} />
      <GameFooter />
    </div>
  );
};

export default GameContainer;
