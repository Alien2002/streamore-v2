import Hero from '@/components/Hero';
import styles from './About.module.css';

const particles = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: `${(index * 11.5) % 100}%`,
  top: `${(index * 17.2 + 8) % 100}%`,
  size: 2 + (index % 5),
  duration: 8 + (index % 6),
  delay: (index % 7) * 0.9,
  opacity: 0.18 + (index % 4) * 0.12,
}));

function About() {
  return (
    <>
      <Hero
        title1="We produce broadcasts,"
        title2="not recordings."
        subtitle="Streamore is a Tanzanian media and production company specialising in professional multi-camera livestreaming and live event production, based in Dar es Salaam and working nationwide."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <section><div className={styles.wrap}>
        <div className={styles.split}>
          <div>
            <p className={styles.eyebrow}>Who we are</p>
            <h2>About Streamore</h2>
            <div className={styles.rule}></div>
            <p className={styles.lead}>We help churches, businesses, organisations, brands and event producers connect physical events with audiences beyond the room. From planning and camera production to live directing, audio, graphics, streaming and recording, our team manages the technical and creative process behind the broadcast.</p>
            <p className={styles.lead}>We believe a livestream should be more than a camera pointed at a stage. It should be a well-produced experience that keeps audiences connected, wherever they are.</p>
            <p className={styles.quote}>We don't just stream the event. We produce the experience.</p>
          </div>
          <div className={styles.card}>
            <p className={styles.num}>AT A GLANCE</p>
            <ul className={styles.plain}>
              <li>Base <span>Dar es Salaam, Tanzania</span></li>
              <li>Coverage <span>Nationwide &amp; East Africa</span></li>
              <li>Specialisation <span>Multi-camera livestreaming</span></li>
              <li>Production scale <span>1–8 cameras</span></li>
              <li>Delivery <span>1080p / 4K capture</span></li>
              <li>Contracts <span>Per event, monthly, white-label</span></li>
              <li>Reporting <span>Within 72 hours</span></li>
            </ul>
          </div>
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
        <div className={styles.secHead}><p className={styles.eyebrow}>Production philosophy</p><h2>Six beliefs that shape every show</h2><div className={styles.rule}></div></div>
        <div className={styles.grid + " "+ styles.g3}>
          <div className={styles.card}><h3>Reliability</h3><p>A livestream should not depend on luck. It should depend on testing, duplication and procedure.</p></div>
          <div className={styles.card}><h3>Quality</h3><p>Professional equipment matters. Production knowledge matters more.</p></div>
          <div className={styles.card}><h3>Preparation</h3><p>The best livestream problems are the ones prevented before going live.</p></div>
          <div className={styles.card}><h3>Storytelling</h3><p>The director must always know what the audience should be seeing, and why.</p></div>
          <div className={styles.card}><h3>Communication</h3><p>Client, director and crew work as one team, on comms, against one run sheet.</p></div>
          <div className={styles.card}><h3>Backup</h3><p>Every critical system — internet, audio, power, recording — has a documented fallback.</p></div>
        </div>
      </div></section>

      <section className={styles.alt}><div className={styles.wrap}>
        <div className={styles.grid + " "+ styles.g3}>
          <div className={styles.card}><div className={styles.icon}>V</div><h3>Vision</h3><p>To become one of East Africa's leading live production and digital broadcasting companies — Tanzania first, then the region.</p></div>
          <div className={styles.card}><div className={styles.icon}>M</div><h3>Mission</h3><p>To help organisations communicate with larger audiences through reliable, creative and professional live production and digital media.</p></div>
          <div className={styles.card}><div className={styles.icon}>P</div><h3>Purpose</h3><p>To connect events with audiences beyond the room — and to keep the event working long after the room empties.</p></div>
        </div>
      </div></section>

      <section className={styles.deep}><div className={styles.wrap}>
        <div className={styles.split}>
          <div>
            <p className={styles.eyebrow}>Streamore Academy</p>
            <h2>We train the people who run production rooms.</h2>
            <p className={styles.lead}>Churches, schools, media teams and in-house communications units often own good equipment and still get poor results. Academy sessions cover camera work, audio, switching, live directing, network setup and stream management — practical, hands-on and in Swahili or English.</p>
            <ul className={styles.check} style={{ marginTop: '16px' }}>
              <li>Volunteer and in-house team training</li>
              <li>Church production system design and handover</li>
              <li>Workshops for communications and media teams</li>
              <li>Ongoing technical support retainers</li>
            </ul>
            <div className={styles.btnRow}><a className={styles.btn + " " + styles.btnGold} href="contact.html">Enquire about training</a></div>
          </div>
          <div className={styles.card}>
            <p className={styles.num}>PARTNERSHIPS</p>
            <h3 style={{ color: '#fff' }}>We work inside your production</h3>
            <p>Streamore partners with venues, hotels, event agencies, AV and LED suppliers, PA companies, interpretation providers and connectivity providers. You keep the stage and the client relationship; we deliver the broadcast layer — under your brand where required.</p>
            <div className={styles.btnRow}><a className={styles.btn + " " + styles.btnGhost} href="contact.html">Become a partner</a></div>
          </div>
        </div>
      </div></section>
    </>
  );
}

export default About;
