import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Livestreaming', href: '/livestreaming' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Packages', href: '/packages' },
  { label: 'Reliability', href: '/reliability' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80); // threshold in px — tune to taste
    };
    onScroll(); // set initial state on mount
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 960);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.wrap}>
        <nav className={styles.nav}>
          <a className="brand" href="index.html">
            <svg viewBox="0 0 520 108" height="32" role="img" aria-label="Streamore">
              <defs><linearGradient id="sg32" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#DE9200" /><stop offset="55%" stop-color="#F7B500" /><stop offset="100%" stop-color="#FFD34D" />
              </linearGradient></defs>
              <circle cx="54" cy="54" r="52" fill="url(#sg32)" />
              <path d="M78 30c-6-6-16-9-25-9-14 0-25 7-25 18 0 9 7 14 20 16l14 3c4 1 6 2 6 4 0 3-4 5-11 5-9 0-17-3-23-9l-9 14c8 7 20 11 32 11 15 0 27-7 27-19 0-9-6-14-20-17l-13-3c-4-1-6-2-6-4 0-3 4-4 10-4 8 0 15 2 20 6z" fill="#fff" />
              <text x="112" y="82" font-family="Inter,Segoe UI,Helvetica,Arial,sans-serif" font-size="86" font-weight="800" letter-spacing="-3" fill="#fff">treamore</text>
            </svg></a>

          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={location.pathname === item.href ? styles.active : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {!isMobile && (
            <Link to="/contact" className={`${styles.cta} btn btn-gold`}>
              Request a Quote
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
