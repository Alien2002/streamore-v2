function Logo() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" stroke="url(#grad)" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="12" fill="url(#grad)" opacity="0.1" />
      <circle cx="24" cy="24" r="6" fill="url(#grad)" />
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DE9200" />
          <stop offset="45%" stopColor="#F7B500" />
          <stop offset="100%" stopColor="#FFD34D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Logo;
