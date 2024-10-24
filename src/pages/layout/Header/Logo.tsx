import styles from "./HeaderStyles.module.scss";

type LogoProps = {
  roundWinnerIsUser: boolean;
};

const Logo = ({ roundWinnerIsUser }: LogoProps) => {
  return (
    <div className={styles.logo_container}>
      <h1
        className={`${styles.quote_quest_logo} ${
          roundWinnerIsUser ? styles.success_stroke : styles.neon_stroke
        }`}
      >
        <span className={styles.quote}>Quote</span>
        <br />
        <span className={styles.quest}>Quest</span>
      </h1>
    </div>
  );
};

export default Logo;
