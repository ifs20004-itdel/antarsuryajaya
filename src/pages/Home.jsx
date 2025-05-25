import partner_metaform from "../assets/images/partners/metaform.png";
import partner_kompas from "../assets/images/partners/kg.png";
import partner_kgx from "../assets/images/partners/kgx.jpg";
import partner_gramedia from "../assets/images/partners/gramedia.png";
import value_alarm from "../assets/icon/alarm.png";
import value_handshake from "../assets/icon/handshake.png";
import value_hd from "../assets/icon/high-quality.png";
import value_alt_check from "../assets/icon/list_alt_check.png";
import value_paid from "../assets/icon/paid.png";
import machine from "../assets/images/home/machine.png";
import print_tech from "../assets/images/home/print_tech.png";
import btn_about from "../assets/images/home/about_us.jpg";
import btn_contact from "../assets/images/home/contact.jpg";
import btn_service from "../assets/images/home/service.jpg";
import CircleImage from "../components/CircleImage";
import ImageButton from "../components/ImageButton";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="font-poppins">
      <div className="relative w-full overflow-hidden h-screen">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('/images/company.jpg')`,
            opacity: 0.7,
          }}
        ></div>
        <div className="absolute w-5/12 mx-32 my-40 space-y-5 text-white z-10">
          <h2 className="text-4xl text-blue-950 font-bold">
            Solusi Percetakan Berkualitas untuk Setiap Kebutuhan Anda!
          </h2>
          <hr className="bg-yellow-400 h-1 rounded-2xl w-3/4 border-0" />
          <p className="text-xl text-slate-600 w-3/4">
            Perusahaan percetakan yang berlokasi di Surabaya, Jawa Timur
          </p>
        </div>
      </div>
      <div className="py-16 w-5/6 m-auto">
        <div className="py-5">
          <h2 className="uppercase font-bold text-center text-3xl">
            Our Partners
          </h2>
          <div className="flex flex-row justify-around items-center gap-x-16 py-5">
            <img src={partner_metaform} alt="" width={200} />
            <img src={partner_kompas} alt="" width={200} />
            <img src={partner_kgx} alt="" width={200} />
            <img src={partner_gramedia} alt="" width={200} />
          </div>
        </div>
        <div className="py-5 w-11/12 m-auto">
          <div className="flex flex-row items-center ">
            <h2 className="uppercase w-1/6 font-bold">Why Choose Us</h2>
            <hr className="bg-black p-0.5 w-full" />
          </div>
          <div className="flex flex-row gap-x-7 py-7 justify-center-safe place-content-center">
            <CircleImage
              imgSource={value_hd}
              label={"Kualitas Cetak Terjamin"}
              description={
                "Menggunakan teknologi printing terbaru yang memastikan hasil cetak tajam, waarna akurat, dan daya tahan tinggi."
              }
            />
            <CircleImage
              imgSource={value_paid}
              label={"Harga Kompetitif"}
              description={
                "Menawarkan harga bersaing dengan berbagai pilihan paket sesuai kebutuhan pelanggan."
              }
            />
            <CircleImage
              imgSource={value_alarm}
              label={"Pelayanan Cepat dan Profesional"}
              description={
                "Didukung oleh tim berpengalaman, sehingga mampu menangani pesanan dalam waktu singkat."
              }
            />
            <CircleImage
              imgSource={value_alt_check}
              label={"Layanan Lengkap dan Variatif"}
              description={
                "Menyediakan berbagai layanan cetak, yang dapat disesuaikan dengan kebutuhan pelanggan."
              }
            />
            <CircleImage
              imgSource={value_handshake}
              label={"Kepercayaan dan Reputasi"}
              description={
                "Berpengalaman dalam industri percetakan dan dipercaya pelanggan karena konsistennya dalam pelayanan terbaik."
              }
            />
          </div>
        </div>
        <div className="py-5 w-11/12 m-auto space-y-10">
          <div className="grid grid-cols-2 items-center">
            <div className="space-y-3">
              <h3 className="uppercase font-bold">
                Teknologi Cetak Terdepan Untuk Hasil Terbaik
              </h3>
              <p className="text-sm">
                Kami menghadirkan kualitas cetak terbaik dengan menggabungkan
                teknologi modern dan pengalaman lebih dari 30 tahun. Dengan
                standar tinggi dan inovasi berkelanjutan, kami memastikan setiap
                produk cetak memenuhi ekspektasi pelanggan. Hasilnya? Percetakan
                presisi tinggi, warna tajam, dan ketahanan optimal untuk setiap
                kebutuhan bisnis Anda!
              </p>
            </div>
            <div className="flex justify-center">
              <img src={print_tech} alt="Teknologi Cetak" width={400} />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="flex justify-center">
              <img src={machine} alt="Produk Unggulan" width={400} />
            </div>
            <div className="space-y-3">
              <h3 className="uppercase font-bold">
                produk unggulan dengan kualitas terbaik
              </h3>
              <p className="text-sm">
                Kami menghadirkan solusi percetakan berkualitas tinggi untuk
                berbagai kebutuhan bisnis. Dengan teknologi mutakhir dan proses
                produksi presisi, setiap cetakan yang kami hasilkan memiliki
                detail tajam, warna akurat, dan daya tahan optimal. Dari media
                cetak hingga kemasan kertas, kami siap memberikan yang terbaik
                untuk Anda!
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-around py-10 w-11/12 m-auto">
              <ImageButton imgSource={btn_about} label={"About Us"} to={"/about"} isNav={true}/>
              <ImageButton imgSource={btn_service} label={"Service"} to={"/service"} isNav={true}/>
              <ImageButton imgSource={btn_contact} label={"Contact Us"} to={"mailto:marketing@percetakansurya.com"} isNav={false}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Home;
