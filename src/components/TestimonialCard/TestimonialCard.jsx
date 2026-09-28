import styles from "./TestimonialCard.module.css";
import starIcon from "../../assets/images/testimonials/star.svg";

function TestimonialCard({
  name,
  role,
  avatar,
  quote,
  rating = 5,
  social,
  position,
}) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <article
      className={`${styles.card} ${styles[position]}`}
      aria-hidden={position !== "center"}
    >
      <header className={styles.header}>
        {avatar ? (
          <img src={avatar} alt="" className={styles.avatar} />
        ) : (
          <span className={`${styles.avatar} ${styles.initials}`}>
            {initials}
          </span>
        )}
        <div className={styles.person}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.role}>{role}</p>
        </div>
      </header>

      <blockquote className={styles.quote}>{quote}</blockquote>

      <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
          <img
            key={i}
            src={starIcon}
            alt=""
            className={
              i < rating ? styles.star : `${styles.star} ${styles.starEmpty}`
            }
          />
        ))}
      </div>

      {social && <img src={social} alt="" className={styles.social} />}
    </article>
  );
}
export default TestimonialCard;
