import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <h1>Empower Your Business with Advanced MLOps Solutions</h1>
      <p>Streamline your machine learning workflows with QRK0’s cutting-edge technology.</p>
      <a className={styles.cta} href="#get-started">Get Started</a>
    </section>
  );
}
