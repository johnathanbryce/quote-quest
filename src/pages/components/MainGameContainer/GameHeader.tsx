import styles from "./MainGameContainer.module.scss";
// data
import { correctAnswerHeaderList } from "./_data/gameMessages";

type GameHeaderProps = {
  isGameStarted: boolean;
  roundWinnerIsUser: boolean;
  correctAnswer: string;
};

const GameHeader = ({ isGameStarted, roundWinnerIsUser, correctAnswer }: GameHeaderProps) => {
  const randomIndex = Math.floor(Math.random() * correctAnswerHeaderList.length);
  const randomCorrectAnswerHeader = correctAnswerHeaderList[randomIndex];
  return (
    <div
      className={`${styles.game_header_container_base} ${
        roundWinnerIsUser ? styles.game_header_container_winner : styles.game_header_container
      }`}
    >
      <div className={styles.circle}></div>
      <h2 className={styles.game_header_title}>
        {!isGameStarted
          ? "Quote Quest" // initial page load / reset game
          : roundWinnerIsUser
          ? `${randomCorrectAnswerHeader}` // when user wins
          : `Correct Answer: ${correctAnswer}`}
      </h2>
      <div className={styles.circle}></div>
    </div>
  );
};

export default GameHeader;
