import styles from "./HeaderStyles.module.scss";
import Panel from "../../components/Panel/Panel";
import Score from "./Score";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>LOGO</h2>
      <Panel glowStrength="light">
        <Score />
      </Panel>
    </header>
  );
};

export default Header;
