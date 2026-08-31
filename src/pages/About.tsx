import Hero from '@/components/Hero';
import styles from './About.module.css';

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

      <section className={styles.alt}><div className={styles.wrap}>
        <div className={styles.grid + " "+ styles.g3}>
          <div className={styles.card}><div className={styles.icon}>V</div><h3>Vision</h3><p>To become one of East Africa's leading live production and digital broadcasting companies — Tanzania first, then the region.</p></div>
          <div className={styles.card}><div className={styles.icon}>M</div><h3>Mission</h3><p>To help organisations communicate with larger audiences through reliable, creative and professional live production and digital media.</p></div>
          <div className={styles.card}><div className={styles.icon}>P</div><h3>Purpose</h3><p>To connect events with audiences beyond the room — and to keep the event working long after the room empties.</p></div>
        </div>
      </div></section>

      <section className={styles.dark}><div className={styles.wrap}>
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

      <section><div className={styles.wrap}>
        <div className={styles.split}>
          <div>
            <p className={styles.eyebrow}>Capability</p>
            <h2>Production capability</h2>
            <div className={styles.rule}></div>
            <p className={styles.lead}>Clients care less about model numbers than about whether we can deliver the event properly. For technical teams who do want the detail, our kit supports professional multi-camera production end to end.</p>
            <ul className={styles.check}>
              <li><strong>Cameras:</strong> Blackmagic Pocket Cinema 4K and 6K Pro, Sony Alpha and Canon bodies</li>
              <li><strong>Lenses:</strong> 18–35mm, 24–105mm, 70–200mm f/2.8, 50mm and 85mm primes</li>
              <li><strong>Production:</strong> ATEM switching systems, Feelworld switcher, OBS, wireless video, dedicated recorders</li>
              <li><strong>Audio:</strong> RØDECaster Pro II, Shure and DJI microphones, wireless systems and interfaces</li>
              <li><strong>Lighting:</strong> Godox LED panels, softboxes, RGB fixtures and strobes</li>
              <li><strong>Connectivity:</strong> multi-carrier mobile uplinks, routers, monitoring and UPS protection</li>
            </ul>
          </div>
          <div id="procurement">
            <p className={styles.eyebrow}>For procurement teams</p>
            <h2>Procurement pack</h2>
            <div className={styles.rule}></div>
            <p className={styles.lead}>Corporate, donor and government buyers need documents, not just a showreel. Ours are ready on request, as a single pack.</p>
            <ul className={styles.check}>
              <li>Company registration and tax identification</li>
              <li>Company profile and capability statement</li>
              <li>Equipment schedule and crew CVs</li>
              <li>Named client references and contactable referees</li>
              <li>Sample service level agreement and standard contract</li>
              <li>Insurance position and health &amp; safety statement</li>
              <li>Rights, consent and data-handling process</li>
              <li>Standard quotation template and banking details</li>
            </ul>
            <div className={styles.btnRow}><a className={styles.btn + " " + styles.btnDark} href="contact.html">Request the pack</a></div>
          </div>
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
