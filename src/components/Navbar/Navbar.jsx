import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "For Lenders", href: "#lenders" },
  { label: "For Collection Agencies", href: "#agencies" },
];

function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (label) => {
    setActive(label);
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <a href="#home" className={styles.logo}>
          <img src={logo} alt="" className={styles.logoIcon} />
          <span>Collectedge</span>
        </a>
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={`${styles.link} ${active === link.label ? styles.active : ""}`}
              onClick={() => handleLinkClick(link.label)}
            >
              {link.label}
            </a>
          </li>
        ))}

        {/* Button inside dropdown (mobile only) */}
        <li className={styles.menuButton}>
          <a
            href="#contact"
            className={styles.button}
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </a>
        </li>
      </ul>

      <div className={styles.right}>
        <a
          href="#contact"
          className={`${styles.button} ${styles.desktopButton}`}
        >
          Get in touch
        </a>

        <button
          type="button"
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
