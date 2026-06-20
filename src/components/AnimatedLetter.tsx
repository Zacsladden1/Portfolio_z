import { motion, useTransform, MotionValue } from 'framer-motion';

interface AnimatedLetterProps {
  char: string;
  scrollProgress: MotionValue<number>;
  index: number;
  total: number;
}

export default function AnimatedLetter({ char, scrollProgress, index, total }: AnimatedLetterProps) {
  const charProgress = index / total;
  const opacity = useTransform(
    scrollProgress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1]
  );

  if (char === ' ') {
    return <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>;
  }

  return (
    <motion.span style={{ opacity, display: 'inline-block' }}>
      {char}
    </motion.span>
  );
}
