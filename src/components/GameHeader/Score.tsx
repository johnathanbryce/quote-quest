import React from "react";
import styles from "./GameHeader.module.scss";
// context
import { useGame } from "../../context/GameContext";

const Score = () => {
  const { score } = useGame();
  return (
    <div className={styles.score_container}>
      <h4>Score: </h4>
      <h4>{score}</h4>
    </div>
  );
};

export default Score;
