import styles from "./Settings.module.scss";

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
      <p>
        Oh, and if making random guesses is too exhausting for you, there’s even a filter option to
        narrow down the quoters. You know, in case you need to make this incredibly simple game even
        simpler.
      </p>
      <p>But seriously, just have fun with it. Don’t overthink it, genius! </p>
    </div>
  );
};

export default GameInstructions;
