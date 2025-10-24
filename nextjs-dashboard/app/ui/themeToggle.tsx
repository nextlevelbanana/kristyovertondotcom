"use client";

import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { LiaHotdogSolid } from "react-icons/lia";
import styles from "./themes.module.scss";

export function ThemeToggle() {
    const [theme, setTheme] = useState<string>("dark");

    useEffect(() => {
        const saved: string  | null = localStorage.getItem("kristyovertondotcom-theme");
        if (saved) setTheme(saved);
        }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

  return (<div>
    <button className={styles.button} onClick={() => setTheme("dark")}>
        <MdDarkMode/>
    </button>
        <button className={styles.button} onClick={() => setTheme("light")}>
        <MdLightMode/>
    </button>
        <button className={styles.button} onClick={() => setTheme("hotdog")}>
        <LiaHotdogSolid/>
    </button>
    </div>
  );
}
