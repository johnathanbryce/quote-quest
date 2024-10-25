import Button from "../Button/Button";

type ResetGameProps = {
  handleResetGame: () => void;
};

const ResetGame = ({ handleResetGame }: ResetGameProps) => {
  return (
    <div>
      <Button onClick={handleResetGame}>Reset Game</Button>
    </div>
  );
};

export default ResetGame;
