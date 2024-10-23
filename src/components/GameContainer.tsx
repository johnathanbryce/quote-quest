import QuoteDisplay from "./QuoteDisplay/QuoteDisplay";
import QuoterFilterList from "./QuoterFilterList";
import GameHeader from "./GameHeader/GameHeader";
import GameFooter from "./GameFooter";
import Panel from "./Panel/Panel";

const GameContainer = () => {
  return (
    <div className="game_container">
      <Panel>
        <h2>Content</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nemo architecto illo modi
          qui asperiores ratione hic in, nostrum nulla voluptatum laborum illum incidunt obcaecati
          cumque, blanditiis aliquid voluptatibus quis?
        </p>
      </Panel>
      {/* <GameHeader />
      <QuoteDisplay />
      <QuoterFilterList />
      <GameFooter /> */}
    </div>
  );
};

export default GameContainer;
