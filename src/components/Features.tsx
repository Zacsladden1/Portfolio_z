import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

const FEATURE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4';

const CARDS = [
  {
    type: 'video' as const,
    label: 'Your workflows, automated.',
  },
  {
    type: 'feature' as const,
    number: '01',
    title: 'Workflow Automation.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      'Automate email sequences',
      'Process and route data 24/7',
      'Replace repetitive manual tasks',
      'Trigger on schedule or in real time',
    ],
  },
  {
    type: 'feature' as const,
    number: '02',
    title: 'API Integrations.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      'Connect Slack, Google Sheets and CRMs',
      'Integrate 400+ apps through n8n',
      'Keep databases in sync automatically',
    ],
  },
  {
    type: 'feature' as const,
    number: '03',
    title: 'AI-Powered Automation.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      'Analyse data automatically',
      'Generate content on demand',
      'Surface smart notifications that actually matter',
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
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={FEATURE_VIDEO}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
            <p className="text-sm md:text-base font-medium" style={{ color: '#E1E0CC' }}>
              Your workflows, automated.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-[#212121] h-full p-5 md:p-6 flex flex-col justify-between min-h-[320px]">
          <div>
            <div className="flex items-start justify-between mb-4">
              <img
                src={card.icon}
                alt={card.title}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
              />
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-gray-500 text-xs">{card.number}</span>
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
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center gap-1 text-primary text-xs sm:text-sm hover:gap-2 transition-all duration-200"
            >
              Learn more
              <ArrowRight className="w-3.5 h-3.5" style={{ transform: 'rotate(-45deg)' }} />
            </a>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="min-h-screen bg-black relative py-16 md:py-24 lg:py-32 px-4 md:px-8">
      {/* Noise overlay */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Studio-grade workflows for ambitious businesses.',
                className: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-primary',
              },
            ]}
            containerClassName="mb-2"
          />
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Built to connect. Powered by automation.',
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
