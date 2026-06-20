import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NOAH_FEATURES = [
  { label: 'Workout Tracking', desc: 'Set-by-set logging with weight, reps, tempo and rest timer' },
  { label: 'Nutrition & Barcode Scan', desc: 'Macro tracking with live barcode scanning via Open Food Facts' },
  { label: 'Real-time Messaging', desc: '1:1 coach–client chat with photo sharing and read receipts' },
  { label: 'Coach Dashboard', desc: 'Client management, program assignment and progress monitoring' },
  { label: 'Content Library', desc: 'Video and document library for form corrections and guides' },
  { label: 'Push Notifications', desc: 'Scheduled reminders via Web Push and Vercel cron jobs' },
];

const INSPECT_FEATURES = [
  { label: 'CSV Auto-Parser', desc: 'Ingests 12+ estate agent branch formats and standardises into one master spreadsheet' },
  { label: 'Inspection Scheduling', desc: 'n8n webhook distributes properties across inspectors with configurable daily limits' },
  { label: 'Automated SMS', desc: 'Sends confirmation and reminder messages to tenants without manual input' },
  { label: 'Route Optimisation', desc: 'Groups inspections geographically to minimise travel between properties' },
  { label: 'Real-time Status', desc: 'Supabase live subscriptions show processing state as n8n workflows run' },
  { label: 'Data Export', desc: 'One-click CSV and Excel export of processed inspection schedules' },
];


function NoahCard() {
  return (
    <div className="bg-[#101010] rounded-2xl md:rounded-3xl overflow-hidden h-full">
      <div className="flex items-center gap-4 p-6 md:p-12 border-b border-white/5">
        <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-xl bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
          <img src="/noahtrains-logo.png" alt="Noahtrains logo" className="w-7 h-7 md:w-10 md:h-10 object-contain" />
        </div>
        <div>
          <h2 className="text-xl md:text-3xl font-normal text-primary leading-tight">Noahtrains</h2>
          <p className="text-[10px] md:text-xs text-white/40 mt-0.5 tracking-wide uppercase">Full-stack fitness coaching platform · 2025</p>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden p-6">
        <p className="text-sm text-white/60 leading-relaxed mb-6">
          A full-stack mobile-first platform for a personal trainer and his clients — workout logging, nutrition tracking, coach–client messaging and a content library, all in one app.
        </p>
        <div className="space-y-4">
          {[
            { label: 'Workout Tracking', desc: 'Set-by-set logging with weight, reps, RIR, tempo and rest timer' },
            { label: 'Barcode Nutrition Scan', desc: 'Scan food barcodes to log macros instantly via Open Food Facts' },
            { label: 'Real-time Coach Messaging', desc: '1:1 chat with photo sharing, read receipts and typing indicators' },
            { label: 'Coach Admin Dashboard', desc: 'Assign programs, monitor client progress and manage content' },
          ].map((f) => (
            <div key={f.label} className="flex gap-3">
              <div className="mt-1.5 w-1 h-1 rounded-full bg-[#cda738] shrink-0" />
              <div>
                <p className="text-xs font-medium text-primary">{f.label}</p>
                <p className="text-xs text-white/40 mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:grid grid-cols-2 gap-0">
        <div className="p-12 border-r border-white/5">
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-md">
            A comprehensive mobile-first platform built for a personal trainer to manage clients,
            assign programs and track progress — and for clients to log workouts, scan food
            barcodes and message their coach in real time.
          </p>
          <div className="space-y-5">
            {NOAH_FEATURES.map((f) => (
              <div key={f.label} className="flex gap-3">
                <div className="mt-1.5 w-1 h-1 rounded-full bg-[#cda738] shrink-0" />
                <div>
                  <p className="text-xs font-medium text-primary">{f.label}</p>
                  <p className="text-xs text-white/40 mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center bg-[#0d0d0d] py-12 min-h-[520px]">
          <div className="absolute w-56 h-72 rounded-full bg-[#cda738]/8 blur-3xl pointer-events-none" />
          <div className="relative z-10" style={{ width: '210px' }}>
            <div
              className="relative p-[2.5px]"
              style={{
                borderRadius: '44px',
                background: 'linear-gradient(160deg, #666 0%, #2a2a2a 40%, #555 100%)',
                boxShadow: '0 32px 64px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              <div className="relative overflow-hidden bg-black" style={{ borderRadius: '42px' }}>
                <img src="/noahtrains-screenshot.jpg" alt="Noahtrains dashboard" className="w-full block" draggable={false} />
                <div className="absolute top-[10px] left-1/2 -translate-x-1/2 bg-black rounded-full" style={{ width: '72px', height: '24px' }} />
                <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2">
                  <div className="w-20 h-[4px] rounded-full bg-white/30" />
                </div>
              </div>
              <div className="absolute rounded-l-[2px]" style={{ left: '-3px', top: '80px',  width: '3px', height: '28px', background: '#555' }} />
              <div className="absolute rounded-l-[2px]" style={{ left: '-3px', top: '118px', width: '3px', height: '36px', background: '#555' }} />
              <div className="absolute rounded-l-[2px]" style={{ left: '-3px', top: '162px', width: '3px', height: '36px', background: '#555' }} />
              <div className="absolute rounded-r-[2px]" style={{ right: '-3px', top: '110px', width: '3px', height: '48px', background: '#555' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InspectCard() {
  return (
    <div className="bg-[#101010] rounded-2xl md:rounded-3xl overflow-hidden h-full">
      <div className="flex items-center gap-4 p-6 md:p-12 border-b border-white/5">
        <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-xl bg-[#1a1a1a] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-7 md:h-7 text-primary opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
          </svg>
        </div>
        <div>
          <h2 className="text-xl md:text-3xl font-normal text-primary leading-tight">Property Inspection Automations</h2>
          <p className="text-[10px] md:text-xs text-white/40 mt-0.5 tracking-wide uppercase">Workflow automation · property management · 2025</p>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden p-6">
        <p className="text-sm text-white/60 leading-relaxed mb-6">
          Built for a lettings agency to automate their entire inspection workflow — from messy spreadsheets across 12+ branches to scheduled inspectors and SMS-confirmed tenants, with no manual steps.
        </p>
        <div className="space-y-4">
          {[
            { label: 'Multi-branch CSV Auto-Parser', desc: 'Detects and standardises 12+ estate agent formats into one master spreadsheet automatically' },
            { label: 'Automated SMS to Tenants', desc: 'Sends inspection confirmations and reminders without any manual input' },
            { label: 'n8n Inspection Scheduling', desc: 'Webhook distributes properties across inspectors with configurable daily limits' },
            { label: 'Real-time Processing Status', desc: 'Supabase live subscriptions update the UI as n8n workflows complete' },
          ].map((f) => (
            <div key={f.label} className="flex gap-3">
              <div className="mt-1.5 w-1 h-1 rounded-full bg-[#cda738] shrink-0" />
              <div>
                <p className="text-xs font-medium text-primary">{f.label}</p>
                <p className="text-xs text-white/40 mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:grid grid-cols-2 gap-0">
        <div className="p-12 border-r border-white/5">
          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-md">
            A web platform that eliminated manual scheduling work for a lettings agency.
            CSV exports from 12+ estate agent branches are automatically parsed, inspections
            distributed across inspectors, and SMS confirmations sent to tenants — all without
            human intervention.
          </p>
          <div className="space-y-5">
            {INSPECT_FEATURES.map((f) => (
              <div key={f.label} className="flex gap-3">
                <div className="mt-1.5 w-1 h-1 rounded-full bg-[#cda738] shrink-0" />
                <div>
                  <p className="text-xs font-medium text-primary">{f.label}</p>
                  <p className="text-xs text-white/40 mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center bg-[#0d0d0d] py-10 min-h-[420px]">
          <div className="absolute w-64 h-48 rounded-full bg-[#cda738]/6 blur-3xl pointer-events-none top-1/3" />

          {/* Laptop */}
          <div className="relative z-10 w-full max-w-lg">
            {/* Lid + screen */}
            <div
              className="relative mx-4 rounded-t-lg overflow-hidden"
              style={{
                background: 'linear-gradient(160deg, #555 0%, #2a2a2a 50%, #444 100%)',
                padding: '3px 3px 0 3px',
                boxShadow: '0 -8px 32px rgba(0,0,0,0.6)',
              }}
            >
              {/* Screen bezel top */}
              <div className="bg-[#111] rounded-t-md overflow-hidden">
                {/* Tiny camera dot */}
                <div className="flex justify-center pt-1.5 pb-1 bg-[#111]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2a2a2a]" />
                </div>
                {/* Screenshot */}
                <img
                  src="/inspect-screenshot.png"
                  alt="Property Inspection Automation"
                  className="w-full block"
                  draggable={false}
                />
              </div>
            </div>

            {/* Base / hinge strip */}
            <div
              style={{
                background: 'linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 100%)',
                height: '10px',
                borderRadius: '0 0 2px 2px',
                boxShadow: '0 2px 0 #1a1a1a',
              }}
            />
            {/* Bottom base */}
            <div
              style={{
                background: 'linear-gradient(180deg, #2e2e2e 0%, #222 100%)',
                height: '14px',
                borderRadius: '0 0 8px 8px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.8)',
              }}
            >
              {/* Trackpad hint */}
              <div className="flex justify-center pt-3">
                <div className="w-16 h-1.5 rounded-sm bg-white/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CARDS = [<NoahCard />, <InspectCard />];
const TITLES = ['Noahtrains', 'Property Inspections'];

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

  const variants = {
    enter:  (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <section className="bg-black py-16 md:py-24 lg:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header row */}
        <motion.div
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary text-[10px] sm:text-xs tracking-widest uppercase">Selected work</p>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Dots */}
            <div className="flex gap-1.5">
              {CARDS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === index ? '20px' : '6px',
                    height: '6px',
                    borderRadius: '3px',
                    background: i === index ? '#DEDBC8' : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>
            {/* Arrows */}
            <button
              onClick={() => go((index - 1 + CARDS.length) % CARDS.length)}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-primary" />
            </button>
            <button
              onClick={() => go((index + 1) % CARDS.length)}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-primary" />
            </button>
          </div>
        </motion.div>

        {/* Carousel viewport */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {CARDS[index]}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Counter */}
        <motion.p
          className="text-center text-[10px] text-white/20 mt-4 tracking-widest"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {TITLES[index]} &nbsp;·&nbsp; {index + 1} / {CARDS.length}
        </motion.p>

      </div>
    </section>
  );
}
