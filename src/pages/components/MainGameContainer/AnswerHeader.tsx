import styles from "./MainGameContainer.module.scss";

const AnswerHeader = () => {
  const headerTitleOptions = [
    "Whose words are these?",
    "Guess the genius behind this!",
    "Who’s responsible for this gem?",
    "Who uttered this brilliance?",
    "Which mastermind said this?",
    "Which legend blessed us with this?",
    "Who’s behind this masterpiece?",
    "Which genius thought this up?",
    "Who dared to say this?",
    "Which philosopher graced us with this?",
    "Who should get credit for this one?",
    "Guess who let this one slip!",
    "Who claims this work of art?",
    "Who owns this quote disaster?",
    "Who decided to say that out loud?",
    "Whose mouth did this escape from?",
    "Who do we have to thank for this?",
    "Which brainiac was behind this?",
    "Who should we blame for this?",
    "Which icon came up with this?",
  ];

  const randomIndex = Math.floor(Math.random() * headerTitleOptions.length);

  return <h4 className={styles.quoters_list_header}>{headerTitleOptions[randomIndex]}</h4>;
};

export default AnswerHeader;
