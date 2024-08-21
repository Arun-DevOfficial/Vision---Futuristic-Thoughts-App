// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Calendar } from "lucide-react";
// Import Swiper styles
import "swiper/css";
export default function Carousel() {
  return (
    <>
      <div className="flex justify-center items-center p-16 bg-[#f7f7f7]">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="mx-auto container"
        >
          <SwiperSlide className="flex gap-5 items-center">
            <img
              src="https://i.pinimg.com/564x/eb/a2/38/eba238fa04432cf1d06e3d23723adfe8.jpg"
              alt="Travel"
              className="w-32 h-32 rounded-full flex-shrink-0"
            />
            <div>
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">Travel</span>
              <p className="text-xl py-2 text-black font-medium font-title">
                Travel is a great way to explore.
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <Calendar size={18} />
                Dec 22,2024
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex gap-5 items-center">
            <img
              src="https://i.pinimg.com/564x/6f/d8/56/6fd856ad778fad4d2d3c5f4b33490695.jpg"
              alt="Travel"
              className="w-32 h-32 rounded-full flex-shrink-0"
            />
            <div>
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">Sports</span>
              <p className="text-xl py-2 text-black font-medium font-title">
                Travel is a great way to explore.
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <Calendar size={18} />
                Dec 22,2024
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex gap-5 items-center">
            <img
              src="https://i.pinimg.com/564x/00/d5/f3/00d5f3ee9d4a97f2e85c62fb9701185d.jpg"
              alt="Travel"
              className="w-32 h-32 rounded-full flex-shrink-0"
            />
            <div>
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">Technology</span>
              <p className="text-xl py-2 text-black font-medium font-title">
                Travel is a great way to explore.
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <Calendar size={18} />
                Dec 22,2024
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex gap-5 items-center">
            <img
              src="https://i.pinimg.com/564x/af/cc/92/afcc92c62915ea14a2d5650058a03828.jpg"
              alt="Travel"
              className="w-32 h-32 rounded-full flex-shrink-0"
            />
            <div>
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">Nature</span>
              <p className="text-xl py-2 text-black font-medium font-title">
                Travel is a great way to explore.
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <Calendar size={18} />
                Dec 22,2024
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex gap-5 items-center">
            <img
              src="https://i.pinimg.com/564x/15/25/c3/1525c37b7f67f319327f6030cf2b202b.jpg"
              alt="Travel"
              className="w-32 h-32 rounded-full flex-shrink-0"
            />
            <div>
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">Artificial Intelligient</span>
              <p className="text-xl py-2 text-black font-medium font-title">
                Travel is a great way to explore.
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <Calendar size={18} />
                Dec 22,2024
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}