import QuoteDisplay from "./QuoteDisplay/QuoteDisplay";
import QuoterFilterList from "./QuoterFilterList";
import GameHeader from "./GameHeader/GameHeader";
import GameFooter from "./GameFooter";

const GameContainer = () => {
  return (
    <div className="game_container">
      <GameHeader />
      <QuoteDisplay />
      <QuoterFilterList />
      <GameFooter />
    </div>
  );
};

export default GameContainer;
