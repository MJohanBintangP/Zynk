import Logo from '../assets/logo.svg';
import { MagnifyingGlass, X, List } from '@phosphor-icons/react';
import DarkModeToggle from './Darkmode';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let API_URL;

    API_URL = '/api-news';

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) setArticles(data.data);
      })
      .catch((err) => console.error('Failed to fetch articles:', err));
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = articles.filter((article) => article.title.toLowerCase().includes(query.toLowerCase()));

    setSearchResults(filtered);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/News?search=${encodeURIComponent(searchTerm.trim())}`);
      setShowSearch(false);
      setSearchTerm('');
    }
  };

  return (
    <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4 flex-wrap relative">
      <div className="flex items-center">
        <img className="w-20" src={Logo} alt="logo" />
      </div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex justify-center gap-10 text-sm lg:text-[13px]">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Beranda
          </Link>
        </li>
        <li>
          <Link to="/News" className="hover:text-gray-300">
            Berita terbaru
          </Link>
        </li>
        <li>
          <Link to="/News#hotNews" className="hover:text-gray-300">
            Berita hangat
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="hover:text-gray-300">
            Kontak kami
          </Link>
        </li>
      </ul>

      <div className="hidden md:flex items-center gap-4">
        <MagnifyingGlass size={24} weight="bold" className="cursor-pointer" onClick={() => setShowSearch(!showSearch)} />
        <DarkModeToggle />
      </div>

      <div className="flex items-center gap-4 md:hidden">
        <MagnifyingGlass size={24} weight="bold" className="cursor-pointer" onClick={() => setShowSearch(!showSearch)} />
        <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}</button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0669FD] dark:bg-[#171717] z-50 px-6 py-4 md:hidden shadow-md">
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/News" className="hover:text-gray-300">
                Berita terbaru
              </Link>
            </li>
            <li>
              <Link to="/News#hotNews" className="hover:text-gray-300">
                Berita hangat
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-gray-300">
                Kontak kami
              </Link>
            </li>
          </ul>
          <div className="mt-4">
            <DarkModeToggle />
          </div>
        </div>
      )}

      {/* Overlay */}
      {showSearch && <div className="fixed inset-0 bg-black/80 z-40" onClick={() => setShowSearch(false)} />}

      {/* Search Box */}
      {showSearch && (
        <div className="absolute top-full right-0 sm:w-120 w-80 mt-2 px-6 z-50">
          <form onSubmit={handleSearch} className="flex items-center gap-2 bg-white p-2 rounded-[15px]">
            <input type="text" className="focus:outline-none px-2 py-1 text-sm text-black w-full" placeholder="Cari berita..." value={searchTerm} onChange={handleSearchChange} autoFocus />
            <X weight="bold" size={20} className="text-black cursor-pointer" onClick={() => setShowSearch(false)} />
          </form>
          {searchResults.length > 0 && (
            <div className="bg-white rounded-[15px] mt-2 max-h-80 overflow-y-auto">
              <div className="my-2">
                {searchResults.map((article, index) => (
                  <a key={index} href={article.link} target="_blank" rel="noopener noreferrer" className="flex gap-3 px-4 py-2 hover:bg-gray-100 border-b">
                    <img src={article.image?.small || 'https://via.placeholder.com/60'} alt={article.title} className="w-16 h-12 object-cover rounded-md" />
                    <div>
                      <p className="font-medium text-black text-sm line-clamp-2">{article.title}</p>
                      <p className="text-xs text-gray-600 line-clamp-1">{article.contentSnippet}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
