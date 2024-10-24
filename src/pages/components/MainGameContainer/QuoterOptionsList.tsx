import styles from "./MainGameContainer.module.scss";
// components
import QuoterCard from "../Cards/QuoterCard";
import Panel from "../Panel/Panel";
// context
import { useGame } from "../../../context/GameContext";

const QuoterOptionsList = () => {
  const { quotersList, handleSelectAnswer } = useGame();

  return (
    <div className={styles.quoters_list_container}>
      {/* only display quoters who are active */}
      {quotersList.map((quoter) => {
        if (quoter.isActive) {
          return (
            <Panel glowStrength="light" key={quoter.id}>
              <QuoterCard
                name={quoter.name}
                image={quoter.image}
                handleSelect={handleSelectAnswer}
              />
            </Panel>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default QuoterOptionsList;
