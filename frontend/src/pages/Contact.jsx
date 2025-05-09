import { ChatsCircle, LinkedinLogo, XLogo, InstagramLogo, PhoneCall, TelegramLogo } from '@phosphor-icons/react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    emailjs
      .send(
        'service_dzj67sm',
        'template_xgq556p',
        {
          title: title,
          name: name,
          email: email,
          message: message,
        },
        'wHHrTRUmsTT7Nb4Fi'
      )
      .then(
        () => {
          toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          e.target.reset();
        },
        () => {
          toast.error('Failed to send message. Please try again.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
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

          <button className="cursor-pointer bg-[#0033FF] py-3 rounded-[12px] font-medium text-[12px] text-white hover:scale-105 transition-colors" type="submit">
            Kirim pesan
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
