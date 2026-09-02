import Hero from '@/components/Hero';
import styles from './Reliability.module.css';

const particles = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: `${(index * 11.5) % 100}%`,
  top: `${(index * 17.2 + 8) % 100}%`,
  size: 2 + (index % 5),
  duration: 8 + (index % 6),
  delay: (index % 7) * 0.9,
  opacity: 0.18 + (index % 4) * 0.12,
}));

function Reliability() {
  return (
    <>
      <Hero
        title1="How We Protect"
        title2="Your Broadcast."
        subtitle="Every supplier says they are reliable. This page is what reliability actually looks like when it is written down — the tests, the duplicates, the procedures and the commitments."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Reliability' }]}
      />

      <section><div className={styles.wrap}>
        <div className={styles.secHead}><p className={styles.eyebrow}>Step one</p><h2>Site certification before we quote</h2><div className={styles.rule}></div>
          <p className={styles.lead}>A stream cannot be more reliable than the venue it leaves from. Before a major broadcast is confirmed, we survey the room and issue a written certification.</p></div>
        <div className={styles.grid + ' ' + styles.g3}>
          <div className={styles.card}><div className={styles.icon}>01</div><h3>Upload test</h3><p>Sustained upload measured on the primary path, with a required pass threshold of at least double our encode bitrate.</p></div>
          <div className={styles.card}><div className={styles.icon}>02</div><h3>Second path test</h3><p>An independent connection on a different carrier, tested in the same room at the same time of day as the event.</p></div>
          <div className={styles.card}><div className={styles.icon}>03</div><h3>Power &amp; audio</h3><p>Circuit capacity, generator arrangements, console access and the availability of an isolated audio feed.</p></div>
          <div className={styles.card}><div className={styles.icon}>04</div><h3>Positions &amp; routes</h3><p>Camera positions, sightlines, cable runs, ramp requirements and safe operating space.</p></div>
          <div className={styles.card}><div className={styles.icon}>05</div><h3>Written result</h3><p>A pass, a conditional pass with required fixes, or a fail with recommended alternatives — issued to you in writing.</p></div>
          <div className={styles.card}><div className={styles.icon}>06</div><h3>Yours to keep</h3><p>The certification report is yours whether or not you book us. It is useful to any supplier you engage.</p></div>
        </div>
      </div></section>

      <section className={styles.alt}><div className={styles.wrap}>
        <div className={styles.secHead}><p className={styles.eyebrow}>Step two</p><h2>Redundancy by design</h2><div className={styles.rule}></div></div>
        <div className={styles.tableWrap}><table>
          <thead><tr><th>Failure</th><th>Prevention</th><th>Recovery on the day</th></tr></thead>
          <tbody>
            <tr><td><strong>Primary internet fails</strong></td><td>Tested second path on a different carrier, live bitrate monitoring</td><td>Switch paths and keep the programme running; the room never stops</td></tr>
            <tr><td><strong>Venue audio fails or is noisy</strong></td><td>Sound check, isolated feed, spare microphones, ambient backup capture</td><td>Cut to the backup microphone mix or independent recorder</td></tr>
            <tr><td><strong>Power interruption</strong></td><td>UPS on encoder, switcher, router and recorder; generator confirmed in advance</td><td>Master recording is preserved; restart on a defined holding scene</td></tr>
            <tr><td><strong>Camera or encoder failure</strong></td><td>Spare body, spare encoder, spare cables in the flight case</td><td>Reconfigure the shot pattern and swap the unit mid-show</td></tr>
            <tr><td><strong>Platform or account problem</strong></td><td>Client-owned access, preflight test, secondary destination prepared</td><td>Move to the backup destination and republish the link</td></tr>
            <tr><td><strong>Rights or music issue</strong></td><td>Rights log, consent process, music policy agreed before the event</td><td>Mute, cut, or withhold the clip as the contract requires</td></tr>
            <tr><td><strong>Weather, crowd or cable hazard</strong></td><td>Risk assessment, cable ramps, weather covers, safe camera positions</td><td>Stop unsafe operation and escalate to the event incident lead</td></tr>
          </tbody>
        </table></div>
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
        <div className={styles.split}>
          <div>
            <p className={styles.eyebrow}>Step three</p>
            <h2>Our service commitments</h2>
            <div className={styles.rule}></div>
            <p className={styles.lead}>These commitments appear in the contract, not only on the website. They are what you can hold us to.</p>
            <ul className={styles.check} style={{ marginTop: '18px' }}>
              <li>A named broadcast lead, identified before the event and present on the day</li>
              <li>Preflight checklist completed and signed before the scheduled start</li>
              <li>Primary and backup connectivity in place for every Professional package and above</li>
              <li>A local master recording of the full programme, independent of the stream</li>
              <li>Deliverables handed over on the agreed date, with the report inside 72 hours</li>
              <li>You own the destination channel, the recording and the audience data</li>
              <li>A written incident report if anything material goes wrong, without being asked</li>
            </ul>
          </div>
          <div className={styles.card}>
            <p className={styles.num}>CREW ROLES</p>
            <h3 style={{ color: '#fff' }}>Who is in the room</h3>
            <ul className={styles.plain} style={{ marginTop: '12px' }}>
              <li>Broadcast director / show caller <span>Calls the show</span></li>
              <li>Camera operators <span>1–8 depending on scale</span></li>
              <li>Audio engineer <span>Professional &amp; above</span></li>
              <li>Graphics operator <span>Professional &amp; above</span></li>
              <li>Streaming engineer <span>Broadcast &amp; above</span></li>
              <li>Stage manager / runner <span>Broadcast &amp; above</span></li>
            </ul>
            <p className={styles.note} style={{ marginTop: '16px', color: '#93A2BE' }}>Every role is named in the quotation. You know who is coming and what each person is responsible for.</p>
          </div>
        </div>
      </div></section>

      <section><div className={styles.wrap}>
        <div className={styles.secHead}><p className={styles.eyebrow}>Step four</p><h2>Rights, consent and compliance</h2><div className={styles.rule}></div>
          <p className={styles.lead}>For corporate, donor and government work, the paperwork matters as much as the picture. Our standard contract addresses it explicitly rather than leaving it unsaid.</p></div>
        <div className={styles.grid} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          <div className={styles.card}><h3>Ownership</h3><p>The client owns the event recording and the streaming destination. Streamore operates with delegated access and hands it back.</p></div>
          <div className={styles.card}><h3>Consent</h3><p>Speaker and attendee image permissions, signage requirements and an agreed process for withdrawn permission.</p></div>
          <div className={styles.card}><h3>Music &amp; third-party content</h3><p>A documented music policy and clearance responsibility, so a replay is not taken down after the event.</p></div>
          <div className={styles.card}><h3>Confidential sessions</h3><p>Private or unlisted destinations, access control, password handling, crew confidentiality and a deletion schedule.</p></div>
          <div className={styles.card}><h3>Regulatory position</h3><p>We maintain a current written position on Tanzanian online content regulation for our role as a production contractor.</p></div>
          <div className={styles.card}><h3>Portfolio use</h3><p>We use client material in our portfolio only with written permission, and never for confidential sessions.</p></div>
        </div>
      </div></section>

      <section className={styles.alt}><div className={styles.wrap}><div className={styles.callout}>
        <h2>Ask any supplier for this page.</h2>
        <p>If a production company cannot show you its connectivity test policy, redundancy plan, crew roles and incident procedure in writing, you are buying a promise instead of a service. Compare ours to anyone's.</p>
        <div className={styles.btnRow}><a className={styles.btn + " " + styles.btnDark} href="contact.html">Request the full SLA</a></div>
      </div></div></section>
    </>
  );
}

export default Reliability;
