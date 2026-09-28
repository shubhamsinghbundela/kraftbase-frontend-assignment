import styles from "./Hero.module.css";
import avatar1 from "../../assets/images/avatars/avatar-1.jpg";
import avatar2 from "../../assets/images/avatars/avatar-2.jpg";
import avatar3 from "../../assets/images/avatars/avatar-3.jpg";
import LogoSlider from "../LogoSlider/LogoSlider";

import healthCard from "../../assets/images/hero/health-card.png";
import aflCard from "../../assets/images/hero/afl-card.png";
import badgeIcon1 from "../../assets/images/hero/badge-icon-1.svg";
import badgeIcon2 from "../../assets/images/hero/badge-icon-2.svg";

import chartCard from "../../assets/images/hero/chart-card.png";
import cheyenneCard from "../../assets/images/hero/cheyenne-card.png";
import rogerCard from "../../assets/images/hero/roger-card.png";
import badgeIcon3 from "../../assets/images/hero/badge-icon-3.svg";
import badgeIcon4 from "../../assets/images/hero/badge-icon-4.svg";

function Hero() {
  return (
    <div className={styles.heroBody}>
      <div className={styles.heroRow}>
        <div className={styles.left}>
          <div className={styles.cardCanvas}>
            <div className={styles.card1Bg} />
            <div className={styles.card2Bg} />

            <img src={aflCard} alt="" className={styles.aflCard} />

            <span className={`${styles.floatBadge} ${styles.floatBadge2}`}>
              <img src={badgeIcon2} alt="" className={styles.floatBadgeIcon} />
            </span>

            <img src={healthCard} alt="" className={styles.healthCard} />

            <span className={`${styles.floatBadge} ${styles.floatBadge1}`}>
              <img src={badgeIcon1} alt="" className={styles.floatBadgeIcon} />
            </span>
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
          <p className={styles.subtext}>
            Our tool is designed with agencies &amp; collection managers in
            mind, ensuring user-friendly experience tailored to their needs
          </p>
          <div className={styles.buttonRow}>
            <div className={styles.buttonRing}>
              <a
                href="#contact"
                className={`${styles.button} ${styles.buttonPrimary}`}
              >
                Get free Trial
              </a>
            </div>
            <div className={styles.buttonRing}>
              <a
                href="#how-we-work"
                className={`${styles.button} ${styles.buttonSecondary}`}
              >
                How We work
              </a>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.cardCanvas} aria-hidden="true">
            <div className={styles.card3Bg} />

            <img src={rogerCard} alt="" className={styles.rogerCard} />
            <img src={chartCard} alt="" className={styles.chartCard} />
            <img src={cheyenneCard} alt="" className={styles.cheyenneCard} />

            <span className={`${styles.floatBadge} ${styles.floatBadge3}`}>
              <img src={badgeIcon3} alt="" className={styles.floatBadge3Icon} />
            </span>

            <span className={`${styles.floatBadge} ${styles.floatBadge4}`}>
              <img src={badgeIcon4} alt="" className={styles.floatBadgeIcon} />
            </span>
          </div>
        </div>
      </div>

      <div className={styles.logos}>
        <div className={styles.joinRow}>
          <span
            className={`${styles.line} ${styles.lineLeft}`}
            aria-hidden="true"
          />
          <p className={styles.joinText}>
            Join <strong>4,000+</strong> Companies Already Grow
          </p>
          <span
            className={`${styles.line} ${styles.lineRight}`}
            aria-hidden="true"
          />
        </div>
        <LogoSlider />
      </div>
    </div>
  );
}

export default Hero;
