import styles from "./QuoteDisplay.module.scss";
import { useGame } from "../../context/GameContext";

const QuoteDisplay = () => {
  const { currentQuote } = useGame();
  return <div className={styles.quote_container}>{currentQuote.quote}</div>;
};

export default QuoteDisplay;
