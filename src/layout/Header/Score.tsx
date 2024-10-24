import styles from "./HeaderStyles.module.scss";
// context
import { useGame } from "../../context/GameContext";

const Score = () => {
  const { score, computerScore } = useGame();
  return (
    <div className={styles.score_container}>
      <h5 className={styles.score_title}>Score</h5>
      <p>Quote Quest: {computerScore}</p>
      <p>You: {score}</p>
    </div>
  );
};

export default Score;
