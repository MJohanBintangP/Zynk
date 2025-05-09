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
            Zynk is a modern news portal dedicated to delivering accurate, fast, and relevant information across a wide range of topics—from global headlines and technology to lifestyle and entertainment. We believe in the power of truth
            and clarity, aiming to keep our readers informed, inspired, and always one step ahead. Stay connected with Zynk—your trusted source in the ever-evolving world of news.
          </p>
          <p className="text-[12px] mt-5 font-medium">© 2025 mjohanbintangp</p>
        </div>

        {/* Kontak */}
        <div className="flex flex-col max-w-sm">
          <h1 className="font-semibold text-[15px] mb-5">Our Contact</h1>
          <a className="hover:underline flex items-center gap-3 text-[12px]" href="mailto:m.johanbintang.pratama@gmail.com">
            <EnvelopeSimple size={18} weight="bold" />
            m.johanbintang.pratama@gmail.com
          </a>
          <p className="text-[12px] font-semibold mt-2">or you can contact in my social media</p>
        </div>

        {/* Profile */}
        <div className="flex flex-col max-w-sm">
          <h1 className="font-semibold text-[15px] mb-5">Author Profile</h1>
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
