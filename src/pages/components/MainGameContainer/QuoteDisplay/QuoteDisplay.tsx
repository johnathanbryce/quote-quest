import styles from "./QuoteDisplay.module.scss";
import { useGame } from "../../../../context/GameContext";

const QuoteDisplay = () => {
  const { currentQuote } = useGame();

  return (
    <div className={styles.quote_container}>
      <div className={styles.quotes_wrapper}>
        <span className={styles.opening_quote}>"</span>
        <blockquote>
          <p>{currentQuote.quote}</p>
        </blockquote>
        <span className={styles.closing_quote}>"</span>
      </div>
    </div>
  );
};

export default QuoteDisplay;
