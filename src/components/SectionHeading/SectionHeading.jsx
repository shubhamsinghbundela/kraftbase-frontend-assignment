import styles from "./SectionHeading.module.css";

function SectionHeading({ label, title, titleWidth = 861 }) {
  return (
    <div className={styles.heading}>
      <p className={styles.label}>{label}</p>
      <h2
        className={styles.title}
        style={{ "--title-width": `${titleWidth}px` }}
      >
        {title}
      </h2>
    </div>
  );
}

export default SectionHeading;
