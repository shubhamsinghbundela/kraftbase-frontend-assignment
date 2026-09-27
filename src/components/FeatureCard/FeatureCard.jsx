import styles from "./FeatureCard.module.css";

function FeatureCard({ icon, title, description, className = "", children }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.text}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.visual}>
        <div className={styles.visualContent}>{children}</div>
      </div>
    </div>
  );
}

export default FeatureCard;
