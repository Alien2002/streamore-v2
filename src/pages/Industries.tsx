import Hero from '@/components/Hero';
import styles from './Industries.module.css';

function Industries() {
  return (
    <>
      <Hero
        title1="Different rooms."
        title2="Different risks."
        subtitle="A weekly church service and a national conference need the same engineering discipline but a completely different production design. Here is how we approach each."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
      />

      <section><div className={styles.wrap}>
        <div className={styles.grid + " " + styles.g2}>
          <div className={styles.card}>
            <h3>Churches</h3>
            <p className={styles.quote} style={{ fontSize: '1rem', margin: '0 0 14px' }}>Reach your congregation wherever they are.</p>
            <p style={{ marginBottom: '14px' }}>Consistency is everything. A congregation that watches online expects the same service quality every week — same look, same sound, same start time.</p>
            <ul className={styles.check}><li>Weekly multi-camera service production</li><li>Fixed monthly contract, agreed service count</li><li>Consistent graphics, titles and stream branding</li><li>Conferences, crusades and worship nights</li><li>Volunteer team training and in-house system design</li></ul>
            <p style={{ marginTop: '16px', fontWeight: '700', color: '#DE9200' }}>From TZS 1.2M / month</p>
          </div><div className={styles.card}>
            <h3>Corporates &amp; banks</h3>
            <p className={styles.quote} style={{ fontSize: '1rem', margin: '0 0 14px' }}>Broadcast your message professionally.</p>
            <p style={{ marginBottom: '14px' }}>For an AGM, a launch or a town hall, the risk is reputational. Our answer is rehearsal, redundancy and access control — documented before the day.</p>
            <ul className={styles.check}><li>AGMs, board meetings and investor sessions</li><li>Town halls and internal communications</li><li>Product launches and press conferences</li><li>Private, unlisted or password-controlled delivery</li><li>Attendance, watch-time and Q&amp;A reporting</li></ul>
            <p style={{ marginTop: '16px', fontWeight: '700', color: '#DE9200' }}>Professional / Broadcast package</p>
          </div><div className={styles.card}>
            <h3>NGOs &amp; development partners</h3>
            <p className={styles.quote} style={{ fontSize: '1rem', margin: '0 0 14px' }}>Extend the reach of your programmes.</p>
            <p style={{ marginBottom: '14px' }}>Donor-facing events need a formal record and remote participation across time zones, often in two languages.</p>
            <ul className={styles.check}><li>Multi-day forums and sector reviews</li><li>Remote panellists and hybrid participation</li><li>Captions, transcripts and interpretation feeds</li><li>Donor-ready highlight films and reporting</li><li>Field documentation and content capture</li></ul>
            <p style={{ marginTop: '16px', fontWeight: '700', color: '#DE9200' }}>Broadcast / Custom package</p>
          </div><div className={styles.card}>
            <h3>Government &amp; institutions</h3>
            <p className={styles.quote} style={{ fontSize: '1rem', margin: '0 0 14px' }}>Deliver important events to wider audiences.</p>
            <p style={{ marginBottom: '14px' }}>Public events demand protocol awareness, quiet crews, redundancy and a clean archive — plus documented rights and compliance.</p>
            <ul className={styles.check}><li>National and ministerial events</li><li>Conferences, launches and commemorations</li><li>Multi-room and overflow feeds</li><li>Redundant power and connectivity planning</li><li>Documented consent, rights and archive handover</li></ul>
            <p style={{ marginTop: '16px', fontWeight: '700', color: '#DE9200' }}>Custom quotation</p>
          </div><div className={styles.card}>
            <h3>Event organisers &amp; agencies</h3>
            <p className={styles.quote} style={{ fontSize: '1rem', margin: '0 0 14px' }}>Add broadcast without losing your show.</p>
            <p style={{ marginBottom: '14px' }}>You own the stage, the client and the run of show. We are the broadcast layer that plugs into it — white-label if you prefer.</p>
            <ul className={styles.check}><li>White-label broadcast production</li><li>Integration with your stage, PA and LED supplier</li><li>Sub-contract rates and repeat terms</li><li>Named broadcast lead on your production team</li><li>Your branding on the deliverables</li></ul>
            <p style={{ marginTop: '16px', fontWeight: '700', color: '#DE9200' }}>Partner rates available</p>
          </div><div className={styles.card}>
            <h3>Brands &amp; marketing teams</h3>
            <p className={styles.quote} style={{ fontSize: '1rem', margin: '0 0 14px' }}>Turn launches into digital experiences.</p>
            <p style={{ marginBottom: '14px' }}>A launch that only reaches the room is an expensive private party. We plan the stream, the clips and the numbers together.</p>
            <ul className={styles.check}><li>Launch and activation broadcasts</li><li>Sponsor and brand graphics packages</li><li>Vertical clip packages for social</li><li>Moderated public streams</li><li>Campaign performance reporting</li></ul>
            <p style={{ marginTop: '16px', fontWeight: '700', color: '#DE9200' }}>Professional package upward</p>
          </div><div className={styles.card}>
            <h3>Educators &amp; training providers</h3>
            <p className={styles.quote} style={{ fontSize: '1rem', margin: '0 0 14px' }}>Broadcast seminars and masterclasses.</p>
            <p style={{ marginBottom: '14px' }}>Recurring cohorts need a repeatable setup, reliable sound and a searchable archive students can return to.</p>
            <ul className={styles.check}><li>Masterclasses, seminars and workshops</li><li>Multi-session series production</li><li>Studio and classroom setups</li><li>Recording library and archive delivery</li><li>Paywalled or private distribution</li></ul>
            <p style={{ marginTop: '16px', fontWeight: '700', color: '#DE9200' }}>Basic / Professional package</p>
          </div><div className={styles.card}>
            <h3>Media organisations</h3>
            <p className={styles.quote} style={{ fontSize: '1rem', margin: '0 0 14px' }}>Production support for live programming.</p>
            <p style={{ marginBottom: '14px' }}>Extra crew, extra cameras or a remote feed when your own team is stretched or off-base.</p>
            <ul className={styles.check}><li>Multi-camera crew supply</li><li>Remote and contribution feeds</li><li>Studio and location production</li><li>Live graphics and playback operation</li><li>Programme recording and delivery</li></ul>
            <p style={{ marginTop: '16px', fontWeight: '700', color: '#DE9200' }}>Day rates on request</p>
          </div>
        </div>
      </div></section>
      <section className={styles.alt}><div className={styles.wrap}><div className={styles.callout}>
        <h2>Are you an event producer?</h2>
        <p>We offer white-label broadcast production to venues, agencies, hotels, AV suppliers and event producers. You keep the client and the stage — we deliver the stream under your brand, with a named broadcast lead in your crew list.</p>
        <div className={styles.btnRow}><a className={styles.btn + ' ' + styles.btnDark} href="contact.html">Request partner rates</a></div>
      </div></div></section>
    </>
  );
}

export default Industries;
