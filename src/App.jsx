import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import Contact from './pages/Contact';
import NewsAll from './pages/newsAll';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="font-[poppins] min-h-screen bg-[#0669FD] dark:bg-[#171717] text-white transition-colors duration-300">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/News" element={<News />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NewsAll" element={<NewsAll />} />
        </Routes>
      </div>
    </div>
  );
}
