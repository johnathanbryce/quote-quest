import { useState, useEffect } from "react";
import styles from "./ToggleActiveQuoter.module.scss";
// context
import { useGame } from "../../../../context/GameContext";

type ToggleActiveQuoterProps = {
  image: string;
  name: string;
  isActive: boolean;
};

const ToggleActiveQuoter = ({ image, name, isActive }: ToggleActiveQuoterProps) => {
  const { handleToggleActiveQuoters } = useGame();
  const [isToggleActive, setIsToggleActive] = useState(false);

  const handleToggle = () => {
    handleToggleActiveQuoters(name);
    setIsToggleActive((prev) => !prev);
  };

  return (
    <div className={styles.filter_avatar_container}>
      <img src={image} alt={`An image of ${name}`} className={styles.filter_avatar_img} />
      <p
        className={`${styles.filter_avatar_name} ${
          isActive && isToggleActive ? styles.active : ""
        }`}
      >
        {name}
      </p>
      <label className={styles.switch}>
        <input type="checkbox" checked={isActive} onChange={handleToggle} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default ToggleActiveQuoter;
