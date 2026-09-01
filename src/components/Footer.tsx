import styles from './Footer.module.css';


function Footer() {
  return (
    <footer>
      <div className={styles.wrap}>
        <div className={styles.fgrid}>
          <div>
            <a className={styles.brand} href="index.html">
              <svg viewBox="0 0 520 108" height="30" role="img" aria-label="Streamore">
                <defs><linearGradient id="sg30" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#DE9200" /><stop offset="55%" stop-color="#F7B500" /><stop offset="100%" stop-color="#FFD34D" />
                </linearGradient></defs>
                <circle cx="54" cy="54" r="52" fill="url(#sg30)" />
                <path d="M78 30c-6-6-16-9-25-9-14 0-25 7-25 18 0 9 7 14 20 16l14 3c4 1 6 2 6 4 0 3-4 5-11 5-9 0-17-3-23-9l-9 14c8 7 20 11 32 11 15 0 27-7 27-19 0-9-6-14-20-17l-13-3c-4-1-6-2-6-4 0-3 4-4 10-4 8 0 15 2 20 6z" fill="#fff" />
                <text x="112" y="82" font-family="Inter,Segoe UI,Helvetica,Arial,sans-serif" font-size="86" font-weight="800" letter-spacing="-3" fill="#fff">treamore</text>
              </svg></a>
            <p className={styles.tagline}>Beyond the room.</p>
            <p style={{ marginTop: '14px', maxWidth: '34ch' }}>Professional multi-camera livestreaming and live event production. Dar es Salaam, Tanzania — serving events nationwide and across East Africa.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="livestreaming.html">Multi-camera livestreaming</a></li>
              <li><a href="services.html">Live event production</a></li>
              <li><a href="services.html">Hybrid events</a></li>
              <li><a href="services.html">Video &amp; content production</a></li>
              <li><a href="services.html">Podcast production</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="about.html">About Streamore</a></li>
              <li><a href="reliability.html">How we protect your broadcast</a></li>
              <li><a href="packages.html">Packages &amp; rates</a></li>
              <li><a href="work.html">Work &amp; case studies</a></li>
              <li><a href="about.html#procurement">Procurement pack</a></li>
            </ul>
          </div>
          <div>
            <h4>Talk to us</h4>
            <ul>
              <li>Dar es Salaam, Tanzania</li>
              <li><a href="tel:+255000000000">+255 000 000 000</a></li>
              <li><a href="mailto:hello@streamore.co.tz">hello@streamore.co.tz</a></li>
              <li><a href="contact.html">Book a site survey</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.fbar}>
          <span>&copy; 2026 Streamore. All rights reserved.</span>
          <span>Client-owned channels &middot; Written SLA &middot; Rights &amp; consent documented</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
