import styles from "./contact.module.scss";
import { SlEnvolope } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

export default function Page() {
    return (<div className={styles.contactPage}><h1>Contact</h1>
    <ul className="box">
        <li><SlEnvolope /><a href="mailto:kristyoverton@perfectlyvalidemail.com">kristyoverton@perfectlyvalidemail.com</a></li>
        <li><SlSocialLinkedin /><a href="https://www.linkedin.com/in/kristy-overton-828876357/">LinkedIn</a></li>
        </ul></div>)
}