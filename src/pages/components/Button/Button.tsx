import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
};

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
}: ButtonProps) => {
  const buttonClass = `${styles.button} ${styles[`button-${variant}`]} ${
    styles[`button-${size}`]
  } ${disabled ? styles["button-disabled"] : ""}`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
