import styles from "./MainGameContainer.module.scss";
// components
import Avatar from "./Avatar";

type QuoterCardProps = {
  name: string;
  image: string;
  handleSelect: (name: string) => void;
};

const QuoterCard = ({ name, image, handleSelect }: QuoterCardProps) => {
  return (
    <div onClick={() => handleSelect(name)} className={styles.quoter_card}>
      <Avatar name={name} image={image} />
      <p>{name}</p>
    </div>
  );
};

export default QuoterCard;
