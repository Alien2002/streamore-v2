import Hero from '@/components/Hero';
import styles from './Work.module.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// TODO: swap `avatar` for a real client headshot once you have one —
// these are placeholder images so the layout has something to show.
const testimonials = [
  {
    name: 'Name Surname',
    role: 'Role — Organisation',
    quote: 'Add a client quote here that names the outcome, not the equipment.',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    name: 'Name Surname',
    role: 'Role — Organisation',
    quote: 'Add a client quote here that names the outcome, not the equipment.',
    avatar: 'https://i.pravatar.cc/100?img=32',
  },
  {
    name: 'Name Surname',
    role: 'Role — Organisation',
    quote: 'Add a client quote here that names the outcome, not the equipment.',
    avatar: 'https://i.pravatar.cc/100?img=47',
  },
];

const particles = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: `${(index * 11.5) % 100}%`,
  top: `${(index * 17.2 + 8) % 100}%`,
  size: 2 + (index % 5),
  duration: 8 + (index % 6),
  delay: (index % 7) * 0.9,
  opacity: 0.18 + (index % 4) * 0.12,
}));

function Work() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      // Same seamless-loop trick as the vertical marquee: the track
      // renders the testimonial list TWICE back to back, so half of
      // its scrollWidth is exactly one full loop. Animating x from 0
      // to -halfWidth and repeating is invisible at the reset point.
      const halfWidth = track.scrollWidth / 2;

      tweenRef.current = gsap.fromTo(
        track,
        { x: 0 },
        { x: -halfWidth, duration: 32, ease: 'none', repeat: -1 }
      );
    });

    return () => ctx.revert();
  }, []);

  const pause = () => tweenRef.current?.pause();
  const resume = () => tweenRef.current?.resume();

  return (
    <>
      <Hero
        title1="The work, and"
        title2="the evidence behind it."
        bgImage="work.JPG"
        subtitle="Every Streamore case study shows the same six things: the objective, the venue, the production design, the connectivity plan, the audience result and the deliverables. Showreels are easy; evidence is what corporate buyers actually compare."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Work' }]}
      />

      <section><div className={styles.wrap}>
        <div className={styles.secHead}>
          <p className={styles.eyebrow}>Portfolio</p>
          <h2>Selected productions</h2>
          <div className={styles.rule}></div>
          <p className={styles.lead}>
            Replace each card below with a real production as your portfolio grows. Keep the structure — it is what makes a case study procurement-ready rather than decorative.
          </p>
        </div>
        <div className={styles.grid + " " + styles.g3}>
          <div className={styles.card}>
            <p className={styles.num}>CORPORATE</p>
            <h3>Annual General Meeting</h3>
            <p style={{ marginBottom: '12px' }}>Hotel ballroom, Dar es Salaam</p>
            <p style={{ fontWeight: '700', color: '#DE9200', fontSize: '.86rem' }}>3 cameras · private destination · 2 languages</p>
          </div><div className={styles.card}>
            <p className={styles.num}>CONFERENCE</p>
            <h3>Multi-day sector forum</h3>
            <p style={{ marginBottom: '12px' }}>Conference centre, 2 rooms</p>
            <p style={{ fontWeight: '700', color: '#DE9200', fontSize: '.86rem' }}>5 cameras · hybrid panellists · captions</p>
          </div><div className={styles.card}>
            <p className={styles.num}>CHURCH</p>
            <h3>Weekly service production</h3>
            <p style={{ marginBottom: '12px' }}>Auditorium, monthly contract</p>
            <p style={{ fontWeight: '700', color: '#DE9200', fontSize: '.86rem' }}>3 cameras · weekly clips · channel managed</p>
          </div><div className={styles.card}>
            <p className={styles.num}>BRAND</p>
            <h3>Product launch broadcast</h3>
            <p style={{ marginBottom: '12px' }}>Rooftop venue, evening</p>
            <p style={{ fontWeight: '700', color: '#DE9200', fontSize: '.86rem' }}>4 cameras · multi-platform · 12 clips</p>
          </div><div className={styles.card}>
            <p className={styles.num}>GOVERNMENT</p>
            <h3>National commemoration</h3>
            <p style={{ marginBottom: '12px' }}>Outdoor grounds</p>
            <p style={{ fontWeight: '700', color: '#DE9200', fontSize: '.86rem' }}>6 cameras · dual carriers · generator-backed</p>
          </div><div className={styles.card}>
            <p className={styles.num}>EDUCATION</p>
            <h3>Masterclass series</h3>
            <p style={{ marginBottom: '12px' }}>Studio, 8 episodes</p>
            <p style={{ fontWeight: '700', color: '#DE9200', fontSize: '.86rem' }}>2 cameras · paywalled delivery · archive</p>
          </div>
        </div>
      </div></section>

      <section className={styles.alt}><div className={styles.wrap}>
        <div className={styles.secHead}><p className={styles.eyebrow}>Case study format</p><h2>What every Streamore case study contains</h2><div className={styles.rule}></div></div>
        <div className={styles.tableWrap}><table>
          <thead><tr><th>Section</th><th>What we publish</th><th>Why a buyer cares</th></tr></thead>
          <tbody>
            <tr><td><strong>Objective</strong></td><td>What the client needed the broadcast to achieve</td><td>Shows we design to a purpose, not to an equipment list</td></tr>
            <tr><td><strong>Production design</strong></td><td>Camera plan, audio routing, graphics and crew roles</td><td>Demonstrates engineering rather than improvisation</td></tr>
            <tr><td><strong>Connectivity plan</strong></td><td>Tested upload, primary and backup path, monitoring</td><td>Proves the invisible part of the job was handled</td></tr>
            <tr><td><strong>Result</strong></td><td>Peak concurrent viewers, total views, watch time, questions</td><td>Turns a stream into a measurable communications outcome</td></tr>
            <tr><td><strong>Deliverables</strong></td><td>Master, highlight film, clips, photos, report and dates met</td><td>Shows we finish, not just show up</td></tr>
            <tr><td><strong>One thing that went wrong</strong></td><td>What happened and how it was contained</td><td>Nothing builds trust with a procurement team faster</td></tr>
          </tbody>
        </table></div>
      </div></section>

      <section className={styles.deep + ' ' + styles.particlesSection}>
        <div className={styles.particleLayer} aria-hidden="true">
          {particles.map((particle) => (
            <span
              key={particle.id}
              className={styles.particle}
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                opacity: particle.opacity,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
        <div className={styles.wrap}>
          <div className={`${styles.secHead} ${styles.center}`}><p className={styles.eyebrow}>Client words</p><h2>Testimonials</h2><div className={styles.rule}></div></div>

          <div
            className={styles.testimonialViewport}
            onMouseEnter={pause}
            onMouseLeave={resume}
          >
            <div className={`${styles.fadeOverlay} ${styles.fadeLeft}`} />

            <div className={styles.testimonialTrack} ref={trackRef}>
              {[...testimonials, ...testimonials].map((t, i) => (
                <div className={styles.testimonialCard} key={i}>
                  <div className={styles.testimonialHead}>
                    <div>
                      <p className={styles.testimonialName}>{t.name}</p>
                      <p className={styles.testimonialRole}>{t.role}</p>
                    </div>
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className={styles.testimonialAvatar}
                    />
                  </div>
                  <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
                </div>
              ))}
            </div>

            <div className={`${styles.fadeOverlay} ${styles.fadeRight}`} />
          </div>

          {/* <div className={styles.btnRow} style={{ justifyContent: 'center' }}><a className={styles.btn} href="contact.html">Request references</a></div> */}
        </div>
      </section>
    </>
  );
}

export default Work;