import styles from "@/app/ui/header.module.scss";
import Link from 'next/link';
import { ThemeToggle } from "./themeToggle";

const links = [
  { name: 'Home', href: '/.'},
  {name: "Artifacts", href: "/artifacts"},
  {
    name: 'Uses',
    href: '/uses',
  },
  { name: 'Contact', href: '/contact' },
];


export function Header() {
    return (<header className={styles.header}>
        {links.map(link => {
            return <Link key={link.name} href={link.href} className={`glowy ${styles.headerLink} ${styles.light}`}>{link.name}</Link>
        })}
        <ThemeToggle/>
    </header>)
}