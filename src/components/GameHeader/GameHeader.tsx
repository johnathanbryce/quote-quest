import styles from "./GameHeader.module.scss";
import Score from "./Score";
import QuoterOptionsList from "./QuoterOptionsList";

const GameHeader = () => {
  return (
    <div className={styles.game_header_main_container}>
      <div className={styles.game_header_top_container}>
        <h2>Quote Quest</h2>
        <Score />
      </div>
      <QuoterOptionsList />
    </div>
  );
};

export default GameHeader;
