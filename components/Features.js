import styles from '../styles/Features.module.css';

export default function Features() {
  return (
    <section className={styles.features}>
      <h2>Why Choose QRK0?</h2>
      <div className={styles.featureList}>
        <div className={styles.feature}>
          <h3>Automation</h3>
          <p>Automate your machine learning workflows and increase efficiency.</p>
        </div>
        <div className={styles.feature}>
          <h3>Scalability</h3>
          <p>Scale your operations seamlessly with our robust solutions.</p>
        </div>
        <div className={styles.feature}>
          <h3>Security</h3>
          <p>Ensure your data is protected with top-notch security measures.</p>
        </div>
        <div className={styles.feature}>
          <h3>Support</h3>
          <p>Get 24/7 support from our team of experts.</p>
        </div>
      </div>
    </section>
  );
}
