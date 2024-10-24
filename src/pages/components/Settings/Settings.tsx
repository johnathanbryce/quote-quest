import { useState } from "react";
import styles from "./Settings.module.scss";
// components
import Panel from "../Panel/Panel";
// icons
import { IoMdSettings, IoMdClose } from "react-icons/io";
// third party
import { Transition } from "react-transition-group";
// context
import { useGame } from "../../../context/GameContext";

const duration = 300;

const defaultStyle = {
  transition: `max-height ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
  overflow: "hidden",
  maxHeight: 0,
  opacity: 0,
};

const transitionStyles = {
  entering: { maxHeight: 0, opacity: 0 },
  entered: { maxHeight: "500px", opacity: 1 },
  exiting: { maxHeight: "500px", opacity: 1 },
  exited: { maxHeight: 0, opacity: 0 },
};

const Settings = () => {
  const { roundWinnerIsUser } = useGame();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleToggleSettings = () => {
    setIsSettingsOpen((prev) => !prev);
  };

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
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, corrupti iusto
                consequuntur voluptatibus ut soluta provident repudiandae minima deleniti labore
                rerum deserunt similique dolores expedita? Ad aut iure facere quas.
              </p>
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
