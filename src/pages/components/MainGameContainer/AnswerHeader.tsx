import styles from "./MainGameContainer.module.scss";
// data
import { headerTitleOptions } from "./_data/gameMessages";

const AnswerHeader = () => {
  const randomIndex = Math.floor(Math.random() * headerTitleOptions.length);
  const randomHeaderTitle = headerTitleOptions[randomIndex];

  return <h4 className={styles.quoters_list_header}>{randomHeaderTitle}</h4>;
};

export default AnswerHeader;
