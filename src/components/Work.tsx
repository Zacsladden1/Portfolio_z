import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

const EASE = [0.22, 1, 0.36, 1] as const;

const PROJECTS = [
  {
    label: 'Full-stack web app · 2025',
    title: 'Noahtrains',
    description:
      'A mobile-first coaching platform for personal trainers to manage clients, assign programs, and track progress. Clients log workouts, scan food barcodes, and message their coach in real-time.',
    features: [
      { label: 'Workout Tracking', desc: 'Set-by-set logging with weight, reps, tempo, and rest timer' },
      { label: 'Nutrition & Barcode Scan', desc: 'Macro tracking with live barcode scanning via Open Food Facts API' },
      { label: 'Real-time Messaging', desc: '1:1 coach–client chat with photo sharing and read receipts' },
      { label: 'Coach Dashboard', desc: 'Client management, program assignment, and progress monitoring' },
      { label: 'Content Library', desc: 'Video and document library for form guides and resources' },
      { label: 'Push Notifications', desc: 'Scheduled reminders via Web Push and Vercel cron jobs' },
    ],
    visual: 'phone' as const,
    screenshot: '/noahtrains-screenshot.jpg',
    logo: '/noahtrains-logo.png',
  },
  {
    label: 'Workflow automation · 2025',
    title: 'Property Inspection Automations',
    description:
      'A web platform that eliminated manual scheduling for a lettings agency. CSV exports from 12+ estate agent branches are automatically parsed, inspections distributed across inspectors, and SMS confirmations sent to tenants—all without human intervention.',
    features: [
      { label: 'CSV Auto-Parser', desc: 'Ingests 12+ branch formats and standardizes into one master spreadsheet' },
      { label: 'Inspection Scheduling', desc: 'n8n webhook distributes properties across inspectors with daily limits' },
      { label: 'Automated SMS', desc: 'Sends confirmation and reminder messages to tenants automatically' },
      { label: 'Route Optimization', desc: 'Groups inspections geographically to minimize travel time' },
      { label: 'Real-time Status', desc: 'Supabase subscriptions show processing state as workflows execute' },
      { label: 'Data Export', desc: 'One-click CSV and Excel export of processed inspection schedules' },
    ],
    visual: 'laptop' as const,
    screenshot: '/inspect-screenshot.png',
    logo: null,
  },
];

function PhoneMockup({ src }: { src: string }) {
  return (
    <div className="flex items-center justify-center py-10">
      <div
        className="relative"
        style={{
          width: '200px',
          borderRadius: '44px',
          background: 'linear-gradient(160deg, #444 0%, #1e1e1e 40%, #3a3a3a 100%)',
          padding: '2.5px',
          boxShadow: '0 32px 64px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.07)',
        }}
      >
        <div className="relative overflow-hidden bg-black" style={{ borderRadius: '42px' }}>
          <img src={src} alt="App screenshot" className="w-full block" draggable={false} />
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 bg-black rounded-full" style={{ width: '70px', height: '22px' }} />
          <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2">
            <div className="w-20 h-[4px] rounded-full bg-white/20" />
          </div>
        </div>
        {/* Side buttons */}
        {[80, 118, 162].map((top) => (
          <div key={top} className="absolute rounded-l-sm" style={{ left: '-3px', top, width: '3px', height: top === 80 ? '28px' : '36px', background: '#444' }} />
        ))}
        <div className="absolute rounded-r-sm" style={{ right: '-3px', top: '110px', width: '3px', height: '48px', background: '#444' }} />
      </div>
    </div>
  );
}

function LaptopMockup({ src }: { src: string }) {
  return (
    <div className="flex items-center justify-center py-10 px-6">
      <div className="w-full max-w-sm">
        <div
          className="relative rounded-t-lg overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #444 0%, #1e1e1e 50%, #333 100%)',
            padding: '3px 3px 0 3px',
            boxShadow: '0 -8px 32px rgba(0,0,0,0.6)',
          }}
        >
          <div className="bg-[#111] rounded-t-md overflow-hidden">
            <div className="flex justify-center pt-1.5 pb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2a2a2a]" />
            </div>
            <img src={src} alt="App screenshot" className="w-full block" draggable={false} />
          </div>
        </div>
        <div style={{ background: 'linear-gradient(180deg, #333 0%, #222 100%)', height: '10px', borderRadius: '0 0 2px 2px' }} />
        <div style={{ background: 'linear-gradient(180deg, #2a2a2a 0%, #1e1e1e 100%)', height: '14px', borderRadius: '0 0 8px 8px', boxShadow: '0 8px 24px rgba(0,0,0,0.8)' }}>
          <div className="flex justify-center pt-3">
            <div className="w-14 h-1 rounded-sm bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

  const project = PROJECTS[index];

  return (
    <section id="work" className="bg-black py-16 md:py-24 lg:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Label */}
        <motion.p
          className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-6 md:mb-8 text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Selected work
        </motion.p>

        {/* Heading */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center leading-[0.95] mb-10 md:mb-14">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Recent', className: 'font-normal text-primary' },
              { text: 'client work.', className: 'font-serif italic text-primary' },
            ]}
          />
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="relative overflow-hidden rounded-2xl md:rounded-3xl"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="bg-[#101010] rounded-2xl md:rounded-3xl overflow-hidden"
            >
              {/* Card header */}
              <div className="flex items-center gap-4 p-6 md:p-10 border-b border-white/5">
                {project.logo && (
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
                    <img src={project.logo} alt="" className="w-7 h-7 md:w-9 md:h-9 object-contain" />
                  </div>
                )}
                <div>
                  <h2 className="text-xl md:text-3xl font-normal text-primary leading-tight m-0">{project.title}</h2>
                  <p className="text-[10px] md:text-xs text-gray-500 mt-0.5 tracking-wide uppercase">{project.label}</p>
                </div>
              </div>

              {/* Card body */}
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: text */}
                <div className="p-6 md:p-10 lg:border-r border-white/5">
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-8 max-w-md">
                    {project.description}
                  </p>
                  <ul className="space-y-4">
                    {project.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-primary">{f.label}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: visual — desktop only */}
                <div className="hidden lg:flex bg-[#0d0d0d] items-center justify-center lg:min-h-[480px]">
                  {project.visual === 'phone'
                    ? <PhoneMockup src={project.screenshot} />
                    : <LaptopMockup src={project.screenshot} />
                  }
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="flex items-center justify-between mt-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Counter */}
          <p className="text-[10px] text-gray-500 tracking-widest">
            {String(index + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
          </p>

          {/* Dots + arrows */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === index ? '20px' : '6px',
                    height: '6px',
                    borderRadius: '3px',
                    background: i === index ? '#DEDBC8' : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => go((index - 1 + PROJECTS.length) % PROJECTS.length)}
              className="group flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-primary/10 transition-colors duration-200"
            >
              <ArrowRight className="w-4 h-4 text-primary rotate-180" />
            </button>
            <button
              onClick={() => go((index + 1) % PROJECTS.length)}
              className="group flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-primary/10 transition-colors duration-200"
            >
              <ArrowRight className="w-4 h-4 text-primary" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
