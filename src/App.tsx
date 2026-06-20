import './index.css';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <About />
      <Features />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
