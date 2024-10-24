import styles from "./GamePageStyles.module.scss";
import MainGameContainer from "./components/MainGameContainer/MainGameContainer";
import Settings from "./components/Settings/Settings";

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
        <Settings />
      </div>
    </section>
  );
};

export default GamePage;
