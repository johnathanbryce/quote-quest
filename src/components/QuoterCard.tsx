import { useGame } from "../context/GameContext";

type QuoterCardProps = {
  id: string;
  name: string;
};

const QuoterCard = ({ id, name }: QuoterCardProps) => {
  const { handleSelectAnswer } = useGame();
  return (
    <div id={id} onClick={() => handleSelectAnswer(id)}>
      {name}
    </div>
  );
};

export default QuoterCard;
