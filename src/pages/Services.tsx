import Hero from '@/components/Hero';
import styles from './services.module.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// ---- Service card data ------------------------------------------------
// Pulled out of JSX so we can freely split it across marquee columns.
const cardsData = [
  {
    num: '01',
    title: 'Multi-camera livestreaming',
    desc: 'Our specialisation. Two to eight cameras, live directing, professional audio, graphics and simultaneous delivery to public or private destinations.',
    items: [
      'Churches, conferences and corporate events',
      'Concerts, ceremonies and weddings',
      'Government and institutional events',
      'Multi-platform and private distribution',
    ],
  },
  {
    num: '02',
    title: 'Live event production',
    desc: 'The technical production behind the broadcast — and behind the screens in the room.',
    items: [
      'Camera operation and vision mixing',
      'Audio integration with the venue console',
      'Live graphics, lower thirds and playback',
      'Screen feeds and programme recording',
    ],
  },
  {
    num: '03',
    title: 'Hybrid event production',
    desc: 'One show, two audiences. The people in the room and the people online both get a complete experience.',
    items: [
      'Remote speakers and panellists',
      'Moderated Q&A, polls and chat management',
      'Presentation and screen management',
      'Recording and replay for both audiences',
    ],
  },
  {
    num: '04',
    title: 'Corporate broadcasting',
    desc: 'For companies, banks, NGOs, associations and institutions where the message carries weight.',
    items: [
      'AGMs, board meetings and town halls',
      'Product launches and press conferences',
      'Training and internal communications',
      'Secure, private and access-controlled delivery',
    ],
  },
  {
    num: '05',
    title: 'Church production',
    desc: 'Weekly production, not one-off streaming — delivered on contract with a consistent look and crew.',
    items: [
      'Sunday services and worship nights',
      'Conferences, crusades and celebrations',
      'Weddings, funerals and special services',
      'Volunteer team training and system design',
    ],
  },
  {
    num: '06',
    title: 'Event broadcasting',
    desc: 'Larger events with multiple rooms, stages, feeds and stakeholders.',
    items: [
      'Multi-camera crew with a show caller',
      'Venue and stage integration',
      'Redundant power and connectivity',
      'Technical coordination with your producers',
    ],
  },
  {
    num: '07',
    title: 'Video production',
    desc: 'Supporting service. Corporate and event films that share the same look as your broadcast.',
    items: [
      'Corporate and brand films',
      'Event highlight and recap videos',
      'Interviews and documentaries',
      'Social media cutdowns and commercials',
    ],
  },
  {
    num: '08',
    title: 'Photography',
    desc: 'Supporting service. Stills captured alongside the broadcast, delivered to the same deadline.',
    items: [
      'Corporate and conference photography',
      'Event and stage coverage',
      'Portraits and speaker headshots',
      'Product and brand photography',
    ],
  },
  {
    num: '09',
    title: 'Podcast production',
    desc: 'Studio and on-location podcast production, built as a multi-camera show rather than a microphone in a room.',
    items: [
      'Multi-camera studio recording',
      'Broadcast-grade audio capture',
      'Editing, reels and episode packaging',
      'Publishing and distribution support',
    ],
  },
  {
    num: '10',
    title: 'Content production',
    desc: 'The reason a Streamore production keeps paying after the event.',
    items: [
      'Master recording and clean replay',
      'Highlight film and speaker cuts',
      '5–20 vertical clips for social',
      'Photographs, thumbnails and a performance report',
    ],
  },
];

const COLUMN_COUNT = 3;

// Round-robin the cards into columns so each column gets a mix of
// short/long cards rather than one column being all "tall" cards.
const columns = Array.from({ length: COLUMN_COUNT }, (_, colIndex) =>
  cardsData.filter((_, i) => i % COLUMN_COUNT === colIndex)
);

function ServiceCard({ card }: { card: typeof cardsData[0] }) {
  return (
    <div className={styles.card}>
      <p className={styles.num}>{card.num}</p>
      <h3>{card.title}</h3>
      <p style={{ marginBottom: '16px' }}>{card.desc}</p>
      <ul className={styles.check}>
        {card.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Services() {
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tweensRef = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      colRefs.current.forEach((col, i) => {
        if (!col) return;

        // scrollHeight/2 is NOT reliable here: with a flex `gap`, the
        // total number of gaps across the doubled list doesn't split
        // evenly in half, so that estimate is off by a fraction of a
        // gap — a visible seam at the loop point. Instead, measure the
        // real offsetTop of the first duplicate card: that's the exact
        // pixel distance one full loop needs to travel.
        const cards = col.children as HTMLCollectionOf<HTMLElement>;
        const half = cards.length / 2;
        const halfHeight = cards[half].offsetTop - cards[0].offsetTop;

        // Even columns drift upward, odd columns drift downward.
        const goingUp = i % 2 === 0;

        // Vary speed slightly per column so they don't all move in lockstep.
        const duration = 26 + i * 7;

        const tween = gsap.fromTo(
          col,
          { y: goingUp ? 0 : -halfHeight },
          {
            y: goingUp ? -halfHeight : 0,
            duration,
            ease: 'none',
            repeat: -1,
          }
        );

        tweensRef.current[i] = tween;
      });
    });

    return () => ctx.revert();
  }, []);

  // Pause the whole marquee on hover — comment this handler pair out
  // (and remove onMouseEnter/onMouseLeave below) if you'd rather it
  // keep scrolling under the cursor.
  const pauseAll = () => tweensRef.current.forEach((t) => t?.pause());
  const resumeAll = () => tweensRef.current.forEach((t) => t?.resume());

  return (
    <>
      <Hero
        title1="One specialisation."
        title2="A full production chain."
        subtitle="Multi-camera livestreaming is the centre of everything we do. Every other service exists to strengthen the broadcast or extend its value once the room empties."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section>
        <div className={styles.wrap}>
          <div
            className={styles.marqueeViewport}
            onMouseEnter={pauseAll}
            onMouseLeave={resumeAll}
          >
            <div className={`${styles.fadeOverlay} ${styles.fadeTop}`} />

            {columns.map((col, colIndex) => (
              <div
                key={colIndex}
                className={styles.marqueeCol}
                ref={(el) => (colRefs.current[colIndex] = el)}
              >
                {/* Render the column's cards twice for the seamless loop */}
                {[...col, ...col].map((card, i) => (
                  <ServiceCard key={`${colIndex}-${card.num}-${i}`} card={card} />
                ))}
              </div>
            ))}

            <div className={`${styles.fadeOverlay} ${styles.fadeBottom}`} />
          </div>
        </div>
      </section>

      <section className={styles.deep}>
        <div className={styles.wrap}>
          <div className={styles.secHead + ' ' + styles.center}>
            <p className={styles.eyebrow}>Content multiplication</p>
            <h2>One event. Twenty assets.</h2>
            <div className={styles.rule}></div>
            <p className={styles.lead}>
              Most suppliers hand over a single long recording. We plan the
              follow-up content before the event starts, so the material
              exists when your communications team needs it.
            </p>
          </div>
          <div className={styles.grid + ' ' + styles.g4}>
            <div className={styles.card}>
              <div className={styles.icon}>1</div>
              <h3>Live programme</h3>
              <p>The directed broadcast, delivered to every agreed destination.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>2</div>
              <h3>Master recording</h3>
              <p>A clean, full-length local master you keep and archive.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>3</div>
              <h3>Highlight film</h3>
              <p>A 2–5 minute hero edit for your website and channels.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>4</div>
              <h3>Clips &amp; stills</h3>
              <p>Vertical clips, speaker cuts, quote cards and photographs.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.wrap}>
          <div className={styles.callout}>
            <h2>Not sure which service you need?</h2>
            <p>
              Send us the event. We'll tell you the smallest production that
              will do the job properly — and say so if you don't need the
              bigger package.
            </p>
            <div className={styles['btn-row']}>
              <a className={styles.btn + ' ' + styles['btn-dark']} href="contact.html">
                Talk to a producer
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;