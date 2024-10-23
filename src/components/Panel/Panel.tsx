import React, { ReactNode } from "react";
import styles from "./Panel.module.scss";

interface PanelProps {
  children: ReactNode;
  glowStrength?: "light" | "regular";
}

const Panel: React.FC<PanelProps> = ({ children, glowStrength = "regular" }) => {
  const panelClassName = `${styles.panel} ${glowStrength === "light" ? styles["panel-light"] : ""}`;

  return <div className={panelClassName}>{children}</div>;
};

export default Panel;
