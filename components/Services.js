import styles from '../styles/Services.module.css';

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <h2>Our Services</h2>
      <div className={styles.serviceList}>
        <div className={styles.service}>
          <h3>MLOps Consulting</h3>
          <p>Expert advice to optimize your ML workflows.</p>
        </div>
        <div className={styles.service}>
          <h3>Custom Solutions</h3>
          <p>Tailored MLOps solutions to fit your needs.</p>
        </div>
        <div className={styles.service}>
          <h3>Training and Support</h3>
          <p>Comprehensive training and ongoing support.</p>
        </div>
      </div>
    </section>
  );
}
