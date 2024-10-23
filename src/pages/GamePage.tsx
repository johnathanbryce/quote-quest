import styles from "./GamePageStyles.module.scss";
import MainGameContainer from "./components/MainGameContainer";
import Panel from "./components/Panel/Panel";

const GamePage = () => {
  return (
    <section className={styles.game_container}>
      {/* empty flex container for left side on xl/lg screens */}
      <div className={styles.flex_container_secondary} />

      {/* main game flex container */}
      <div className={styles.flex_container_primary}>
        <MainGameContainer />
      </div>

      {/* flex container for right side on xl/lg screens*/}
      <div className={styles.flex_container_secondary}>
        <Panel glowStrength="light">
          <p>options...</p>
        </Panel>
      </div>
    </section>
  );
};

export default GamePage;
