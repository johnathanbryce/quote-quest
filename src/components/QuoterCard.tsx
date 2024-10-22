import Avatar from "./Avatar/Avatar";

type QuoterCardProps = {
  name: string;
  image: string;
  handleSelect: (name: string) => void;
};

const QuoterCard = ({ name, image, handleSelect }: QuoterCardProps) => {
  return (
    <div onClick={() => handleSelect(name)}>
      <Avatar name={name} image={image} />
    </div>
  );
};

export default QuoterCard;
