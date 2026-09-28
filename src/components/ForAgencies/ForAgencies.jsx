import styles from "./ForAgencies.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";

function ForAgencies() {
  return (
    <div className={styles.forAgencies}>
      <SectionHeading
        label="For Agencies"
        title="We fuel demand and empower agencies to execute with unmatched efficiency and reliability."
        titleWidth={1188}
      />
    </div>
  );
}

export default ForAgencies;
