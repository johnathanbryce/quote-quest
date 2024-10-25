import { useState } from "react";
import styles from "./Settings.module.scss";
// components
import Panel from "../Panel/Panel";
import QuoterFilter from "./QuoterFilter";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import GameInstructions from "./GameInstructions";
import ResetGame from "./ResetGame";
// icons
import { IoMdSettings, IoMdClose } from "react-icons/io";
// third party
import { Transition, TransitionStatus } from "react-transition-group";
// context
import { useGame } from "../../../context/GameContext";

const duration = 300;

const defaultStyle = {
  transition: `max-height ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
  overflow: "hidden",
  maxHeight: 0,
  opacity: 0,
};

const transitionStyles: Record<TransitionStatus, React.CSSProperties> = {
  entering: { maxHeight: 0, opacity: 0 },
  entered: { maxHeight: "100%", opacity: 1 },
  exiting: { maxHeight: "100%", opacity: 1 },
  exited: { maxHeight: 0, opacity: 0 },
  unmounted: { maxHeight: 0, opacity: 0 },
};

const Settings = () => {
  const { roundWinnerIsUser, quotersList, handleResetGame } = useGame();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleSettings = () => setIsSettingsOpen((prev) => !prev);

  return (
    <Panel>
      <div className={styles.settings_container}>
        <Transition in={isSettingsOpen} timeout={duration}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <QuoterFilter quotersList={quotersList} />

              <div className={styles.buttons_container}>
                <ResetGame handleResetGame={handleResetGame} />
                <Button onClick={() => setIsModalOpen(true)}>How To Play</Button>
              </div>
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <GameInstructions />
              </Modal>
            </div>
          )}
        </Transition>

        <div className={styles.icon_container}>
          {!isSettingsOpen && (
            <IoMdSettings
              className={`${styles.settings_icon} ${
                roundWinnerIsUser ? styles.settings_icon_winner : ""
              }`}
              onClick={handleToggleSettings}
            />
          )}
          {isSettingsOpen && (
            <IoMdClose
              className={`${styles.settings_icon} ${
                roundWinnerIsUser ? styles.settings_icon_winner : ""
              }`}
              onClick={handleToggleSettings}
            />
          )}
        </div>
      </div>
    </Panel>
  );
};

export default Settings;
