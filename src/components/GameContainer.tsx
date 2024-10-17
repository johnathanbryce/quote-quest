import QuoteDisplay from "./QuoteDisplay/QuoteDisplay";
import QuoterList from "./QuoterList";
import GameHeader from "./GameHeader";
import GameFooter from "./GameFooter";
// context
import { useGame } from "../context/GameContext";

// wrap all the main game logic and manage the state
const GameContainer = () => {
  const { score, currentQuote, quoters, handleSelectQuoter } = useGame();

  return (
    <div className="game_container">
      <GameHeader title="Quote Quest" score={score} />
      <QuoteDisplay quote={currentQuote} />
      <QuoterList quoters={quoters} handleSelectQuoter={handleSelectQuoter} />
      <GameFooter />
    </div>
  );
};

export default GameContainer;
