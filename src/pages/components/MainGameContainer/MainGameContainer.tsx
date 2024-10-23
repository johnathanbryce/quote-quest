import styles from "./MainGameContainer.module.scss";
import Panel from "../Panel/Panel";
import QuoterOptionsList from "./QuoterOptionsList";
import GameHeader from "./GameHeader";
import QuoteDisplay from "./QuoteDisplay/QuoteDisplay";

const MainGameContainer = () => {
  return (
    <Panel>
      <section className={styles.main_game_container}>
        <GameHeader />
        <QuoteDisplay />
        {/* display quoter options in a flex-wrap: */}
        <QuoterOptionsList />
        <button> How To Play (modal)</button>
      </section>
    </Panel>
  );
};

export default MainGameContainer;
