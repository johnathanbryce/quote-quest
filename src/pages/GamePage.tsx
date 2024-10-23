import { GameProvider } from "../context/GameContext";
import Panel from "../components/Panel/Panel";
import QuoterOptionsList from "../components/QuoterOptionsList";

const GamePage = () => {
  return (
    <GameProvider>
      <div className="game_container_main">
        <div className="quote_container">
          <Panel>
            <h2>Main Game Container </h2>
            <p>
              QUOTE SECTION: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nemo
              architecto illo modi qui asperiores ratione hic in, nostrum nulla voluptatum laborum
              illum incidunt obcaecati cumque, blanditiis aliquid voluptatibus quis?
            </p>
            {/* display quoter options in a flex-wrap: */}
            <QuoterOptionsList />
            <button> How To Play (modal)</button>
          </Panel>
        </div>

        {/*         <div className="options_container">
          <Panel glowStrength="light">
            <p>Options Icon</p>
    
          </Panel>
        </div> */}
      </div>
    </GameProvider>
  );
};

export default GamePage;
