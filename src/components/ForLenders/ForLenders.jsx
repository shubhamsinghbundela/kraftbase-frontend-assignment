import FeatureCard from "../FeatureCard/FeatureCard";
import styles from "./ForLenders.module.css";

import cheyenneCard from "../../assets/images/lenders/cheyenne-card.png";
import cristoferCard from "../../assets/images/lenders/cristofer-card.png";
import martinCard from "../../assets/images/lenders/martin-card.png";
import avatarArtist from "../../assets/images/lenders/avatar-artist.png";

import connectorTopLeft from "../../assets/icons/connector-top-left.svg";
import connectorBottomLeft from "../../assets/icons/connector-bottom-left.svg";
import connectorTopRight from "../../assets/icons/connector-top-right.svg";
import connectorBottomRight from "../../assets/icons/connector-bottom-right.svg";
import settingIcon from "../../assets/icons/setting-02.svg";
import codeIcon from "../../assets/icons/code.svg";
import databaseIcon from "../../assets/icons/database.svg";
import sidebarIcon from "../../assets/icons/sidebar-top.svg";
import logo from "../../assets/logo.svg";

import chartCard from "../../assets/images/lenders/chart-card.png";
import healthCard from "../../assets/images/lenders/health-card.png";

import aflCard from "../../assets/images/lenders/af1-card.png";
import enquiryCard from "../../assets/images/lenders/enquiry-card.png";
import badgeBoltIcon from "../../assets/icons/badge-bolt.svg";

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
            {/* dashed line */}
            <img
              src={connectorTopLeft}
              alt=""
              className={`${styles.connector} ${styles.connectorTopLeft}`}
            />
            <img
              src={connectorBottomLeft}
              alt=""
              className={`${styles.connector} ${styles.connectorBottomLeft}`}
            />
            <img
              src={connectorTopRight}
              alt=""
              className={`${styles.connector} ${styles.connectorTopRight}`}
            />
            <img
              src={connectorBottomRight}
              alt=""
              className={`${styles.connector} ${styles.connectorBottomRight}`}
            />

            {/* Center */}
            <span className={styles.halo} />
            <span className={styles.hub}>
              <img src={logo} alt="" />
            </span>

            {/* Four small circles */}
            <span className={`${styles.bubble} ${styles.bubbleTopLeft}`}>
              <img src={settingIcon} alt="" />
            </span>
            <span className={`${styles.bubble} ${styles.bubbleBottomLeft}`}>
              <img src={codeIcon} alt="" />
            </span>
            <span className={`${styles.bubble} ${styles.bubbleTopRight}`}>
              <img src={databaseIcon} alt="" />
            </span>
            <span className={`${styles.bubble} ${styles.bubbleBottomRight}`}>
              <img src={sidebarIcon} alt="" />
            </span>

            {/* Button */}
            <span className={styles.apiButton}>API integration</span>
          </FeatureCard>
        </div>

        <div className={styles.row}>
          <FeatureCard
            className={styles.cardLeft}
            title="Driven by Data"
            description="Our data-driven approach equips collection managers with insights to make informed & actionable decisions"
          >
            <img src={chartCard} alt="" className={styles.chartCard} />
            <img src={healthCard} alt="" className={styles.healthCard} />
            <button
              type="button"
              className={styles.addButton}
              aria-label="Add widget"
            >
              +
            </button>
          </FeatureCard>
          <FeatureCard
            className={styles.cardRight}
            title="Discover Agency partners"
            description="Discover top-performing, tech-driven agencies designed to deliver results with minimal overhead."
          >
            <img src={aflCard} alt="" className={styles.aflCard} />
            <img src={enquiryCard} alt="" className={styles.enquiryCard} />
            <span className={styles.badge}>
              <img src={badgeBoltIcon} alt="" />
            </span>
          </FeatureCard>
        </div>
      </div>
    </div>
  );
}

export default ForLenders;
