import styles from "./MainGameContainer.module.scss";

const GameInstructions = () => {
  return (
    <div className={styles.instructions_container}>
      <h2>How to Play</h2>
      <p>
        If you haven't figured it out by now, then wow, you're really in for a challenge, aren't
        you? You just pick the person you think blurted out the quote. Go ahead, channel your inner
        psychic, or maybe just close your eyes and guess. Either way, good luck… it appears you’re
        gonna need it.
      </p>
    </div>
  );
};

export default GameInstructions;
