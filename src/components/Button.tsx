import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'gold' | 'ghost' | 'dark';
  size?: 'default' | 'large';
  as?: 'button' | 'a';
  href?: string;
}

function Button({
  children,
  variant = 'gold',
  size = 'default',
  as = 'button',
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = `${styles.btn} ${styles[`variant-${variant}`]} ${styles[`size-${size}`]} ${className || ''}`;

  if (as === 'a') {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
