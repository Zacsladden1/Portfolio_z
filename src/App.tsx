import './index.css';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';

export default function App() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <About />
      <Features />
      <Contact />
    </main>
  );
}
