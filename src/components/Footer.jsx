import logo from '../assets/logo.svg';
import { EnvelopeSimple, GlobeSimple, LinkedinLogo, GithubLogo, InstagramLogo } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0050C9] text-white py-10 px-6 md:px-12">
      <div className="flex flex-col lg:flex-row justify-start gap-y-12 gap-x-28">
        {/* Deskripsi */}
        <div className="flex flex-col gap-5 max-w-lg">
          <img className="w-20" src={logo} alt="logoZynk" />
          <p className="text-[12px] text-justify lg:text-left">
            Zynk adalah portal berita modern yang didedikasikan untuk menyampaikan informasi yang akurat, cepat, dan relevan dalam berbagai topik—mulai dari berita utama global dan teknologi hingga gaya hidup dan hiburan. Kami percaya pada
            kekuatan kebenaran dan kejelasan, yang bertujuan untuk membuat pembaca kami tetap terinformasi, terinspirasi, dan selalu selangkah lebih maju. Tetap terhubung dengan Zynk—sumber tepercaya Anda di dunia berita yang terus
            berkembang.
          </p>
          <p className="text-[12px] mt-5 font-medium">© 2025 mjohanbintangp</p>
        </div>

        {/* Kontak */}
        <div className="flex flex-col max-w-sm">
          <h1 className="font-semibold text-[15px] mb-5">Kontak kami</h1>
          <a className="hover:underline flex items-center gap-3 text-[12px]" href="mailto:m.johanbintang.pratama@gmail.com">
            <EnvelopeSimple size={18} weight="bold" />
            m.johanbintang.pratama@gmail.com
          </a>
          <p className="text-[12px] font-semibold mt-2">atau kamu bisa hubungi di sosial media saya</p>
        </div>

        {/* Profile */}
        <div className="flex flex-col max-w-sm">
          <h1 className="font-semibold text-[15px] mb-5">Profil pembuat</h1>
          <div className="flex flex-col gap-4">
            <a className="hover:underline flex items-center gap-3 text-[12px]" target="_blank" rel="noopener noreferrer" href="https://mjohanbintangp.vercel.app/">
              <GlobeSimple size={18} weight="bold" />
              mjohanbintangp.vercel.app
            </a>
            <a className="hover:underline flex items-center gap-3 text-[12px]" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mjohanbintangp/">
              <LinkedinLogo size={18} weight="bold" />
              linkedin.com/in/mjohanbintangp
            </a>
            <a className="hover:underline flex items-center gap-3 text-[12px]" target="_blank" rel="noopener noreferrer" href="https://github.com/MJohanBintangP">
              <GithubLogo size={18} weight="bold" />
              github.com/MJohanBintangP
            </a>
            <a className="hover:underline flex items-center gap-3 text-[12px]" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mjohanbintangp/">
              <InstagramLogo size={18} weight="bold" />
              instagram.com/mjohanbintangp/
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
