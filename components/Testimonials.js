import styles from '../styles/Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>What Our Clients Say</h2>
      <div className={styles.testimonialList}>
        <div className={styles.testimonial}>
          <p>"QRK0 has transformed our ML operations. Highly recommend!"</p>
          <h4>John Doe, CEO of TechCorp</h4>
        </div>
        <div className={styles.testimonial}>
          <p>"The automation features saved us countless hours."</p>
          <h4>Jane Smith, CTO of InnovateX</h4>
        </div>
      </div>
    </section>
  );
}
