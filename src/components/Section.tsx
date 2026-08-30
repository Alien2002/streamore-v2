import { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: ReactNode;
  variant?: 'default' | 'alt' | 'dark' | 'deep';
  tight?: boolean;
  className?: string;
}

function Section({ children, variant = 'default', tight = false, className = '' }: SectionProps) {
  const classes = `${styles.section} ${styles[`variant-${variant}`]} ${tight ? styles.tight : ''} ${className}`;
  return <section className={classes}>{children}</section>;
}

export default Section;
