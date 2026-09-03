import Hero from '@/components/Hero';
import styles from './Livestreaming.module.css';
import { useScrollReveal } from '@/hooks/useInView';

const particles = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: `${(index * 11.5) % 100}%`,
  top: `${(index * 17.2 + 8) % 100}%`,
  size: 2 + (index % 5),
  duration: 8 + (index % 6),
  delay: (index % 7) * 0.9,
  opacity: 0.18 + (index % 4) * 0.12,
}));

function Livestreaming() {
  const { ref: gridRef, inView: gridInView } = useScrollReveal<HTMLDivElement>()
  const { ref: startGridRef, inView: startGridInView } = useScrollReveal<HTMLDivElement>()
  const { ref: splitRef, inView: splitInView } = useScrollReveal<HTMLDivElement>()
  return (
    <>
      <Hero
        title1="Professional Livestreaming."
        title2="Built for real events."
        bgImage="live_stream.JPG"
        subtitle="Multi-camera production, professional audio, live directing, branded graphics, multi-platform broadcasting, redundant connectivity and a recorded master — the full chain, run by one accountable team."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Livestreaming' }]}
      />

      <section><div className={styles.wrap}>
        <div ref={gridRef} className={`${styles.grid} ${styles.g3} ${gridInView ? styles.revealed : ''}`}>
          <div className={styles.card}><div className={styles.icon}>A</div><h3>Multi-camera production</h3><p>Wide, close and detail angles so the audience always sees the right thing — presenter, slide, audience reaction or stage.</p></div>
          <div className={styles.card}><div className={styles.icon}>B</div><h3>Professional audio</h3><p>A clean, isolated feed from the venue console or our own microphones, monitored on headphones for the whole broadcast. Audio is where most streams fail.</p></div>
          <div className={styles.card}><div className={styles.icon}>C</div><h3>Live directing</h3><p>A director calls the show against your run sheet, so the stream has pacing and intent rather than a locked-off wide shot.</p></div>
          <div className={styles.card}><div className={styles.icon}>D</div><h3>Graphics &amp; branding</h3><p>Your logo, colours, lower thirds, titles, countdowns, sponsor slots and presentation feeds composited into the programme.</p></div>
          <div className={styles.card}><div className={styles.icon}>E</div><h3>Multi-platform delivery</h3><p>YouTube, Facebook, LinkedIn, X, your own website player, or a private and unlisted destination for confidential sessions.</p></div>
          <div className={styles.card}><div className={styles.icon}>F</div><h3>Backup &amp; recording</h3><p>A second internet path, a spare encoder and a local master recording that survives whatever the network does.</p></div>
        </div>
      </div></section>

      <section className={styles.dark + ' ' + styles.particlesSection}><div className={styles.particleLayer} aria-hidden="true">
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
      </div><div className={styles.wrap}>
        <div className={styles.secHead + ' ' + styles.center}>
          <p className={styles.eyebrow}>Start here</p>
          <h2>What type of event are you streaming?</h2>
          <div className={styles.rule}></div>
        </div>
        <div ref={startGridRef} className={`${styles.grid} ${styles.g4} ${startGridInView ? styles.revealed : ''}`}>
          <div className={styles.card}><h3>Church service</h3><p><a href="/contact" style={{ color: '#FFD34D', fontWeight: 700 }}>Get a quote &rarr;</a></p></div><div className={styles.card}><h3>Conference</h3><p><a href="/contact" style={{ color: '#FFD34D', fontWeight: 700 }}>Get a quote &rarr;</a></p></div><div className={styles.card}><h3>AGM / board meeting</h3><p><a href="/contact" style={{ color: '#FFD34D', fontWeight: 700 }}>Get a quote &rarr;</a></p></div><div className={styles.card}><h3>Product launch</h3><p><a href="/contact" style={{ color: '#FFD34D', fontWeight: 700 }}>Get a quote &rarr;</a></p></div><div className={styles.card}><h3>Wedding</h3><p><a href="/contact" style={{ color: '#FFD34D', fontWeight: 700 }}>Get a quote &rarr;</a></p></div><div className={styles.card}><h3>Concert</h3><p><a href="/contact" style={{ color: '#FFD34D', fontWeight: 700 }}>Get a quote &rarr;</a></p></div><div className={styles.card}><h3>Masterclass / training</h3><p><a href="/contact" style={{ color: '#FFD34D', fontWeight: 700 }}>Get a quote &rarr;</a></p></div><div className={styles.card}><h3>Government event</h3><p><a href="/contact" style={{ color: '#FFD34D', fontWeight: 700 }}>Get a quote &rarr;</a></p></div><div className={styles.card}><h3>NGO forum</h3><p><a href="/contact" style={{ color: '#FFD34D', fontWeight: 700 }}>Get a quote &rarr;</a></p></div><div className={styles.card}><h3>Graduation</h3><p><a href="/contact" style={{ color: '#FFD34D', fontWeight: 700 }}>Get a quote &rarr;</a></p></div><div className={styles.card}><h3>Sports event</h3><p><a href="/contact" style={{ color: '#FFD34D', fontWeight: 700 }}>Get a quote &rarr;</a></p></div><div className={styles.card}><h3>Press conference</h3><p><a href="/contact" style={{ color: '#FFD34D', fontWeight: 700 }}>Get a quote &rarr;</a></p></div>
        </div>
      </div></section>

      <section><div className={styles.wrap}>
        <div ref={splitRef} className={`${styles.split} ${splitInView ? styles.revealed : ''}`}>
          <div>
            <p className={styles.eyebrow}>Included as standard</p>
            <h2>Every livestream, every package</h2>
            <div className={styles.rule}></div>
            <ul className={styles.check}>
              <li>Written production plan and run sheet before the event</li>
              <li>Venue upload test with a documented pass threshold</li>
              <li>Preflight checklist signed off before going live</li>
              <li>Local master recording of the full programme</li>
              <li>Branded graphics built from your own identity</li>
              <li>Client-owned streaming destination and audience data</li>
              <li>Post-event performance report within 72 hours</li>
            </ul>
          </div>
          <div>
            <p className={styles.eyebrow}>Priced separately</p>
            <h2>So nothing is a surprise</h2>
            <div className={styles.rule}></div>
            <ul className={styles.plain}>
              <li>Additional room or second stage <span>Quoted</span></li>
              <li>Captions, subtitles or interpretation <span>Quoted</span></li>
              <li>Dedicated event internet line <span>At cost + margin</span></li>
              <li>Travel, transport and accommodation <span>At cost</span></li>
              <li>Overtime beyond the agreed window <span>Hourly</span></li>
              <li>Extra edits, clips or reversions <span>Per item</span></li>
              <li>LED screens, PA or stage supply <span>Partner-supplied</span></li>
            </ul>
          </div>
        </div>
      </div></section>

      <section className={styles.alt}><div className={styles.wrap}><div className={styles.callout}>
        <h2>Book a venue certification.</h2>
        <p>Before we quote a major broadcast, we test the room: upload capacity on both paths, power, audio access, camera positions and cable routes. You receive the written result whether you book us or not.</p>
        <div className={styles.btnRow}><a className={styles.btn} href="/contact">Book the survey</a></div>
      </div></div></section>
    </>
  );
}

export default Livestreaming;
