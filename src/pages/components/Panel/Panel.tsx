import React, { ReactNode } from "react";
import styles from "./Panel.module.scss";
import { useGame } from "../../../context/GameContext";

interface PanelProps {
  children: ReactNode;
  glowStrength?: "light" | "regular";
  roundWinnerIsUser?: boolean;
}

const Panel: React.FC<PanelProps> = ({
  children,
  glowStrength = "regular" /* roundWinnerIsUser  */,
}) => {
  /*   const panelClassName = `${styles.panel} ${glowStrength === "light" ? styles["panel-light"] : ""}`; */
  const { roundWinnerIsUser } = useGame();
  const panelClassName = `${styles.panel} ${
    glowStrength === "light" ? styles["panel_light"] : ""
  } ${roundWinnerIsUser ? styles["panel_success"] : ""}`;

  return <div className={panelClassName}>{children}</div>;
};

export default Panel;
