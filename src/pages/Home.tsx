import Container from '@/components/Container';
import Section from '@/components/Section';
import Button from '@/components/Button';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      {/* Hero */}
      <Section variant="dark" className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            {/* <div className={styles.tag}>
              <span className={styles.dot}></span>
              Dar es Salaam &middot; Nationwide &middot; East Africa
            </div> */}
            <h1>Beyond<br></br> the room.</h1>
            <p className={styles.lead}>
              Professional multi-camera livestreaming and live production for events that deserve a wider audience. We don't just stream your event — we produce the experience.
            </p>
            <div className={styles.buttonGroup}>
              <Button as="a" href="/livestreaming">
                Request a quote
              </Button>
              <Button variant="ghost" as="a" href="/contact">
                See Packages & rates
              </Button>
            </div>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}><b>4K</b><span>Multi-camera production</span></div>
            <div className={styles.stat}><b>2 paths</b><span>Redundant internet, every event</span></div>
            <div className={styles.stat}><b>72 hrs</b><span>Content package after the event</span></div>
            <div className={styles.stat}><b>100%</b><span>Client-owned channels &amp; data</span></div>
          </div>
        </Container>
      </Section>

      {/* What is streamore */}
      <section className={styles.tight}><div className={styles.wrap}>
        <div className={styles.split}>
          <div>
            <p className={styles.eyebrow}>What Streamore is</p>
            <h2>A broadcast company, not a camera rental.</h2>
            <p className={styles.lead}>Streamore is a Tanzanian media and production company specialising in professional multi-camera livestreaming, hybrid event production and digital content production. We help churches, corporates, NGOs, government institutions, brands and event organisers connect a physical event with the audience that could not be in the room.</p>
            <p className={styles.lead}>A basic livestream is a camera, a laptop and hope. A Streamore production is planning, cameras, audio, lighting, directing, switching, graphics, encoding, tested connectivity, distribution, recording and post-production — run by a named crew against a written run sheet.</p>
            <div className="btn-row"><a className="btn btn-dark" href="about.html">About Streamore</a></div>
          </div>
          <div>
            <div className={styles.card}>
              <p className={styles.num}>THE STREAMORE PROMISE</p>
              <p className={styles.quote} >We don't just stream the event. We produce the experience.</p>
              <ul className={styles.check}>
                <li>A named broadcast director on every production</li>
                <li>Venue upload tested and certified before we quote a stream</li>
                <li>Primary and backup internet paths, plus a local master recording</li>
                <li>Your organisation owns the channel, the recording and the data</li>
                <li>Written run sheet, rehearsal, and a documented recovery plan</li>
                <li>A performance report within 72 hours of the final frame</li>
              </ul>
            </div>
          </div>
        </div>
      </div></section>

      {/* core services */}
      <section className={styles.alt}><div className={styles.wrap}>
        <div className={styles.secHead + " " + styles.center}>
          <p className={styles.eyebrow}>Core services</p>
          <h2>Everything behind the broadcast</h2>
          <div className={styles.rule}></div>
          <p className={styles.lead}>Multi-camera livestreaming is our specialisation. Everything else exists to make the broadcast better, or to extend its life after the room empties.</p>
        </div>
        <div className={styles.grid + " " + styles.g3}>
          <div className={styles.card}><div className={styles.icon}>01</div><h3>Multi-camera livestreaming</h3><p>Two to eight cameras, live directing, professional audio, branded graphics and simultaneous delivery to YouTube, Facebook, LinkedIn, your website or a private destination.</p></div>
          <div className={styles.card}><div className={styles.icon}>02</div><h3>Live event production</h3><p>Camera operation, vision mixing, audio integration, lower thirds, presentation and video playback, screen feeds, programme recording and full technical crew.</p></div>
          <div className={styles.card}><div className={styles.icon}>03</div><h3>Hybrid event production</h3><p>Physical audience and online audience in one show — remote speakers, moderated Q&amp;A, polls, presentations and a stream that both rooms can follow.</p></div>
          <div className={styles.card}><div className={styles.icon}>04</div><h3>Corporate broadcasting</h3><p>AGMs, board meetings, town halls, launches, trainings and internal communications delivered securely to the people who need them, on the record.</p></div>
          <div className={styles.card}><div className={styles.icon}>05</div><h3>Church production</h3><p>Weekly services, conferences, crusades and celebrations — produced on a monthly or annual contract with a consistent look, crew and delivery schedule.</p></div>
          <div className={styles.card}><div className={styles.icon}>06</div><h3>Content &amp; podcast production</h3><p>One event becomes a master recording, a highlight film, vertical clips, speaker cuts, photographs and social assets. Plus studio and multi-camera podcast production.</p></div>
        </div>
        <div className={styles.btnRow} style={{ justifyContent: 'center' }}>
          <a className={styles.btn + " " + styles.btnDark} href="services.html">Explore all services</a>
        </div>
      </div></section>

      {/* Why Streamore */}
      <section className={styles.dark}><div className={styles.wrap}>
        <div className={styles.secHead}>
          <p className={styles.eyebrow}>Why Streamore</p>
          <h2>Five things that decide whether a broadcast works</h2>
          <div className={styles.rule}></div>
        </div>
        <div className={styles.grid + " " + styles.g2}>
          <div className={styles.pillar}><div className={styles.icon}>1</div><div><h3>Broadcast thinking</h3><p>We plan shots, sound, story and risk before equipment leaves the store. The production is designed, not improvised.</p></div></div>
          <div className={styles.pillar}><div className={styles.icon}>2</div><div><h3>Multi-camera direction</h3><p>Different cameras do different jobs, and someone is responsible for what the audience sees at every moment.</p></div></div>
          <div className={styles.pillar}><div className={styles.icon}>3</div><div><h3>Engineered reliability</h3><p>Internet, audio, power and equipment are tested, duplicated and documented — with a written recovery procedure.</p></div></div>
          <div className={styles.pillar}><div className={styles.icon}>4</div><div><h3>Published standards</h3><p>Our packages, inclusions, exclusions and protection plan are public. You compare us on evidence, not adjectives.</p></div></div>
          <div className={styles.pillar}><div className={styles.icon}>5</div><div><h3>Life after the livestream</h3><p>Master recording, highlight film, clips and a performance report — the production keeps working after the event ends.</p></div></div>
          <div className={styles.pillar}><div className={styles.icon}>6</div><div><h3>You own everything</h3><p>Your channel, your recording, your audience data. We work with delegated access, never as the gatekeeper.</p></div></div>
        </div>
      </div></section>

      {/* Production Workflow */}
      <section><div className={styles.wrap}>
        <div className={styles.secHead + " " + styles.center}>
          <p className={styles.eyebrow}>Our production workflow</p>
          <h2>Eight steps from brief to report</h2>
          <div className={styles.rule}></div>
          <p className={styles.lead}>The same process runs on a single-room webinar and on a multi-room national conference. Only the scale changes.</p>
        </div>
        <div className={styles.steps}>
          <div className={styles.step}><div><h3>Discover</h3><p>Objective, audience, venue, platforms, languages, remote speakers, production requirements and budget.</p></div></div>
          <div className={styles.step}><div><h3>Plan</h3><p>Camera plan, audio plan, network plan, crew plan, graphics plan and backup plan — issued to you in writing.</p></div></div>
          <div className={styles.step}><div><h3>Certify the venue</h3><p>Site survey, sustained upload test, power and cable routes, camera positions. A stream is only quoted once the venue passes.</p></div></div>
          <div className={styles.step}><div><h3>Build</h3><p>Cameras, lenses, switchers, audio, lighting, encoders, recorders and network are rigged, labelled and powered.</p></div></div>
          <div className={styles.step}><div><h3>Test &amp; rehearse</h3><p>Video, audio, internet, graphics, recording and backup — verified against a preflight checklist and signed off before doors open.</p></div></div>
          <div className={styles.step}><div><h3>Produce</h3><p>Director, camera operators, audio engineer, graphics and streaming engineer work the show on comms against the run sheet.</p></div></div>
          <div className={styles.step}><div><h3>Deliver</h3><p>Master recording, replay, highlight film, clips, photographs and social assets handed over on an agreed deadline.</p></div></div>
          <div className={styles.step}><div><h3>Report</h3><p>Peak concurrent viewers, total views, watch time, average view duration, questions, replay performance — within 72 hours.</p></div></div>
        </div>
      </div></section>

      <section className={styles.alt}><div className={styles.wrap}>
        <div className={styles.secHead + " " + styles.center}>
          <p className={styles.eyebrow}>Who we serve</p>
          <h2>Built for events that carry weight</h2>
          <div className={styles.rule}></div>
        </div>
        <div className={styles.grid + " " + styles.g4}>
          <div className={styles.card}><h3>Churches</h3><p>Reach your congregation wherever they are, every week.</p></div>
          <div className={styles.card}><h3>Corporates</h3><p>Broadcast AGMs, launches and town halls professionally.</p></div>
          <div className={styles.card}><h3>NGOs</h3><p>Extend the reach of programmes, forums and reviews.</p></div>
          <div className={styles.card}><h3>Government</h3><p>Deliver national events to a wider public audience.</p></div>
          <div className={styles.card}><h3>Event organisers</h3><p>Add a broadcast layer without losing control of your show.</p></div>
          <div className={styles.card}><h3>Brands</h3><p>Turn launches and activations into digital experiences.</p></div>
          <div className={styles.card}><h3>Educators</h3><p>Broadcast seminars, masterclasses and training.</p></div>
          <div className={styles.card}><h3>Media</h3><p>Production support for live programming and remote feeds.</p></div>
        </div>
        <div className={styles.btnRow} style={{ justifyContent: "center" }}>
          <a className={styles.btn + " " + styles.btnDark} href="industries.html">See how we work per sector</a>
        </div>
      </div></section>

      <section className={styles.deep}><div className={styles.wrap}>
        <div className={styles.split}>
          <div>
            <p className={styles.eyebrow}>Transparent pricing</p>
            <h2>Three packages. Published inclusions.</h2>
            <p className={styles.lead}>Most productions in this market are quoted behind closed doors. Ours are not. Start from a package, adjust the scope, and see exactly what triggers an extra cost before you commit.</p>
            <ul className={styles.check} style={{ marginTop: "20px" }}>
              <li><strong style={{ color: "#fff" }}>Basic</strong> — single-room stream, from TZS 1.5M</li>
              <li><strong style={{ color: "#fff" }}>Professional</strong> — multi-camera corporate, from TZS 4M</li>
              <li><strong style={{ color: "#fff" }}>Broadcast</strong> — hybrid conference, from TZS 8M</li>
              <li><strong style={{ color: "#fff" }}>Custom</strong> — major and multi-room events, from TZS 15M</li>
            </ul>
            <div className={styles.btnRow}><a className={styles.btn + " " + styles.btnGold} href="packages.html">Open the rate card</a></div>
          </div>
          <div className={styles.card}>
            <p className={styles.num}>RECURRING PRODUCTION</p>
            <h3 style={{ color: "#fff" }}>Monthly contracts for churches &amp; series</h3>
            <p>If you produce every week, buying one livestream at a time is the most expensive way to do it. A monthly contract gives you the same crew, the same look, a fixed rate and a delivery calendar.</p>
            <ul className={styles.check} style={{ marginTop: "18px" }}>
              <li>Fixed monthly fee, agreed number of services</li>
              <li>Consistent graphics package and channel management</li>
              <li>Clips and highlight content included each month</li>
              <li>Volunteer team training available as an add-on</li>
            </ul>
            <div className={styles.btnRow}><a className={styles.btn + " " + styles.btnGhost} href="contact.html">Discuss a contract</a></div>
          </div>
        </div>
      </div></section>

      <section><div className={styles.wrap}>
        <div className={styles.callout}>
          <p className={styles.eyebrow} style={{ color: "rgba(15,27,51,.7)" }}>Ready when you are</p>
          <h2>Tell us about your event.</h2>
          <p>Send the date, venue, expected audience and platforms. You'll get a written production plan and a firm quote — and if the venue needs a connectivity test first, we'll book it.</p>
          <div className={styles.btnRow}><a className={styles.btn + " " + styles.btnDark} href="contact.html">Request a quote</a></div>
        </div>
      </div></section>
    </>
  );
}

export default Home;
