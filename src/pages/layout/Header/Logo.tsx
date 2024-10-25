import styles from "./HeaderStyles.module.scss";

type LogoProps = {
  roundWinnerIsUser: boolean;
};

const Logo = ({ roundWinnerIsUser }: LogoProps) => {
  return (
    <div className={styles.logo_container}>
      {/* stacked for lg screens */}
      <h1
        className={`${styles.quote_quest_logo} ${
          roundWinnerIsUser ? styles.success_stroke : styles.neon_stroke
        } ${styles.stacked}`}
      >
        <span className={styles.quote}>Quote</span>
        <br />
        <span className={styles.quest}>Quest</span>
      </h1>

      {/* inline layout for md screens  */}
      <h1
        className={`${styles.quote_quest_logo_} ${
          roundWinnerIsUser ? styles.success_stroke : styles.neon_stroke
        } ${styles.inline}`}
      >
        Quote Quest
      </h1>
    </div>
  );
};

export default Logo;
