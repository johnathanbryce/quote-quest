import styles from "./QuoteDisplay.module.scss";
// types
import { Quote } from "../../types/quotes";

type QuoteDisplayProps = {
  currentQuote: Quote;
};

const QuoteDisplay = ({ currentQuote }: QuoteDisplayProps) => {
  return <div className={styles.quote_container}>{currentQuote.quote}</div>;
};

export default QuoteDisplay;
