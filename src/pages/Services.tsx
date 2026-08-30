import Container from '@/components/Container';
import Section from '@/components/Section';
import Hero from '@/components/Hero';
import styles from './services.module.css';

function Services() {
  return (
    <>
      <Hero
        title1="One specialisation."
        title2="A full production chain."
        subtitle="Multi-camera livestreaming is the centre of everything we do. Every other service exists to strengthen the broadcast or extend its value once the room empties."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section><div className={styles.wrap}>
        <div className={styles.grid + " " + styles.g2}>
          <div className={styles.card}>
            <p className={styles.num}>01</p>
            <h3>Multi-camera livestreaming</h3>
            <p style={{ marginBottom: "16px" }}>Our specialisation. Two to eight cameras, live directing, professional audio, graphics and simultaneous delivery to public or private destinations.</p>
            <ul className={styles.check}><li>Churches, conferences and corporate events</li><li>Concerts, ceremonies and weddings</li><li>Government and institutional events</li><li>Multi-platform and private distribution</li></ul>
          </div><div className={styles.card}>
            <p className={styles.num}>02</p>
            <h3>Live event production</h3>
            <p style={{ marginBottom: "16px" }}>The technical production behind the broadcast — and behind the screens in the room.</p>
            <ul className={styles.check}><li>Camera operation and vision mixing</li><li>Audio integration with the venue console</li><li>Live graphics, lower thirds and playback</li><li>Screen feeds and programme recording</li></ul>
          </div><div className={styles.card}>
            <p className={styles.num}>03</p>
            <h3>Hybrid event production</h3>
            <p style={{ marginBottom: "16px" }}>One show, two audiences. The people in the room and the people online both get a complete experience.</p>
            <ul className={styles.check}><li>Remote speakers and panellists</li><li>Moderated Q&amp;A, polls and chat management</li><li>Presentation and screen management</li><li>Recording and replay for both audiences</li></ul>
          </div><div className={styles.card}>
            <p className={styles.num}>04</p>
            <h3>Corporate broadcasting</h3>
            <p style={{ marginBottom: "16px" }}>For companies, banks, NGOs, associations and institutions where the message carries weight.</p>
            <ul className={styles.check}><li>AGMs, board meetings and town halls</li><li>Product launches and press conferences</li><li>Training and internal communications</li><li>Secure, private and access-controlled delivery</li></ul>
          </div><div className={styles.card}>
            <p className={styles.num}>05</p>
            <h3>Church production</h3>
            <p style={{ marginBottom: "16px" }}>Weekly production, not one-off streaming — delivered on contract with a consistent look and crew.</p>
            <ul className={styles.check}><li>Sunday services and worship nights</li><li>Conferences, crusades and celebrations</li><li>Weddings, funerals and special services</li><li>Volunteer team training and system design</li></ul>
          </div><div className={styles.card}>
            <p className={styles.num}>06</p>
            <h3>Event broadcasting</h3>
            <p style={{ marginBottom: "16px" }}>Larger events with multiple rooms, stages, feeds and stakeholders.</p>
            <ul className={styles.check}><li>Multi-camera crew with a show caller</li><li>Venue and stage integration</li><li>Redundant power and connectivity</li><li>Technical coordination with your producers</li></ul>
          </div><div className={styles.card}>
            <p className={styles.num}>07</p>
            <h3>Video production</h3>
            <p style={{ marginBottom: "16px" }}>Supporting service. Corporate and event films that share the same look as your broadcast.</p>
            <ul className={styles.check}><li>Corporate and brand films</li><li>Event highlight and recap videos</li><li>Interviews and documentaries</li><li>Social media cutdowns and commercials</li></ul>
          </div><div className={styles.card}>
            <p className={styles.num}>08</p>
            <h3>Photography</h3>
            <p style={{ marginBottom: "16px" }}>Supporting service. Stills captured alongside the broadcast, delivered to the same deadline.</p>
            <ul className={styles.check}><li>Corporate and conference photography</li><li>Event and stage coverage</li><li>Portraits and speaker headshots</li><li>Product and brand photography</li></ul>
          </div><div className={styles.card}>
            <p className={styles.num}>09</p>
            <h3>Podcast production</h3>
            <p style={{ marginBottom: "16px" }}>Studio and on-location podcast production, built as a multi-camera show rather than a microphone in a room.</p>
            <ul className={styles.check}><li>Multi-camera studio recording</li><li>Broadcast-grade audio capture</li><li>Editing, reels and episode packaging</li><li>Publishing and distribution support</li></ul>
          </div><div className={styles.card}>
            <p className={styles.num}>10</p>
            <h3>Content production</h3>
            <p style={{ marginBottom: "16px" }}>The reason a Streamore production keeps paying after the event.</p>
            <ul className={styles.check}><li>Master recording and clean replay</li><li>Highlight film and speaker cuts</li><li>5–20 vertical clips for social</li><li>Photographs, thumbnails and a performance report</li></ul>
          </div>
        </div>
      </div></section>

      <section className={styles.deep}><div className={styles.wrap}>
        <div className={styles.secHead + " " + styles.center}><p className={styles.eyebrow}>Content multiplication</p><h2>One event. Twenty assets.</h2><div className={styles.rule}></div>
          <p className={styles.lead}>Most suppliers hand over a single long recording. We plan the follow-up content before the event starts, so the material exists when your communications team needs it.</p></div>
        <div className={styles.grid + " " + styles.g4}>
          <div className={styles.card}><div className={styles.icon}>1</div><h3>Live programme</h3><p>The directed broadcast, delivered to every agreed destination.</p></div>
          <div className={styles.card}><div className={styles.icon}>2</div><h3>Master recording</h3><p>A clean, full-length local master you keep and archive.</p></div>
          <div className={styles.card}><div className={styles.icon}>3</div><h3>Highlight film</h3><p>A 2–5 minute hero edit for your website and channels.</p></div>
          <div className={styles.card}><div className={styles.icon}>4</div><h3>Clips &amp; stills</h3><p>Vertical clips, speaker cuts, quote cards and photographs.</p></div>
        </div>
      </div></section>

      <section><div className={styles.wrap}><div className={styles.callout}>
        <h2>Not sure which service you need?</h2>
        <p>Send us the event. We'll tell you the smallest production that will do the job properly — and say so if you don't need the bigger package.</p>
        <div className={styles["btn-row"]}><a className={styles.btn + " " + styles["btn-dark"]} href="contact.html">Talk to a producer</a></div>
      </div></div></section>
    </>
  );
}

export default Services;
