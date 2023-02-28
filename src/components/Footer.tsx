import React from "react";
import styles from "../styles/Footer.module.css";
import LiInLogo from "../assets/LI-In-Bug.png";
import GitHLogo from "../assets/github-mark.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer_title}>Designed by Michel Kabwe</p>
      <div className={styles.social_btn_wrapper}>
        <Image
          src={LiInLogo}
          alt="Linkedin Logo"
          className={styles.social_logos}
        />
        <Image
          src={GitHLogo}
          alt="Github Logo"
          className={styles.social_logos}
        />
      </div>
    </footer>
  );
};

export default Footer;
