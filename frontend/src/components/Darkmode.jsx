import { useEffect, useState } from 'react';
import { Sun, Moon } from '@phosphor-icons/react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggle}
      className={`cursor-pointer relative w-13 h-7 flex items-center rounded-full p-1 transition-colors duration-300
        ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      <div
        className={`w-5 h-5 flex items-center justify-center rounded-full shadow-md transform transition-transform duration-300
          ${isDark ? 'translate-x-6 bg-white' : 'translate-x-0 bg-[#0669FD]'}`}
      >
        {isDark ? <Moon size={12} weight="bold" className="text-[#0669FD]" /> : <Sun size={12} weight="bold" className="text-white" />}
      </div>
    </button>
  );
}
