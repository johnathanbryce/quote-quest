import styles from "./HeaderStyles.module.scss";

type ScoreProps = {
  score: number;
  computerScore: number;
  roundWinnerIsUser: boolean;
};

const Score = ({ score, computerScore, roundWinnerIsUser }: ScoreProps) => {
  return (
    <div className={styles.score_container}>
      <h3
        className={`${styles.score_title} ${
          roundWinnerIsUser ? styles.score_title_player_wins : ""
        }`}
      >
        Score
      </h3>
      <p className={!roundWinnerIsUser ? styles.computer_wins : ""}>Quote Quest: {computerScore}</p>
      <p className={roundWinnerIsUser ? styles.player_wins : ""}>You: {score}</p>
    </div>
  );
};

export default Score;
