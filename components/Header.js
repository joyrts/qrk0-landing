import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="QRK0 Logo" />
        <span>QUARK</span>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <a className={styles.cta} href="#get-started">Get Started</a>
    </header>
  );
}
