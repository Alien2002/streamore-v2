import { ReactNode } from 'react';
import Container from './Container';
import styles from './Hero.module.css';
import { useTypingEffect } from '@/hooks/useTypingEffect';

interface HeroProps {
  title1: ReactNode;
  title2: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  breadcrumb?: { label: string; href?: string }[];
  bgImage?: string;
}

function Hero({ title1, title2, subtitle, children, breadcrumb, bgImage }: HeroProps) {
  const { text, isTyping } = useTypingEffect(subtitle ? subtitle.toString() : '', {
    typingSpeed: 10,
    deletingSpeed: 30,
    pauseDuration: 1000,
    loop: false,
  });
  return (
    <div className={styles.hero} 
    style={{
        backgroundImage: `linear-gradient(180deg, rgba(12,18,28,0.74), rgba(12,18,28,0.34)), url('/${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        {breadcrumb && (
          <div className={styles.breadcrumb}>
            {breadcrumb.map((item, idx) => (
              <span key={idx}>
                {item.href ? (
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <span>{item.label}</span>
                )}
                {idx < breadcrumb.length - 1 && ' / '}
              </span>
            ))}
          </div>
        )}
        <h1>{title1} <br></br>{title2}</h1>
        <div className={styles.rule}></div>
        {subtitle && <p className={styles.subtitle}>{text}<span className={styles.cursor + (!isTyping ? ' ' + styles.cursorBlink : '')}>|</span></p>}
        <p>{children}</p>
      </Container>
    </div>
  );
}

export default Hero;
