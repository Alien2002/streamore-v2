import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions extends IntersectionObserverInit {
  /** Only reveal when the element enters the viewport while scrolling down. Default: false. */
  onlyOnScrollDown?: boolean;
}

/**
 * Like useInView, but replays the reveal every time the element scrolls
 * into view while the user is scrolling DOWN. Scrolling back up into the
 * element (from below) does not re-trigger it.
 *
 * Usage:
 *   const { ref, inView } = useScrollReveal<HTMLDivElement>();
 *   <div ref={ref} className={inView ? styles.revealed : ''}>...</div>
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  // Default to allowing reveal on both scroll directions for expected UX.
  const { onlyOnScrollDown = false, threshold = 0.2, ...rest } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  const lastScrollY = useRef(0);
  // 'initial' = no scroll has happened yet (covers elements already in
  // view on page load). Only 'up' should block the reveal.
  const direction = useRef<'initial' | 'down' | 'up'>('initial');

  // Track scroll direction
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      direction.current = currentY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Observe intersection, gated by direction
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reveal unless we know for certain the user scrolled UP into it.
          if (!onlyOnScrollDown || direction.current !== 'up') {
            setInView(true);
          }
        } else {
          // Reset on exit (either direction) so it's ready to replay
          // next time it enters while scrolling down.
          setInView(false);
        }
      },
      { threshold, ...rest }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onlyOnScrollDown, threshold]);

  return { ref, inView };
}