import styles from "./Testimonials.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";

import xIcon from "../../assets/images/testimonials/twitter.svg";
import priyaAvatar from "../../assets/images/testimonials/priya.jpg";
import facebookIcon from "../../assets/images/testimonials/facebook.svg";
import davidAvatar from "../../assets/images/testimonials/david.jpg";
import leftArrow from "../../assets/images/testimonials/left-arrow.svg";
import rightArrow from "../../assets/images/testimonials/right-arrow.svg";
import viewAllArrow from "../../assets/images/testimonials/view-all.svg";
import { useState } from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    role: "Compliance Lead, FinServe Capital",
    avatar: null,
    quote:
      "Staying compliant in debt resolution has always been a challenge. Collectedge's built-in audit trails and reporting make regulatory checks seamless. It gives us confidence that every recovery follows the latest guidelines.",
    rating: 4,
    social: xIcon,
  },
  {
    name: "Priya Nair",
    role: "Head of Risk & Collections",
    avatar: priyaAvatar,
    quote:
      "Since implementing the Collectedge platform, we've seen a 40% improvement in resolving delinquent payment disputes within the first 30 days. The automation and transparency it brings have transformed how our collections team operates — reducing manual overhead and improving customer trust. It's become an essential part of our risk management toolkit.",
    rating: 5,
    social: facebookIcon,
  },
  {
    name: "David Koroma",
    role: "CEO, NeoBank Africa",
    avatar: davidAvatar,
    quote:
      "We used to get a lot of complaints about unclear payment processes. Since deploying Collectedge, complaints related to payment disputes dropped by over 50%. The self-service options and clear communication flows have been game-changers.",
    rating: 3,
    social: facebookIcon,
  },
];

function Testimonials() {
  const [active, setActive] = useState(1);
  const total = TESTIMONIALS.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  // Where each card sits relative to the active one
  const getPosition = (index) => {
    const offset = (index - active + total) % total;
    if (offset === 0) return "center";
    if (offset === 1) return "right";
    if (offset === total - 1) return "left";
    return "hidden";
  };

  return (
    <>
      <SectionHeading label="Testimonial" title="Trusted by Professionals" />
      <div
        className={styles.carousel}
        role="region"
        aria-roledescription="carousel"
        aria-label="Testimonials"
      >
        <div className={styles.frame}>
          <div className={styles.track} aria-live="polite">
            {TESTIMONIALS.map((item, index) => (
              <TestimonialCard
                key={item.name}
                {...item}
                position={getPosition(index)}
              />
            ))}
          </div>
          <div className={styles.controls}>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowPrev}`}
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <img src={leftArrow} alt="" />
            </button>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowNext}`}
              onClick={next}
              aria-label="Next testimonial"
            >
              <img src={rightArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.viewAll}>
        <div className={styles.viewAllRing}>
          <a href="#testimonials" className={styles.viewAllButton}>
            View All
            <img src={viewAllArrow} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
