import styles from "./Footer.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import logo from "../../assets/logo.svg";
import arrowIcon from "../../assets/images/testimonials/view-all.svg";
import mailIcon from "../../assets/icons/mail.svg";
import locationIcon from "../../assets/icons/location.svg";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "For Lenders", href: "#lenders" },
  { label: "For Collection Agencies", href: "#agencies" },
];

function Footer() {
  return (
    <>
      <div className={styles.contact}>
        <span className={styles.badge}>
          <img src={logo} alt="" className={styles.badgeLogo} />
        </span>
        <SectionHeading
          label="Contact Us"
          title="We also need to have contact form on the website"
          titleWidth={698}
        />
        <p className={styles.contactText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>

        <div className={styles.contactRing}>
          <a href="#contact" className={styles.contactButton}>
            Get Started
            <img src={arrowIcon} alt="" />
          </a>
        </div>
      </div>

      <div className={styles.bar}>
        <div className={`${styles.column} ${styles.colNav}`}>
          <h3 className={styles.colTitle}>Navigation</h3>
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <span className={styles.divider} aria-hidden="true" />

        <div className={`${styles.column} ${styles.colBrand}`}>
          <a href="#home" className={styles.brand}>
            <img src={logo} alt="" className={styles.brandLogo} />
            <span>Collectedge</span>
          </a>

          <p className={styles.brandText}>
            Our tool is designed with agencies &amp; collection managers in
            mind, ensuring user-friendly experience tailored to their needs
          </p>
        </div>

        <span className={styles.divider} aria-hidden="true" />

        <div className={`${styles.column} ${styles.colContact}`}>
          <h3 className={styles.colTitle}>Contact</h3>

          <ul className={styles.infoList}>
            <li>
              <a
                href="mailto:info@letsdial.com"
                className={`${styles.infoItem} ${styles.infoEmail}`}
              >
                <img src={mailIcon} alt="" />
                <span>info@letsdial.com</span>
              </a>
            </li>
            <li className={`${styles.infoItem} ${styles.infoAddress}`}>
              <img src={locationIcon} alt="" />
              <address className={styles.addressText}>
                Lorem Ipsum is simply dummy text of the printing
              </address>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.line} aria-hidden="true" />
        <p className={styles.copyright}>© 2024, Lorem Ipsum is simply dummy</p>
      </div>
    </>
  );
}

export default Footer;
