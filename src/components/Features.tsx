import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';
import AutoPlayVideo from './AutoPlayVideo';

const FEATURE_VIDEO = '/features-card.mp4';

const CARDS = [
  {
    type: 'video' as const,
    label: 'Built to scale. Automated to perform.',
  },
  {
    type: 'feature' as const,
    number: '01',
    title: 'n8n Workflow Automation',
    items: [
      'Connect 400+ apps and services',
      'Schedule tasks or trigger in real-time',
      'Process data 24/7 without manual work',
      'Route and transform data automatically',
    ],
  },
  {
    type: 'feature' as const,
    number: '02',
    title: 'Custom Web Applications',
    items: [
      'Full-stack React/Node.js development',
      'Mobile-first responsive design',
      'Real-time data sync and messaging',
      'Tailored to your exact requirements',
    ],
  },
  {
    type: 'feature' as const,
    number: '03',
    title: 'AI Integration & Intelligence',
    items: [
      'OpenAI, Claude, and custom AI models',
      'Smart data analysis and extraction',
      'Natural language processing',
      'Intelligent content generation',
    ],
  },
];

function FeatureCard({ card, index }: { card: typeof CARDS[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl overflow-hidden flex-1 min-h-[320px] lg:h-full"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {card.type === 'video' ? (
        <div className="relative w-full h-full min-h-[320px]">
          <AutoPlayVideo
            src={FEATURE_VIDEO}
            className="absolute inset-0 w-full h-full object-cover scale-[2] -translate-x-24"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
            <p className="text-sm md:text-base font-medium" style={{ color: '#E1E0CC' }}>
              {card.label}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-[#212121] h-full p-5 md:p-6 flex flex-col justify-between min-h-[320px]">
          <div>
            <div className="mb-4">
              <span
                className="font-medium leading-none tracking-[-0.04em]"
                style={{ fontSize: 'clamp(48px, 6vw, 80px)', color: '#E1E0CC' }}
              >
                {card.number}
              </span>
            </div>
            <div className="mb-4">
              <h3 className="text-primary font-medium text-base sm:text-lg">{card.title}</h3>
            </div>
            <ul className="space-y-2">
              {card.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="min-h-screen bg-black relative py-16 md:py-24 lg:py-32 px-4 md:px-8">
      {/* Noise overlay */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Professional automation for',
                className: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-primary',
              },
            ]}
            containerClassName="mb-2"
          />
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'growing businesses.',
                className: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-500',
              },
            ]}
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {CARDS.map((card, i) => (
            <FeatureCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
