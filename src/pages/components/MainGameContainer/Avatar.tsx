import styles from "./MainGameContainer.module.scss";

type AvatarProps = {
  image: string;
  name: string;
};

const Avatar = ({ image, name }: AvatarProps) => {
  return <img src={image} alt={`An image of ${name}`} className={styles.avatar_img} />;
};

export default Avatar;
