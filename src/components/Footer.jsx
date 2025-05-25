import navbar_bg from "../assets/images/navbar_bg.png";
import app_logo from "../assets/images/app_logo.png";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/instagram";
import "react-social-icons/facebook";
import "react-social-icons/whatsapp";

const Footer = () => {
  return (
    <footer
      className="bg-contain bg-center text-white py-8 px-6"
      style={{ backgroundImage: `url(${navbar_bg})` }}
    >
      <div className="flex flex-row justify-between px-10">
        <div className="w-2/4 space-y-3">
          <img src={app_logo} alt="Logo Web" />
          <p className="text-sm md:text-base">
            Sebagai bagian dari Kompas Gramedia, PT Antar Surya Jaya
            menghadirkan solusi percetakan terbaik untuk media cetak seperti
            koran, majalah, buku, serta kemasan kertas. Dengan komitmen terhadap
            kualitas dan inovasi, kami terus berkembang untuk memenuhi kebutuhan
            industri percetakan.
          </p>
          <p className="text-sm pt-10">© Antar Surya Jaya 2025 | Intern</p>
        </div>
        <div className="flex flex-col w-2/5">
          <div className="flex flex-row justify-end gap-x-5 py-3">
            <SocialIcon url="https://instagram.com/pt.antarsuryajaya" target="_blank" bgColor="transparent" />
            <SocialIcon url="https://www.facebook.com/pages/Antar-Surya-Jaya-PT-Percetakan/1692800067644519" target="_blank" bgColor="transparent" />
            <SocialIcon url="https://wa.me/6285648225855" target="_blank" bgColor="transparent" />
          </div>
          <div className="flex flex-row justify-end gap-x-5 py-3">
            <a href="/" className="uppercase font-bold">Home</a>
            <a href="/service" className="uppercase font-bold">Service</a>
            <a href="/activity" className="uppercase font-bold">Activity</a>
            <a href="/about" className="uppercase font-bold">About Us</a>
          </div>
          <div className="mt-5 ">
            <p className="text-end">📞 (031) 8419000</p>
            <p className="text-end">📧 marketing@percetakansurya.com</p>
            <p className="text-end">Jl. Rungkut Industri III No.68-70, Rungkut Tengah, Kec. Gn. Anyar, Surabaya, Jawa Timur 60293</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
