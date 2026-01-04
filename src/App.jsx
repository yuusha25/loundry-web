import { useState, useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import FloatingButton from './components/Layout/FloatingButton';
import Hero from './components/Sections/Hero';
import Features from './components/Sections/Features';
import Services from './components/Sections/Services';
import Contact from './components/Sections/Contact';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <Features />
        <Services />
        <Contact />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}