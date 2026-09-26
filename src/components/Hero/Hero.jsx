import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.heroBody}>
      <div className={styles.heroRow}>
        <div className={styles.left}>
          <div className={styles.cardCanvas}>
            <div className={styles.card1Bg} />
            <div className={styles.card2Bg} />
          </div>
        </div>
        <div className={styles.center}>
          {/* badge, heading, text, buttons */}
        </div>
        <div className={styles.right}>{/* right cards */}</div>
      </div>

      <div className={styles.logos}>{/* Join 4,000+ + bank logos */}</div>
    </div>
  );
}

export default Hero;
