import assets1 from '../assets/assets1.png';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 sm:mt-20 mt-12 sm:pb-28 text-center">
      <img src={assets1} alt="assets1" className="w-full max-w-[600px] object-contain" />

      <h1 className="font-semibold text-2xl sm:text-3xl  max-w-[400px] sm:max-w-[1000px]">Temukan apa yang sedang dibicarakan oleh dunia</h1>

      <p className="text-sm sm:text-base max-w-[400px] sm:max-w-[500px] text-white">Ikuti terus berita-berita yang paling banyak dibicarakan dan topik hangat hari ini.</p>

      <div className="flex flex-row gap-4 mt-4 items-center">
        <Link to="/News">
          <button className="cursor-pointer hover:scale-95 transition-transform bg-[#0033FF] text-white px-8 py-2 rounded-[12px] text-sm sm:text-base">Mulai</button>
        </Link>
        <Link to="/News#hotNews">
          <button className="cursor-pointer hover:scale-95 transition-transform border-2 border-white px-6 py-2 rounded-[14px] text-sm sm:text-base">Berita hangat</button>
        </Link>
      </div>
    </div>
  );
}
