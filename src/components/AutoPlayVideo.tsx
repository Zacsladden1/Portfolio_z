import { useEffect, useRef } from 'react';

interface AutoPlayVideoProps {
  src: string;
  className?: string;
}

export default function AutoPlayVideo({ src, className }: AutoPlayVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = ref.current;
    if (!vid) return;

    // iOS Safari requires defaultMuted on the DOM object (not just the attribute)
    vid.defaultMuted = true;
    vid.muted = true;
    vid.setAttribute('playsinline', '');
    vid.setAttribute('webkit-playsinline', '');

    const tryPlay = () => { vid.play().catch(() => {}); };

    vid.addEventListener('loadedmetadata', tryPlay);
    vid.addEventListener('canplay', tryPlay);
    tryPlay();

    return () => {
      vid.removeEventListener('loadedmetadata', tryPlay);
      vid.removeEventListener('canplay', tryPlay);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    />
  );
}
