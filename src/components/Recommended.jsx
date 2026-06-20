"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const recommend = [
  { id: 1, name: "Salon Name", address: "Brookpark Ext, 27085, North Olmsted, 44070", image: "/shop1.svg", review: "104", rate: "4.5" },
  { id: 2, name: "Salon Name", address: "2267 Main st, Fort Myers, 33901", image: "/shop2.svg", review: "104", rate: "4.5" },
  { id: 3, name: "Deluxe room", address: "2267 Main st, Fort Myers, 33901", image: "/shop3.svg", review: "104", rate: "4.5" },
  { id: 4, name: "Meeting room", address: "2267 Main st, Fort Myers, 33901", image: "/shop4.svg", review: "104", rate: "4.5" },
  { id: 5, name: "Salon Name", address: "2267 Main st, Fort Myers, 33901", image: "/shop1.svg", review: "104", rate: "4.5" },
];

const RecommendCard = ({ item }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
    {/* Image */}
    <div className="relative w-full h-48">
      <Image
        src={item.image}
        alt={item.name}
        fill
        className="object-cover"
      />
    </div>

    {/* Rating row */}
    <div className="flex items-center justify-between px-4 pt-3">
      <div className="flex items-center gap-1 text-[#BA7894]">
        {/* Star icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
        <span className="text-sm font-medium">{item.rate}</span>
      </div>
      <span className="text-sm text-gray-400">{item.review} reviews</span>
    </div>

    {/* Name & address */}
    <div className="px-4 pt-2 pb-4 flex flex-col gap-1 flex-1">
      <p className="text-[#422A3C] font-semibold text-[15px]">{item.name}</p>
      <div className="flex items-start gap-1 text-gray-400">
        {/* Pin icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-xs leading-tight">{item.address}</span>
      </div>

      {/* Book Now button */}
      <button className="mt-3 w-full py-2 rounded-full border-2 border-[#BA7894] text-[#BA7894] text-sm font-semibold tracking-wide hover:bg-[#BA7894] hover:text-white transition-colors duration-200">
        BOOK NOW
      </button>
    </div>
  </div>
);

const Recommended = () => {
  return (
    <div className="flex flex-col items-center gap-5 px-20 justify-center my-16">
      {/* Section header */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-[15px] font-semibold text-[#BA7894]">Our Services</p>
        <h2 className="text-[45px] font-bold text-[#422A3C]">Recommended</h2>
      </div>

      {/* Swiper */}
      <div className="w-full mt-6 relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-btn-prev",
            nextEl: ".swiper-btn-next",
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-2"
        >
          {recommend.map((item) => (
            <SwiperSlide key={item.id}>
              <RecommendCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom nav buttons */}
        <button className="swiper-btn-prev absolute left-[-36px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 text-[#422A3C] hover:bg-[#BA7894] hover:text-white transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="swiper-btn-next absolute right-[-36px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 text-[#422A3C] hover:bg-[#BA7894] hover:text-white transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Recommended;