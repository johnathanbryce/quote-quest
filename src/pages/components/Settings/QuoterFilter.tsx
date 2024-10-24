import styles from "./Settings.module.scss";
import ToggleActiveQuoter from "./ToggleActiveQuoter/ToggleActiveQuoter";
// types
import { Quoter } from "../../../types/quotes";

type QuoterFilterProps = {
  quotersList: Quoter[];
};

const QuoterFilter = ({ quotersList }: QuoterFilterProps) => {
  const quotersListAiRemoved = quotersList.slice(1);
  // const activeQuotersCount = quotersList.filter((quoter) => quoter.isActive).length;

  return (
    <div className={styles.quoter_filter_container}>
      <h4>Filter Quoters</h4>
      <div className={styles.toggle_options_container}>
        {quotersListAiRemoved.map((quoter) => (
          <div key={quoter.id} className={styles.toggle_option}>
            <ToggleActiveQuoter
              image={quoter.image}
              name={quoter.name}
              isActive={quoter.isActive}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoterFilter;
