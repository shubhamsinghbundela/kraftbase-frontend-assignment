import styles from "./ForAgencies.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from "react";
import dpdGauge from "../../assets/images/agencies/dpd-gauge.svg";
import pincodeIcon from "../../assets/images/agencies/pincode.svg";
import allocationIcon from "../../assets/images/agencies/allocation.svg";
import discoverIcon from "../../assets/images/agencies/discover.svg";

const TABS = [
  "Accelerate Business Growth",
  "Technology & Data driven operations",
];

const BENEFITS = [
  { icon: pincodeIcon, text: "Get more volume in your serviceable pincodes" },
  {
    icon: allocationIcon,
    text: "Manage all allocations on a single tool allowing you to maximize resource utilization.",
  },
  {
    icon: discoverIcon,
    text: "Discover pincodes with high potential to expand your serviceability",
  },
];

function ForAgencies() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={styles.forAgencies}>
      <SectionHeading
        label="For Agencies"
        title="We fuel demand and empower agencies to execute with unmatched efficiency and reliability."
        titleWidth={1188}
      />
      <div className={styles.tabs}>
        <div className={styles.tabs} role="tablist">
          {TABS.map((label, index) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              className={`${styles.tab} ${activeTab === index ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(index)}
            >
              <span className={styles.tabLabel}>{label}</span>
              <span className={styles.tabLine} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
      <div className={styles.content} role="tabpanel">
        <div className={styles.cardLeft}>
          <div className={styles.panelOuter} />
          <div className={styles.panelInner} />

          <h3 className={styles.gaugeTitle}>
            Unlock more business without increasing operational overhead
          </h3>

          <div className={styles.gaugeBox}>
            <img src={dpdGauge} alt="" className={styles.gauge} />
            <p className={styles.gaugeValue}>70%</p>
            <div className={styles.gaugeText}>
              <p className={styles.gaugeStatus}>
                Your DPD Resolution Rate is Good
              </p>
              <p className={styles.gaugeDate}>Last Check on 21 Apr</p>
            </div>
          </div>
        </div>
        <div className={styles.cardRight}>
          <ul className={styles.cardRight}>
            {BENEFITS.map((item) => (
              <li key={item.text} className={styles.benefit}>
                <span className={styles.benefitIcon}>
                  <img src={item.icon} alt="" />
                </span>
                <p className={styles.benefitText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ForAgencies;
