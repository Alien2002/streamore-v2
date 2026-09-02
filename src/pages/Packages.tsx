import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import styles from './Packages.module.css';
import { useScrollReveal } from '@/hooks/useInView';

function Packages() {
  const [revealed, setRevealed] = useState(false);
  const { ref: promiseRef, inView: promiseInView } = useScrollReveal<HTMLDivElement>()
  const { ref: tiersRef, inView: tiersInView } = useScrollReveal<HTMLDivElement>()

  useEffect(() => {
    // Wait a frame so the browser paints the hidden state first,
    // then flip to revealed — this is what triggers the CSS transition.
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setRevealed(true));
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const revealedClass = revealed ? styles.revealed : '';

  return (
    <>
      <Hero
        title1="Published packages."
        title2="No hidden scope."
        bgImage="packages.jpg"
        subtitle="Indicative rates for a Dar es Salaam event, one event day, normal venue access. Every quotation is confirmed after a site survey — but you should never have to guess the order of magnitude before you call."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Packages' }]}
      />

      <section><div className={styles.wrap}>
        <div ref={tiersRef} className={`${styles.tiers} ${tiersInView ? revealedClass : ''}`}>
          <div className={`${styles.tier} ${styles.revealTier}`}>
            <h3>Basic</h3>
            <p className={styles.price}>TZS 1.5M – 3M<small>per event</small></p>
            <p className={styles.note}>Single-room streams, small ceremonies, weekly services, training sessions.</p>
            <ul className={`${styles.check} ${styles.revealList}`}>
              <li>1–2 cameras, basic switching</li>
              <li>Clean audio feed from the venue console</li>
              <li>2–3 crew, single 1080p destination</li>
              <li>Simple lower thirds and titles</li>
              <li>Local master recording</li>
              <li>Venue upload test and preflight</li>
            </ul>
            <a className={styles.btn + " " + styles.btnDark} href="contact.html">Request this package</a>
          </div>

          <div className={`${styles.tier} ${styles.feature} ${styles.revealTier}`}>
            <span className={styles.badge}>Most booked</span>
            <h3>Professional</h3>
            <p className={styles.price}>TZS 4M – 8M<small>per event</small></p>
            <p className={styles.note}>Corporate conferences, AGMs, launches, hybrid meetings, church conferences.</p>
            <ul className={`${styles.check} ${styles.revealList}`}>
              <li>2–3 cameras with a broadcast director</li>
              <li>Dedicated audio mix and monitoring</li>
              <li>Full branded graphics package</li>
              <li>Rehearsal day included</li>
              <li>Up to 2 streaming destinations</li>
              <li>Master recording + highlight film</li>
              <li>72-hour performance report</li>
            </ul>
            <a className={styles.btn + " " + styles.btnGold} href="contact.html">Request this package</a>
          </div>

          <div className={`${styles.tier} ${styles.revealTier}`}>
            <h3>Broadcast</h3>
            <p className={styles.price}>TZS 8M – 15M<small>per event</small></p>
            <p className={styles.note}>Multi-day conferences, hybrid summits, high-stakes public and donor events.</p>
            <ul className={`${styles.check} ${styles.revealList}`}>
              <li>4–5 cameras, show caller and comms</li>
              <li>Remote speakers and moderated Q&amp;A</li>
              <li>Captions or interpretation feed</li>
              <li>Redundant internet paths, monitored</li>
              <li>Local master + backup recorder</li>
              <li>Clip package and highlight film</li>
              <li>Full analytics and delivery report</li>
            </ul>
            <a className={styles.btn + " " + styles.btnDark} href="contact.html">Request this package</a>
          </div>

          <div className={`${styles.tier} ${styles.revealTier}`}>
            <h3>Custom</h3>
            <p className={styles.price}>From TZS 15M<small>per event / per project</small></p>
            <p className={styles.note}>Major outdoor events, multi-room venues, national broadcasts, series production.</p>
            <ul className={`${styles.check} ${styles.revealList}`}>
              <li>4–8 cameras, extended crew</li>
              <li>Multi-room and overflow feeds</li>
              <li>Backup power and dual carriers</li>
              <li>Stage, LED and PA coordination</li>
              <li>Written incident command plan</li>
              <li>Bespoke content and rights package</li>
            </ul>
            <a className={styles.btn + " " + styles.btnDark} href="contact.html">Start a scoping call</a>
          </div>
        </div>
        <p className={styles.note} style={{ marginTop: '22px' }}>Rates are indicative and quoted in Tanzanian Shillings, exclusive of applicable taxes. Final pricing depends on crew size, venue conditions, connectivity, travel and deliverables.</p>
      </div></section>

      <section className={styles.alt}><div className={styles.wrap}>
        <div className={styles.secHead}><p className={styles.eyebrow}>Recurring production</p><h2>Retainers &amp; series contracts</h2><div className={styles.rule}></div>
          <p className={styles.lead}>If you broadcast every week or run an event series, a contract is cheaper, faster and more consistent than repeated one-off bookings.</p></div>
        <div className={`${styles.tableWrap} ${revealedClass}`}><table>
          <thead><tr><th>Contract</th><th>Indicative rate</th><th>What it covers</th></tr></thead>
          <tbody>
            <tr className={styles.revealRow}><td><strong>Church monthly</strong></td><td>From TZS 1.2M / month</td><td>Four weekly services, consistent crew and graphics, monthly clip package, channel management</td></tr>
            <tr className={styles.revealRow}><td><strong>Corporate quarterly</strong></td><td>From TZS 3.5M / quarter</td><td>One town hall or webinar per month, standing production plan, reporting after each broadcast</td></tr>
            <tr className={styles.revealRow}><td><strong>Event series</strong></td><td>Negotiated per season</td><td>Multi-episode or multi-city productions with locked crew, look and delivery calendar</td></tr>
            <tr className={styles.revealRow}><td><strong>Partner / white-label</strong></td><td>Sub-contract day rates</td><td>Broadcast crew supplied under your brand for agencies, venues and AV suppliers</td></tr>
          </tbody>
        </table></div>
      </div></section>

      <section><div className={styles.wrap}>
        <div
          ref={promiseRef}
          className={`${styles.split} ${promiseInView ? revealedClass : ''}`}>
          <div>
            <p className={styles.eyebrow}>Add-ons</p>
            <h2>Priced as line items</h2>
            <div className={styles.rule}></div>
            <ul className={`${styles.plain} ${styles.revealList}`}>
              <li>Additional camera + operator <span>Per day</span></li>
              <li>Additional room or overflow feed <span>Per room</span></li>
              <li>Additional streaming destination <span>Per destination</span></li>
              <li>Captions, subtitles or transcript <span>Per hour of content</span></li>
              <li>Interpretation feed integration <span>Per language</span></li>
              <li>Dedicated event internet line <span>At cost + margin</span></li>
              <li>Extra clips beyond the package <span>Per clip</span></li>
              <li>Photography add-on <span>Per day</span></li>
              <li>Same-day highlight edit <span>Per event</span></li>
              <li>Volunteer or in-house team training <span>Per session</span></li>
            </ul>
          </div>
          <div>
            <p className={styles.eyebrow}>Commercial terms</p>
            <h2>How we contract</h2>
            <div className={styles.rule}></div>
            <ul className={`${styles.check} ${styles.revealList}`}>
              <li><strong>Booking:</strong> a deposit confirms the date; the balance is due before the event or on documented corporate credit terms.</li>
              <li><strong>Scope:</strong> every quotation lists crew, cameras, destinations, deliverables and the agreed time window.</li>
              <li><strong>Overtime:</strong> charged hourly beyond the agreed window, with a stated maximum.</li>
              <li><strong>Changes:</strong> handled by written change order, so nobody argues on show day.</li>
              <li><strong>Cancellation:</strong> a published sliding scale by notice period.</li>
              <li><strong>Rights:</strong> you own the recording and the channel; our portfolio use is by written permission only.</li>
              <li><strong>Travel:</strong> transport, accommodation and per diem quoted at cost for events outside Dar es Salaam.</li>
            </ul>
            <div className={styles.btnRow}><a className={styles.btn + " " + styles.btnDark} href="about.html#procurement">See the procurement pack</a></div>
          </div>
        </div>
      </div></section>

      {/* <section className={styles.deep}><div className={styles.wrap}><div className={styles.secHead + " " + styles.center}><p className={styles.eyebrow}>Choosing a package</p><h2>Pick by risk, not by camera count</h2><div className={styles.rule}></div></div>
        <div className={`${styles.tableWrap} ${revealedClass}`} style={{ background: 'transparent' }}><table>
          <thead><tr><th>If this is true</th><th>Choose</th><th>Because</th></tr></thead>
          <tbody>
            <tr className={styles.revealRow}><td>One room, one speaker, forgiving audience</td><td><strong>Basic</strong></td><td>A clean single-angle stream with reliable sound is enough</td></tr>
            <tr className={styles.revealRow}><td>External stakeholders, slides, a brand to protect</td><td><strong>Professional</strong></td><td>Direction, graphics and a rehearsal remove the visible mistakes</td></tr>
            <tr className={styles.revealRow}><td>Remote participants, two languages, multi-day agenda</td><td><strong>Broadcast</strong></td><td>Hybrid interaction and redundancy become the core requirement</td></tr>
            <tr className={styles.revealRow}><td>Outdoor, multi-room, national profile, live audience at scale</td><td><strong>Custom</strong></td><td>Power, connectivity and command structure must be engineered</td></tr>
          </tbody>
        </table></div>
      </div></section> */}
    </>
  );
}

export default Packages;