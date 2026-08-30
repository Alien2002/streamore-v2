import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import Home from '@/pages/Home';
import Livestreaming from '@/pages/Livestreaming';
import Services from '@/pages/Services';
import Industries from '@/pages/Industries';
import Packages from '@/pages/Packages';
import Reliability from '@/pages/Reliability';
import Work from '@/pages/Work';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="livestreaming" element={<Livestreaming />} />
          <Route path="services" element={<Services />} />
          <Route path="industries" element={<Industries />} />
          <Route path="packages" element={<Packages />} />
          <Route path="reliability" element={<Reliability />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
