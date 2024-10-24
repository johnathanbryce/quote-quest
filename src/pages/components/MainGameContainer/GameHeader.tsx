import styles from "./MainGameContainer.module.scss";

type GameHeaderProps = {
  isGameStarted: boolean;
  roundWinnerIsUser: boolean;
  correctAnswer: string;
};

const GameHeader = ({ isGameStarted, roundWinnerIsUser, correctAnswer }: GameHeaderProps) => {
  console.log(correctAnswer.length < 0);
  return (
    <div className={styles.game_header_container}>
      <div className={styles.circle}></div>
      <h4 className={styles.game_header_title}>
        {!isGameStarted
          ? "Quote Quest" // initial page load / reset game
          : roundWinnerIsUser
          ? "Quote Quest" // when user wins
          : `The correct answer is ${correctAnswer}`}
      </h4>
      <div className={styles.circle}></div>
    </div>
  );
};

export default GameHeader;
