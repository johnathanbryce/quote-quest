import styles from "./MainGameContainer.module.scss";
// components
import Panel from "../Panel/Panel";
import QuoterOptionsList from "./QuoterOptionsList";
import GameHeader from "./GameHeader";
import QuoteDisplay from "./QuoteDisplay/QuoteDisplay";
import AnswerHeader from "./AnswerHeader";
// context
import { useGame } from "../../../context/GameContext";

const MainGameContainer = () => {
  const { isGameStarted, roundWinnerIsUser, correctAnswer } = useGame();

  return (
    <Panel>
      <section className={styles.main_game_container}>
        <GameHeader
          isGameStarted={isGameStarted}
          roundWinnerIsUser={roundWinnerIsUser}
          correctAnswer={correctAnswer}
        />
        <QuoteDisplay />
        <AnswerHeader />
        <QuoterOptionsList />
        <button> How To Play (modal)</button>
      </section>
    </Panel>
  );
};

export default MainGameContainer;
