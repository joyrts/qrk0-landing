import { Parallax } from 'react-parallax';
import styles from '../styles/ParallaxSection.module.css';

export default function ParallaxSection({ bgImage, strength, content }) {
  return (
    <Parallax bgImage={bgImage} strength={strength} className={styles.parallaxSection}>
      <div className={styles.content}>
        {content}
      </div>
    </Parallax>
  );
}
