import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import WordsPullUp from './WordsPullUp';

const NAV_ITEMS = ['Services', 'Projects', 'Tech stack', 'Case studies', 'Contact'];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6 bg-black">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Noise overlay */}
        <div className="noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none z-10" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />

        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 flex justify-center z-20">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a
                    href={item === 'Contact' ? '#contact' : '#'}
                    className="text-[10px] sm:text-xs md:text-sm transition-colors duration-200"
                    style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.linkedin.com/in/zacsladden?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors duration-200"
                  style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Hero content - stacked: description/CTA above, heading at very bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col p-4 md:p-8 pb-6 md:pb-10">
          {/* Description + CTA — right-aligned, sits above the heading */}
          <div className="flex justify-end mb-3 md:mb-4">
            <div className="flex flex-col gap-4 w-full sm:w-2/3 lg:w-1/3">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base m-0"
                style={{ lineHeight: 1.2 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
              >
                Automated by Zac connects your tools, eliminates repetitive work and builds custom applications, turning hours of manual effort into intelligent workflows that run themselves, around the clock.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 bg-primary rounded-full pl-5 pr-1 py-1"
                >
                  <span className="font-medium text-sm sm:text-base text-black">Get started</span>
                  <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Giant heading — full width, anchored to bottom */}
          <h1
            className="font-medium leading-[0.85] tracking-[-0.07em] m-0 overflow-hidden"
            style={{
              fontSize: 'clamp(48px, 17vw, 320px)',
              color: '#E1E0CC',
            }}
          >
            <WordsPullUp text="Automate" showAsterisk />
          </h1>
        </div>
      </div>
    </section>
  );
}
