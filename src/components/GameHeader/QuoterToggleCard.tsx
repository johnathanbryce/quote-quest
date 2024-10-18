import Avatar from "../Avatar/Avatar";
// context
import { useGame } from "../../context/GameContext";

type QuoterToggleCardProps = {
  name: string;
  image: string;
};

const QuoterToggleCard = ({ name, image }: QuoterToggleCardProps) => {
  const { handleQuoterToggle } = useGame();

  return (
    <div onClick={handleQuoterToggle}>
      <Avatar name={name} image={image} />
    </div>
  );
};

export default QuoterToggleCard;
