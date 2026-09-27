import styles from "./ForLenders.module.css";

function ForLenders() {
  return (
    <div className={styles.forLenders}>
      <div className={styles.heading}>
        <p className={styles.label}>For Lenders</p>
        <h2 className={styles.title}>
          We're changing the game with one complete agency management tool
        </h2>
      </div>
      <div className={styles.grid}>{/* 4 feature boxes */}</div>
    </div>
  );
}

export default ForLenders;
