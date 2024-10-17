import { GameProvider } from "../context/GameContext";
import GameContainer from "../components/GameContainer";

const GamePage = () => {
  return (
    <GameProvider>
      <GameContainer />
    </GameProvider>
  );
};

export default GamePage;
