import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Logomarquee.module.css';

// Place these files in your public assets folder (e.g. /public/logos/)
// so the paths below resolve — see the uploaded set for the source
// images. `elct.png` covers the Evangelical Lutheran Church in Tanzania
// logo (there were two duplicate uploads of it; only one is kept here).
const rowOneLogos = [
  { name: 'JEFAG Logistics Tanzania', image: '/logos/jefag-logistics.png' },
  { name: 'DC Depot', image: '/logos/dc-depot.png' },
  { name: 'Dar Ceramica Centre', image: '/logos/dar-ceramica-centre.png' },
  { name: 'Tanzania Private Sector Federation', image: '/logos/tpsf.png' },
  { name: 'Sika', image: '/logos/sika.png' },
  { name: 'Kefa Cargo Solutions', image: '/logos/kefa-cargo-solutions.png' },
];

const rowTwoLogos = [
  { name: 'Africa Inland Church Tanzania', image: '/logos/africa-inland-church.png' },
  { name: 'Evangelical Lutheran Church in Tanzania', image: '/logos/elct.png' },
  { name: 'Mama & Wanae', image: '/logos/mama-na-wanae.png' },
  { name: 'University of Dar es Salaam', image: '/logos/udsm.png' },
  { name: 'Fantuzzi Investments', image: '/logos/fantuzzi-investments.png' },
];

// How many times each row's logo list repeats in the track. Two copies
// is only enough for a seamless loop if a single set of logos is at
// least as wide as the viewport — with a short list like this one,
// that's not guaranteed, so a wide screen would show a blank gap
// flashing in before the loop reset. More copies means more buffer.
const REPEAT = 4;

function buildLoopedLogos(logos: { name: string; image?: string }[]) {
  return Array.from({ length: REPEAT }, () => logos).flat();
}

function LogoRow({ logos, direction, speed }: { logos: { name: string; image?: string }[]; direction: 'left' | 'right'; speed: number }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      // Loop distance is still just the width of ONE set — the extra
      // copies exist purely as buffer so the viewport never runs out
      // of content, not to change how far a single loop travels.
      const items = track.children as HTMLCollectionOf<HTMLElement>;
      const setLength = items.length / REPEAT;
      const distance = items[setLength].offsetLeft - items[0].offsetLeft;

      tweenRef.current = gsap.fromTo(
        track,
        { x: direction === 'left' ? 0 : -distance },
        {
          x: direction === 'left' ? -distance : 0,
          duration: speed,
          ease: 'none',
          repeat: -1,
        }
      );
    });

    return () => ctx.revert();
  }, [direction, speed]);

  const pause = () => tweenRef.current?.pause();
  const resume = () => tweenRef.current?.resume();

  return (
    <div className={styles.rowViewport} onMouseEnter={pause} onMouseLeave={resume}>
      <div className={`${styles.fadeOverlay} ${styles.fadeLeft}`} />

      <div className={styles.track} ref={trackRef}>
        {buildLoopedLogos(logos).map((logo, i) => (
          <div className={styles.logoChip} key={`${logo.name}-${i}`}>
            {logo.image ? (
              <img src={logo.image} alt={logo.name} className={styles.logoImage} />
            ) : (
              <span className={styles.logoText}>{logo.name}</span>
            )}
          </div>
        ))}
      </div>

      <div className={`${styles.fadeOverlay} ${styles.fadeRight}`} />
    </div>
  );
}

function LogoMarquee() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <p className={`${styles.eyebrow} ${styles.center}`}>Trusted by</p>
        <h2 className={`${styles.heading} ${styles.center}`}>
          Organisations we&apos;ve worked with
        </h2>
      </div>

      <div className={styles.rows}>
        <LogoRow logos={rowOneLogos} direction="left" speed={30} />
        <LogoRow logos={rowTwoLogos} direction="right" speed={36} />
      </div>
    </section>
  );
}

export default LogoMarquee;