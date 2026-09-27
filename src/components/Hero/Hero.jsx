import styles from "./Hero.module.css";
import avatar1 from "../../assets/images/avatars/avatar-1.jpg";
import avatar2 from "../../assets/images/avatars/avatar-2.jpg";
import avatar3 from "../../assets/images/avatars/avatar-3.jpg";

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
          <div className={styles.badgeRow}>
            <div className={styles.avatarGroup}>
              <img
                src={avatar1}
                alt=""
                className={`${styles.avatar} ${styles.avatar1}`}
              />
              <img
                src={avatar2}
                alt=""
                className={`${styles.avatar} ${styles.avatar2}`}
              />
              <img
                src={avatar3}
                alt=""
                className={`${styles.avatar} ${styles.avatar3}`}
              />
              <div className={`${styles.avatar} ${styles.avatarBadge}`}>
                +5K
              </div>
            </div>
            <span className={styles.badgeText}>
              Businesses Rely On Collectedge
            </span>
          </div>
          <h1 className={styles.heading}>
            Unified Platform for Late-Stage DPD Resolution.
          </h1>
        </div>
        <div className={styles.right}>
          <div className={styles.card3Bg} />
        </div>
      </div>

      <div className={styles.logos}>{/* Join 4,000+ + bank logos */}</div>
    </div>
  );
}

export default Hero;
