import styles from "./LogoSlider.module.css";

import bajaj from "../../assets/images/bajaj.png";
import icici from "../../assets/images/icici-bank.png";
import yesBank from "../../assets/images/yes-bank.png";
import udaan from "../../assets/images/udaan.png";
import indusind from "../../assets/images/induslnd-bank.png";

const LOGOS = [
  { src: bajaj, alt: "Bajaj Allianz" },
  { src: icici, alt: "ICICI Bank" },
  { src: yesBank, alt: "YES Bank" },
  { src: udaan, alt: "udaan" },
  { src: indusind, alt: "IndusInd Bank" },
];

const SET = [...LOGOS, ...LOGOS];

function LogoGroup({ hidden = false }) {
  return (
    <ul className={styles.group} aria-hidden={hidden}>
      {SET.map((logo, i) => (
        <li key={i} className={styles.card}>
          <img
            src={logo.src}
            alt={hidden ? "" : logo.alt}
            className={styles.logo}
          />
        </li>
      ))}
    </ul>
  );
}

function LogoSlider() {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        <LogoGroup />
        <LogoGroup hidden />
      </div>
    </div>
  );
}

export default LogoSlider;
