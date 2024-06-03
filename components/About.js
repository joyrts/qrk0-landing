import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <h2>About QRK0</h2>
      <p>QRK0 is a leading provider of MLOps solutions, dedicated to helping businesses optimize their machine learning workflows. Our innovative technology and expert support ensure that your operations run smoothly and efficiently.</p>
      <img src="/team-photo.jpg" alt="Team Photo" />
    </section>
  );
}
