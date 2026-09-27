import FeatureCard from "../FeatureCard/FeatureCard";
import styles from "./ForLenders.module.css";

import cheyenneCard from "../../assets/images/lenders/cheyenne-card.png";
import cristoferCard from "../../assets/images/lenders/cristofer-card.png";
import martinCard from "../../assets/images/lenders/martin-card.png";
import avatarArtist from "../../assets/images/lenders/avatar-artist.png";

function ForLenders() {
  return (
    <div className={styles.forLenders}>
      <div className={styles.heading}>
        <p className={styles.label}>For Lenders</p>
        <h2 className={styles.title}>
          We're changing the game with one complete agency management tool
        </h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.row}>
          <FeatureCard
            className={styles.cardLeft}
            title="Intuitive & Agent Focused"
            description="Our tool is designed with agencies & collection managers in mind, ensuring user-friendly experience tailored to their needs"
          >
            <img
              src={martinCard}
              alt=""
              className={`${styles.agentCard} ${styles.martin}`}
            />
            <img
              src={cristoferCard}
              alt=""
              className={`${styles.agentCard} ${styles.cristofer}`}
            />
            <img
              src={cheyenneCard}
              alt=""
              className={`${styles.agentCard} ${styles.cheyenne}`}
            />
            <img src={avatarArtist} alt="" className={styles.agentAvatar} />
          </FeatureCard>
          <FeatureCard
            className={styles.cardRight}
            title="Highly Customizable"
            description="Our tool is designed with agencies & collection managers in mind, ensuring user-friendly experience tailored to their needs"
          >
            {/* visual box later */}
          </FeatureCard>
        </div>

        <div className={styles.row}>
          <FeatureCard
            className={styles.cardLeft}
            title="Driven by Data"
            description="Our data-driven approach equips collection managers with insights to make informed & actionable decisions"
          >
            {/* visual box later */}
          </FeatureCard>
          <FeatureCard
            className={styles.cardRight}
            title="Discover Agency partners"
            description="Discover top-performing, tech-driven agencies designed to deliver results with minimal overhead."
          >
            {/* visual box later */}
          </FeatureCard>
        </div>
      </div>
    </div>
  );
}

export default ForLenders;
