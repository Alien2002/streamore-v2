import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Hide loader after assets load (or 2.2s minimum)
    const hide = () => setHidden(true);

    if (document.readyState === 'complete') {
      const timer = setTimeout(hide, 2200);
      return () => clearTimeout(timer);
    }

    let timer: ReturnType<typeof setTimeout>;
    const onLoad = () => {
      timer = setTimeout(hide, 2200);
    };
    window.addEventListener('load', onLoad, { once: true });

    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`${styles.loader} ${hidden ? styles.hidden : ''}`}>
      <div className={styles.loaderLogo}>
        STREAM<span>ORE</span>
      </div>
      <div className={styles.loaderBar}>
        <div className={styles.loaderBarFill} />
      </div>
    </div>
  );
}