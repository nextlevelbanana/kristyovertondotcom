"use client";

import styles from "@/app/ui/header.module.scss";
import Link from "next/link";
import { ThemeToggle } from "./themeToggle";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";

const links = [
  { name: "Home", href: "/." },
  { name: "Artifacts", href: "/artifacts" },
  { name: "Uses", href: "/uses" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <FaHamburger/>
      </button>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`glowy ${styles.headerLink} ${styles.light}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
