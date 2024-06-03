import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.quickLinks}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className={styles.socialMedia}>
        <a href="https://linkedin.com">LinkedIn</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://facebook.com">Facebook</a>
      </div>
      <p>© 2024 QRK0. All rights reserved.</p>
    </footer>
  );
}
