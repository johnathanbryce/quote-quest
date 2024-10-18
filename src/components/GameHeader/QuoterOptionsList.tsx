import styles from "./GameHeader.module.scss";
import QuoterToggleCard from "./QuoterToggleCard";
// context
import { useGame } from "../../context/GameContext";

const QuoterOptionsList = () => {
  const { quotersList } = useGame();
  return (
    <div className={styles.quoter_list_container}>
      {quotersList.map((quoter) => (
        <QuoterToggleCard name={quoter.name} image={quoter.image} />
      ))}
    </div>
  );
};

export default QuoterOptionsList;
