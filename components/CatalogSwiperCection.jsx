"use client";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CatalogSwiperSection() {
  return (
    <div className="py-8 lg:py-28">
      <div className="container grid pb-8 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="text-left relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-white to-transparent opacity-80 -z-10" />
          <h1 className="py-4 text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-600 to-[#0084c2] bg-clip-text text-transparent transition-all duration-500 lg:py-0 hover:scale-[1.02]">
            Modern Classic
          </h1>
          <div className="hidden lg:block absolute bottom-0 left-0 h-1 w-24 bg-amber-600 transition-all duration-500 group-hover:w-32" />
        </div>

        <div className="space-y-8">
          <h2 className="pb-6 text-2xl md:text-3xl font-medium uppercase tracking-widest text-stone-700 relative after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-amber-600">
            Luxury Decor to Create Comfort in Our Home
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-stone-600">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed transition-all hover:translate-x-1">
                Our premium UPVC windows are expertly designed to deliver
                exceptional performance, durability, and energy efficiency.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed transition-all hover:translate-x-1">
                Constructed using high-quality materials and advanced
                manufacturing techniques, these windows provide long-lasting,
                low-maintenance solutions for both residential and commercial
                applications.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 pt-4 text-lg font-semibold text-amber-700 hover:text-amber-800 transition-all group"
              >
                <span className="border-b border-transparent hover:border-amber-700 transition-all">
                  View Gallery
                </span>
                <TbArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src="/image/swiper1.jpg"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper2.jpg"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper3.jpg"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper4.jpg"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper5.jpg"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
