import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <a
        className="whatsapp-fab"
        href="https://wa.me/255715071286"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M20.52 3.48A11.9 11.9 0 0 0 12.04.5C6.26.5 1.54 5.2 1.54 11c0 1.94.51 3.83 1.48 5.5L.5 23.5l6.34-1.66c1.57.86 3.36 1.33 5.2 1.33h.01c5.78 0 10.5-4.7 10.5-10.5 0-3-1.16-5.82-3.03-7.69zM12.04 21.5h-.01c-1.66 0-3.28-.43-4.7-1.25l-.34-.19-3.76.98.99-3.66-.22-.37A8.5 8.5 0 0 1 3 11c0-4.7 3.84-8.5 8.04-8.5 4.2 0 8.04 3.8 8.04 8.5 0 4.7-3.84 8.5-8.04 8.5z"/>
          <path fill="currentColor" d="M17.06 14.43c-.31-.16-1.81-.89-2.09-.99-.29-.11-.5-.16-.71.16-.21.31-.81.99-.99 1.2-.18.21-.36.24-.67.08-.31-.16-1.37-.51-2.6-1.6-.96-.86-1.61-1.92-1.8-2.23-.18-.31-.02-.48.13-.64.13-.13.31-.35.47-.53.15-.17.2-.28.31-.47.1-.18.05-.34-.02-.48-.08-.14-.71-1.69-.97-2.33-.26-.61-.53-.53-.72-.54l-.62-.01c-.21 0-.55.08-.84.38-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.4 5.4 4.77 3.18 1.36 3.18.91 3.76.86.57-.05 1.81-.74 2.07-1.45.26-.72.26-1.34.18-1.47-.08-.13-.29-.2-.6-.36z"/>
        </svg>
      </a>
    </div>
  );
}

export default Layout;
