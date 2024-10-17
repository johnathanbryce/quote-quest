import styles from "./QuoteDisplay.module.scss";

type QuoteDisplayProps = {
  quote: string;
};

const QuoteDisplay = ({ quote }: QuoteDisplayProps) => {
  return <div className={styles.quote_container}>{quote}</div>;
};

export default QuoteDisplay;
