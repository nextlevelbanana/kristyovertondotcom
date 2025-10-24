import styles from '@/app/ui/home.module.scss';
import {Header} from "@/app/ui/header";
import {Ticker} from "@/app/ui/ticker";

export default function Page() {
  return (<>
    <Ticker />
    <main className={styles.main}>
      <div className={`glowy-blue-line glowy ${styles.big}`}>Hi, I'm Kristy.</div>
      <p>I'm a software engineer in the Pacific Northwest. Full stack, mostly front end. I like making things people like to use.</p>      
    </main>
    </>
  );
}
