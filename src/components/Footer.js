import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "../../styles/Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <li>
                    <Link
                        href="https://www.linkedin.com/in/damien-costa/"
                        target="_blank"
                    >
                        <FaLinkedin />
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/mienblack" target="_blank">
                        <FaGithub />
                    </Link>
                </li>
            </ul>
            <div className={styles.ref}>
                <p>Made with 💟 by Damien Costa ✌🏿</p>
                <p>
                    <span className={styles.refSpan}>POKENEXT</span> &copy; 2023
                </p>
            </div>
        </footer>
    );
}

export default Footer;
