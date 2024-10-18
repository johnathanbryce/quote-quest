import React from "react";
import styles from "./Avatar.module.scss";

type AvatarProps = {
  name: string;
  image: string;
};

const Avatar = ({ name, image }: AvatarProps) => {
  return (
    <div className={styles.avatar_container}>
      <img src={image} alt={`An image of ${name}`} className={styles.avatar_img} />
      <p> {name}</p>
    </div>
  );
};

export default Avatar;
