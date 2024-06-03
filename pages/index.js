import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParallaxSection from '../components/ParallaxSection';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <ParallaxSection 
          bgImage="/background.jpg" 
          strength={500} 
          content={<Features />} 
        />
        <About />
        <ParallaxSection 
          bgImage="/background.jpg" 
          strength={500} 
          content={<Services />} 
        />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
