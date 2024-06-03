import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2>Get in Touch</h2>
      <form className={styles.contactForm}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <div className={styles.contactInfo}>
        <p>Address: 1234 Tech Lane, Innovation City, 56789</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@qrk0.com</p>
      </div>
    </section>
  );
}
