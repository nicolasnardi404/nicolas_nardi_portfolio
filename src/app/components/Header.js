import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.profileSection}>
        <Image
          src="/images/nicolas.jpg"
          alt="Nicolas Nardi"
          width={150}
          height={150}
          className={styles.profileImg}
          priority
        />
        <div className={styles.profileInfo}>
          <h1 className={styles.title}>Nicolas Nardi (They/Them)</h1>
          <h2 className={styles.subtitle}>
            Software Developer, Bio Gardener and Artist
          </h2>
        </div>
      </div>
    </header>
  );
}
