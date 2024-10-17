import QuoteDisplay from "./QuoteDisplay/QuoteDisplay";
import QuoterList from "./QuoterList";
import GameHeader from "./GameHeader";
import GameFooter from "./GameFooter";
// context
import { useGame } from "../context/GameContext";

// wrap all the main game logic and manage the state
const GameContainer = () => {
  const { score, currentQuote, quotersList } = useGame();

  console.log("curr quote", currentQuote);

  return (
    <div className="game_container">
      <GameHeader title="Quote Quest" score={score} />
      <QuoteDisplay currentQuote={currentQuote} />
      <QuoterList quoters={quotersList} />
      <GameFooter />
    </div>
  );
};

export default GameContainer;
