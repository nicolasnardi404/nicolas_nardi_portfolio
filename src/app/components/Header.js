import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.profileLink}>
        <Image
          src="/images/nicolas.jpg"
          alt="Nicolas Nardi"
          width={100}
          height={100}
          className={styles.profileImg}
        />
      </Link>
    </header>
  );
}
