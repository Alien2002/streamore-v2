import Hero from '@/components/Hero';
import styles from './Work.module.css';

function Work() {
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
        <div className={styles.secHead}><p className={styles.eyebrow}>Case study format</p><h2>What every Streamore case study contains</h2><div className="rule"></div></div>
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

      <section className={styles.deep}><div className={styles.wrap}>
        <div className={styles.secHead} style={{ textAlign: 'center' }}><p className={styles.eyebrow}>Client words</p><h2>Testimonials</h2><div className="rule"></div></div>
        <div className={styles.grid} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          <div className={styles.card}><p className={styles.quote} style={{ fontSize: '1rem', color: '#fff', marginBottom: '16px' }}>Add a client quote here that names the outcome, not the equipment.</p><p className={styles.note} style={{ color: '#93A2BE' }}>Name, role — Organisation</p></div><div className={styles.card}><p className={styles.quote} style={{ fontSize: '1rem', color: '#fff', marginBottom: '16px' }}>Add a client quote here that names the outcome, not the equipment.</p><p className={styles.note} style={{ color: '#93A2BE' }}>Name, role — Organisation</p></div><div className={styles.card}><p className={styles.quote} style={{ fontSize: '1rem', color: '#fff', marginBottom: '16px' }}>Add a client quote here that names the outcome, not the equipment.</p><p className={styles.note} style={{ color: '#93A2BE' }}>Name, role — Organisation</p></div>
        </div>
        <div className={styles.btnRow} style={{ justifyContent: 'center' }}><a className={styles.btn} href="contact.html">Request references</a></div>
      </div></section>
    </>
  );
}

export default Work;
