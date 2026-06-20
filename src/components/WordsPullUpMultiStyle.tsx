import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Segment {
  text: string;
  className: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  containerClassName?: string;
}

export default function WordsPullUpMultiStyle({ segments, containerClassName = '' }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const allWords: { word: string; className: string; globalIndex: number }[] = [];
  segments.forEach((seg) => {
    const words = seg.text.split(' ').filter(Boolean);
    words.forEach((word) => {
      allWords.push({ word, className: seg.className, globalIndex: allWords.length });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${containerClassName}`}>
      {allWords.map(({ word, className, globalIndex }) => (
        <span key={globalIndex} className="overflow-hidden inline-block" style={{ marginRight: '0.25em' }}>
          <motion.span
            className={`inline-block ${className}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: globalIndex * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
