import styles from "./MainGameContainer.module.scss";

const GameHeader = () => {
  return (
    <div className={styles.game_header_container}>
      <div className={styles.circle}></div>
      <h4 className={styles.game_header_title}>QUOTE QUEST</h4>
      <div className={styles.circle}></div>
    </div>
  );
};

export default GameHeader;
