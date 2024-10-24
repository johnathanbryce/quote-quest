import styles from "./HeaderStyles.module.scss";
import Panel from "../../components/Panel/Panel";
import Score from "./Score";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo_container}>
        <h1 className={styles.quote_quest_logo}>
          <span className={styles.quote}>Quote</span>
          <br />
          <span className={styles.quest}>Quest</span>
        </h1>
      </div>
      <Panel glowStrength="light">
        <Score />
      </Panel>
    </header>
  );
};

export default Header;
