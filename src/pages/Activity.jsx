import Footer from "../components/Footer"
import ig_post1 from "../assets/images/activity/ig/post1.png";
import ig_post2 from "../assets/images/activity/ig/post2.png";
import ig_post3 from "../assets/images/activity/ig/post3.png";

import post_press1 from "../assets/images/activity/training-post-press/1.png";
import post_press2 from "../assets/images/activity/training-post-press/2.png";
import post_press3 from "../assets/images/activity/training-post-press/3.png";
import post_press4 from "../assets/images/activity/training-post-press/4.png";
import post_press5 from "../assets/images/activity/training-post-press/5.png";

import okb1 from "../assets/images/activity/orientasi-karyawan-baru-2024/1.jpg";
import okb2 from "../assets/images/activity/orientasi-karyawan-baru-2024/2.jpg";
import okb3 from "../assets/images/activity/orientasi-karyawan-baru-2024/3.jpg";
import okb4 from "../assets/images/activity/orientasi-karyawan-baru-2024/4.jpg";
import okb5 from "../assets/images/activity/orientasi-karyawan-baru-2024/5.jpg";

import habi1 from "../assets/images/activity/halal-bihalal-2024/1.png";
import habi2 from "../assets/images/activity/halal-bihalal-2024/2.png";
import habi3 from "../assets/images/activity/halal-bihalal-2024/3.png";
import habi4 from "../assets/images/activity/halal-bihalal-2024/4.png";
import habi5 from "../assets/images/activity/halal-bihalal-2024/5.png";
import habi6 from "../assets/images/activity/halal-bihalal-2024/6.png";
import habi7 from "../assets/images/activity/halal-bihalal-2024/7.png";
import habi8 from "../assets/images/activity/halal-bihalal-2024/8.png";

import peco1 from "../assets/images/activity/performance-contract-2024/1.png";
import peco2 from "../assets/images/activity/performance-contract-2024/2.png";
import peco3 from "../assets/images/activity/performance-contract-2024/3.png";
import peco4 from "../assets/images/activity/performance-contract-2024/4.png";
import peco5 from "../assets/images/activity/performance-contract-2024/5.png";
import peco6 from "../assets/images/activity/performance-contract-2024/6.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Activity = () => {
  return (
    <div className="w-full">
      <div className="py-10">
        <div className="w-5/6 m-auto py-5 space-y-2">
          <h2 className="uppercase font-bold text-3xl">Instagram</h2>
          <p>
            Lihat berbagai informasi dan kegiatan terbaru kami melalui akun
            Instagram resmi.
          </p>
        </div>
        <div className="flex flex-row w-full gap-x-5 justify-between px-1">
          <img src={ig_post1} width={500} alt="Postingan 1" />
          <img src={ig_post2} alt="Postingan 2" />
          <img src={ig_post3} alt="Postingan 3" />
        </div>
      </div>
      <hr className="py-0.5 bg-gray-500 w-11/12 m-auto" />
      <div>
        <div className="w-5/6 m-auto py-5 space-y-2">
          <h2 className="uppercase font-bold text-3xl">Activity</h2>
          <p>
            Dokumentasi kegiatan internal dan acara perusahaan yang mempererat
            kebersamaan tim.
          </p>
        </div>
        <>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            loop={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="swiperPostPress"
          >
            <SwiperSlide>
              <img
                src={post_press1}
                alt="Post Press 1"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={post_press2}
                alt="Post Press 2"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={post_press3}
                alt="Post Press 3"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={post_press4}
                alt="Post Press 4"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={post_press5}
                alt="Post Press 5"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
          </Swiper>
        </>
        <h1 className="font-bold uppercase text-3xl pb-10 w-3/5 m-auto">
          POSTPRESS BASIC OPERATION YOSHINO
        </h1>
        <>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            loop={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="swiperOKB"
          >
            <SwiperSlide>
              <img
                src={okb1}
                alt="Orientasi Karyawan Baru 1"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={okb2}
                alt="Orientasi Karyawan Baru 2"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={okb3}
                alt="Orientasi Karyawan Baru 3"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={okb4}
                alt="Orientasi Karyawan Baru 4"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={okb5}
                alt="Orientasi Karyawan Baru 5"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
          </Swiper>
        </>
        <h1 className="font-bold uppercase text-3xl pb-10 w-3/5 m-auto">
          ORIENTASI KARYAWAN BARU 2024
        </h1>
        <>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            loop={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="swiperHalalBihalal"
          >
            <SwiperSlide>
              <img
                src={habi1}
                alt="Halal Bihalal 1"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={habi2}
                alt="Halal Bihalal 2"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={habi3}
                alt="Halal Bihalal 3"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={habi4}
                alt="Halal Bihalal 4"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={habi5}
                alt="Halal Bihalal 5"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={habi6}
                alt="Halal Bihalal 6"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={habi7}
                alt="Halal Bihalal 7"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={habi8}
                alt="Halal Bihalal 8"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
          </Swiper>
        </>
        <h1 className="font-bold uppercase text-3xl pb-10 w-3/5 m-auto">
          HALAL BIHALAL 2024
        </h1>
        <>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            loop={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="swiperPerformanceContract"
          >
            <SwiperSlide>
              <img
                src={peco1}
                alt="Performance Contract 1"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={peco2}
                alt="Performance Contract 2"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={peco3}
                alt="Performance Contract 3"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={peco4}
                alt="Performance Contract 4"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={peco5}
                alt="Performance Contract 5"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={peco6}
                alt="Performance Contract 6"
                className="w-3/5 m-auto"
              />
            </SwiperSlide>
          </Swiper>
        </>
        <h1 className="font-bold uppercase text-3xl pb-20 w-3/5 m-auto">
          PERFORMANCE CONTRACT 2024
        </h1>
      </div>
      <Footer/>
    </div>
  );
};
export default Activity;
