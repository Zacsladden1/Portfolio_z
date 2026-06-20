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
    vid.setAttribute('x-webkit-airplay', 'deny');
    vid.disableRemotePlayback = true;

    const tryPlay = () => { vid.play().catch(() => {}); };

    // Retry via IntersectionObserver so autoplay fires when element enters viewport
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) tryPlay(); },
      { threshold: 0.1 }
    );
    observer.observe(vid);

    vid.addEventListener('loadedmetadata', tryPlay);
    vid.addEventListener('canplay', tryPlay);
    tryPlay();

    return () => {
      observer.disconnect();
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
      controls={false}
      disableRemotePlayback
      preload="auto"
    />
  );
}
