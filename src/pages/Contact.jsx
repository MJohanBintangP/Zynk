import { ChatsCircle, LinkedinLogo, XLogo, InstagramLogo, PhoneCall, TelegramLogo } from '@phosphor-icons/react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const title = e.target.title.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    emailjs
      .send('service_dzj67sm', 'template_xgq556p', { title, name, email, message }, 'wHHrTRUmsTT7Nb4Fi')
      .then(() => {
        setIsLoading(false);
        toast.success('Message sent successfully!');
        e.target.reset();
      })
      .catch(() => {
        setIsLoading(false);
        toast.error('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="flex flex-col px-4 sm:mt-20 mt-8 sm:pb-20 pb-12">
      {/* Header */}
      <div className="flex flex-col gap-3 items-center sm:mb-18 mb-12 text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold">Bicaralah dengan tim kami yang ramah</h1>
        <p className="text-sm sm:text-base">Kami selalu siap membalas pesan Anda</p>
      </div>

      {/* Form and Contact Information */}
      <div className="flex flex-col md:flex-row md:gap-52 gap-y-10 justify-center">
        {/* Left Section: Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-[370px]">
          <div className="flex flex-col w-full">
            <label htmlFor="title" className="font-semibold text-sm mb-2 flex items-center gap-1">
              Judul <span className="text-[#FF0004]">*</span>
            </label>
            <input id="title" type="text" placeholder="Judul" required className="border-2 rounded-[10px] py-2 px-4 focus:outline-none focus:border-[#0033FF]" />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="name" className="font-semibold text-sm mb-2 flex items-center gap-1">
              Nama <span className="text-[#FF0004]">*</span>
            </label>
            <input id="name" type="text" placeholder="Nama" required className="border-2 rounded-[10px] py-2 px-4 focus:outline-none focus:border-[#0033FF]" />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="email" className="font-semibold text-sm mb-2 flex items-center gap-1">
              Email <span className="text-[#FF0004]">*</span>
            </label>
            <input id="email" type="email" placeholder="email@gmail.com" required className="border-2 rounded-[10px] py-2 px-4 focus:outline-none focus:border-[#0033FF]" />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="message" className="font-semibold text-sm mb-2 flex items-center gap-1">
              Pesan <span className="text-[#FF0004]">*</span>
            </label>
            <textarea id="message" rows={4} placeholder="Tinggalkan pesan..." required className="border-2 rounded-[15px] py-2 px-4 focus:outline-none focus:border-[#0033FF]"></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`bg-[#0033FF] py-3 rounded-[12px] font-medium text-[12px] text-white transition-transform flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-95 cursor-pointer'}`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"></path>
                </svg>
                Mengirim...
              </>
            ) : (
              'Kirim pesan'
            )}
          </button>
        </form>

        {/* Right Section: Contact Information */}
        <div className="flex flex-col gap-8 w-full max-w-[370px]">
          {/* Chat Options */}
          <div className="flex flex-col">
            <div className="mb-4">
              <h1 className="font-semibold">Ngobrol dengan kami</h1>
              <p className="text-[12px]">Kirim pesan ke tim kami untuk kolaborasi</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <ChatsCircle size={20} weight="bold" />
                <a className="cursor-pointer text-[12px] hover:underline">Kirim pesan di Whatsapp</a>
              </div>
              <div className="flex gap-4 items-center">
                <LinkedinLogo size={20} weight="bold" />
                <a className="cursor-pointer text-[12px] hover:underline">Kirim pesan di LinkedIn</a>
              </div>
              <div className="flex gap-4 items-center">
                <TelegramLogo size={20} weight="bold" />
                <a className="cursor-pointer text-[12px] hover:underline">Kirim pesan di Telegram</a>
              </div>
              <div className="flex gap-4 items-center">
                <InstagramLogo size={20} weight="bold" />
                <a className="cursor-pointer text-[12px] hover:underline">Kirim pesan di Instagram</a>
              </div>
              <div className="flex gap-4 items-center">
                <XLogo size={20} weight="bold" />
                <a className="cursor-pointer text-[12px] hover:underline">Kirim pesan di X</a>
              </div>
            </div>
          </div>

          {/* Call Options */}
          <div className="flex flex-col">
            <div className="mb-4">
              <h1 className="font-semibold">Hubungi Kami</h1>
              <p className="text-[12px]">Hubungi tim kami untuk kolaborasi</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <PhoneCall size={20} weight="bold" />
                <a className="cursor-pointer text-[12px] hover:underline">346 714</a>
              </div>
              <div className="flex gap-4 items-center">
                <PhoneCall size={20} weight="bold" />
                <a className="cursor-pointer text-[12px] hover:underline">+62816639008322</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
