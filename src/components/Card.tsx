import { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'dark';
  className?: string;
}

function Card({ children, variant = 'default', className = '' }: CardProps) {
  return (
    <div className={`${styles.card} ${styles[`variant-${variant}`]} ${className}`}>
      {children}
    </div>
  );
}

export default Card;
