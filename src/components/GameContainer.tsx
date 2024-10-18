import QuoteDisplay from "./QuoteDisplay/QuoteDisplay";
import QuoterList from "./QuoterList";
import GameHeader from "./GameHeader/GameHeader";
import GameFooter from "./GameFooter";

const GameContainer = () => {
  return (
    <div className="game_container">
      <GameHeader />
      <QuoteDisplay />
      <QuoterList />
      <GameFooter />
    </div>
  );
};

export default GameContainer;
