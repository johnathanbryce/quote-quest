import { useState } from "react";

import styles from "./MainGameContainer.module.scss";
// components
import Panel from "../Panel/Panel";
import QuoterOptionsList from "./QuoterOptionsList";
import GameHeader from "./GameHeader";
import QuoteDisplay from "./QuoteDisplay/QuoteDisplay";
import AnswerHeader from "./AnswerHeader";
import GameInstructions from "./GameInstructions";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
// context
import { useGame } from "../../../context/GameContext";

const MainGameContainer = () => {
  // game context
  const { isGameStarted, roundWinnerIsUser, correctAnswer } = useGame();
  // modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Panel roundWinnerIsUser={roundWinnerIsUser}>
      <section className={styles.main_game_container}>
        <GameHeader
          isGameStarted={isGameStarted}
          roundWinnerIsUser={roundWinnerIsUser}
          correctAnswer={correctAnswer}
        />
        <QuoteDisplay />
        <AnswerHeader />
        <QuoterOptionsList />

        <div className={styles.button_container}>
          <Button onClick={() => setIsModalOpen(true)}>How To Play</Button>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <GameInstructions />
        </Modal>
      </section>
    </Panel>
  );
};

export default MainGameContainer;
