import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';
import AnimatedLetter from './AnimatedLetter';

const BODY_TEXT =
  'Over the last few years, I have helped small and medium businesses connect their tools, synchronise their data and replace hours of repetitive manual work with intelligent workflows. The systems I build run quietly in the background, automatically, having lifted efficiency by as much as 300 percent.';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = BODY_TEXT.split('');

  return (
    <section ref={sectionRef} className="bg-black py-16 md:py-24 lg:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#101010] rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center">
          {/* Label */}
          <p className="text-primary text-[10px] sm:text-xs mb-6 md:mb-8 tracking-widest uppercase">
            Workflow automation
          </p>

          {/* Heading */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-8 md:mb-12">
            <WordsPullUpMultiStyle
              segments={[
                { text: "I'm Zac Sladden,", className: 'font-normal text-primary' },
                { text: 'an automation specialist.', className: 'font-serif italic text-primary' },
                { text: 'I build n8n workflows, AI integrations, and custom web apps.', className: 'font-normal text-primary' },
              ]}
              containerClassName="gap-y-1"
            />
          </div>

          {/* Body paragraph with scroll-linked character animation */}
          <p
            className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto"
            style={{ color: '#DEDBC8' }}
          >
            {chars.map((char, i) => (
              <AnimatedLetter
                key={i}
                char={char}
                scrollProgress={scrollYProgress}
                index={i}
                total={chars.length}
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
