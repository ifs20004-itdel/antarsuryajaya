import about from "../assets/images/about/about.png";
import vision from "../assets/images/about/vision.jpg";
import mission from "../assets/images/about/mission.jpg";
import section from "../assets/images/about/section_bg.jpg";
import location from "../assets/images/about/location.png";
import phone_number from "../assets/images/about/phone.png";
import email from "../assets/images/about/mail.png";
import clock from "../assets/images/about/clock.png";
import TextWithIcon from "../components/TextWithIcon";
import Footer from "../components/Footer";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/instagram";
import "react-social-icons/facebook";
import "react-social-icons/whatsapp";

const AboutUs = () => {
  return (
    <div className="font-poppins">
      <div className="flex flex-row">
        <div>
          <div className="relative py-px">
            <img src={about} width={900} alt="About Us" />
            <div className="">
              <h2 className="absolute top-[40%] left-2/4 -translate-x-1/2 uppercase underline underline-offset-8 font-bold text-4xl text-white">
                Tentang Kami
              </h2>
              <a
                href="/about"
                className="absolute top-[55%] left-2/4 -translate-x-1/3 bg-blue-200 px-5 py-3 rounded-2xl font-bold text-gray-700"
              >
                Selengkapnya
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-5 text-base p-10 w-9/12">
          <p>
            PT Antar Surya Jaya (ASJ) didirikan pada 24 Oktober 1983 di Surabaya
            sebagai perusahaan yang bergerak di bidang percetakan dan
            penerbitan. Pada 28 Juni 1986, perusahaan ini memulai langkah besar
            dengan menerbitkan surat kabar mingguan bernama Surya, yang kemudian
            bertransformasi menjadi harian setelah menjalin kerja sama dengan
            Kompas Gramedia pada 10 November 1989.
          </p>
          <p>
            Sebagai bagian dari Kompas Gramedia, ASJ terus berkembang dan
            berinovasi dalam industri percetakan. Pada Mei 2001, Kompas Gramedia
            secara penuh mengakuisisi ASJ, menjadikannya sebagai bagian dari
            grup besar yang dikenal dengan standar kualitas tinggi dan teknologi
            mutakhir.
          </p>
          <p>
            Saat ini, PT Antar Surya Jaya tidak hanya berfokus pada media cetak,
            tetapi juga memperluas layanannya ke berbagai sektor percetakan
            lainnya, termasuk cetak kemasan kertas dan berbagai kebutuhan bisnis
            lainnya. Dengan pengalaman lebih dari tiga dekade, kami berkomitmen
            untuk selalu memberikan solusi cetak terbaik, didukung oleh
            teknologi canggih dan layanan yang profesional
          </p>
        </div>
      </div>
      <div className="w-2/4 m-auto">
        <div className="py-10 flex flex-row items-center justify-center">
          <img src={vision} alt="Visi" width={150} />
          <p className="text-xl">
            Menjadi Perusahaan percetakan terbesar dan terbaik di Jawa Timur dan
            Indonesia Timur.
          </p>
        </div>
        <hr className="bg-black py-px" />
        <div className="py-10 flex flex-row  items-center justify-center">
          <p className="text-xl">
            Menjalankan bisnis secara sehat yang menguntungkan bagi Shareholder,
            Karyawan, dan Masyarakat sete berorientasi kepada kepuasan
            pelanggan.
          </p>
          <img src={mission} alt="Misi" width={150} />
        </div>
      </div>
      <div className="py-5">
        <div className="relative">
          <img src={section} alt="Section Divider" className="w-full h-full" />
          <h2 className="absolute bottom-[50%] left-2/4 -translate-x-2/4 font-serif text-white text-center text-5xl">
            Lets Talk Business
          </h2>
        </div>
      </div>
      <div className="py-10 grid grid-cols-2 gap-10 w-5/6 m-auto">
        <div className="space-y-3">
          <h2 className="font-bold text-3xl">Let's talk with us</h2>
          <p>
            Butuh solusi cetak terbaik? Hubungi kami sekarang! Tim kami siap
            membantu setiap kebutuhan percetakan Anda dengan layanan profesional
            dan respons cepat
          </p>
          <div className="w-3/4 space-y-3">
            <TextWithIcon
              iconSrc={location}
              alt={"alamat"}
              text={
                "Jl. Rungkut Industri III No.68-70, Rungkut Tengah, Kec. Gn. Anyar, Surabaya, Jawa Timur 60293"
              }
            />
            <TextWithIcon
              iconSrc={phone_number}
              alt={"telp."}
              text={"(031) 8419000"}
            />
            <TextWithIcon
              iconSrc={email}
              alt={"email"}
              text={"marketing@percetakansurya.com"}
            />
            <TextWithIcon
              iconSrc={clock}
              alt={"jam operasional"}
              text={
                "Monday - Thursday: 9am - 5pm.\nFriday: 9am - 4pm.\nSaturday - Sunday: Best not to ask."
              }
            />
          </div>
          <div className="flex flex-row gap-x-5 py-3">
            <SocialIcon
              url="https://instagram.com/pt.antarsuryajaya"
              target="_blank"
            />
            <SocialIcon
              url="https://www.facebook.com/pages/Antar-Surya-Jaya-PT-Percetakan/1692800067644519"
              target="_blank"
            />
            <SocialIcon url="https://wa.me/6285648225855" target="_blank" />
          </div>
        </div>
        <div>
          <div className="flex-1 h-[400px]">
            <p className="text-sm text-gray-600 mt-2">Find us here!</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.187267651994!2d112.7648644!3d-7.3328542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788281a524eb99%3A0x98b089824a23db71!2sPT%20Antar%20Surya%20Jaya!5e0!3m2!1sid!2sid!4v1748152347579!5m2!1sid!2sid"
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PT Antar Surya Jaya"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AboutUs;
