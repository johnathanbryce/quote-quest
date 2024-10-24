import styles from "./HeaderStyles.module.scss";
import Panel from "../../components/Panel/Panel";
import Score from "./Score";
import Logo from "./Logo";
// context
import { useGame } from "../../../context/GameContext";

const Header = () => {
  const { score, computerScore, roundWinnerIsUser, isGameStarted } = useGame();
  return (
    <header className={styles.header}>
      <Logo roundWinnerIsUser={roundWinnerIsUser} />
      <Panel glowStrength="light">
        <Score
          score={score}
          computerScore={computerScore}
          roundWinnerIsUser={roundWinnerIsUser}
          isGameStarted={isGameStarted}
        />
      </Panel>
    </header>
  );
};

export default Header;
