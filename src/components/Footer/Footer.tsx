import Link from "next/link";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link href="" className={styles.link}>Instagram</Link>
        </li>
        <li>
          <Link href="" className={styles.link}>Twitter</Link>
        </li>
        <li>
          <Link href="" className={styles.link}>Facebook</Link>
        </li>
      </ul>
      <p>© 2021 Recipe Diary</p>
    </footer>
  );
}

export default Footer;
