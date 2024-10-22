import React from "react";
import styles from "./GameHeader.module.scss";
// context
import { useGame } from "../../context/GameContext";

const Score = () => {
  const { score, computerScore } = useGame();
  return (
    <div className={styles.score_container}>
      <p>Quote Quest: {score}</p>
      <p>You: {computerScore}</p>
    </div>
  );
};

export default Score;
