import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import NavBar from "./NavBar";
import NavResponsive from "./NavResponsive";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <span className={styles.logo}>
        {" "}
        <Link href="/">Michel Kabwe</Link>
      </span>
      <NavBar />
      <NavResponsive isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
