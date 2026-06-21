"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Leslie Alexander",
    location: "Moncton, Canada",
    title: "An Amazing Spa Experience from Start to Finish",
    quote:
      "The atmosphere was relaxing, the staff were welcoming, and the service exceeded my expectations. I left feeling refreshed and rejuvenated.",
    image: "/testimonial1.svg",
  },
  {
    id: 2,
    name: "James Carter",
    location: "Toronto, Canada",
    title: "Professional Service and Outstanding Results",
    quote:
      "I've visited many salons before, but this one stands out. The attention to detail and level of care were truly exceptional.",
    image: "/testimonial1.svg",
  },
  {
    id: 3,
    name: "Amara Osei",
    location: "Lagos, Nigeria",
    title: "My New Favorite Beauty & Wellness Destination",
    quote:
      "From the moment I walked in, I felt valued. The treatments were excellent and the environment was clean, elegant, and calming.",
    image: "/testimonial1.svg",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center gap-6 px-20 my-16">
      {/* Header */}
      <div className="flex flex-col items-center">
        <p className="text-[13px] font-semibold tracking-widest text-[#BA7894] uppercase">
          Testimonials
        </p>
        <h2 className="text-[40px] font-bold text-[#422A3C] font-serif">
          What our Customers says...
        </h2>
      </div>

      
      <div className="w-full relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".testimonial-btn-prev",
            nextEl: ".testimonial-btn-next",
          }}
          slidesPerView={1}
          loop
          className="rounded-2xl"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-[#4A2545] rounded-2xl flex md:flex-row flex-col items-center justify-center gap-10 md:px-120 px-4 py-12 min-h-100">
                
                
                <div className="relative shrink-0 w-1/2 h-55">
                
                  <div className="absolute left-6 top-4 flex gap-3">
                    <div className="w-10 h-64 bg-white/20 rounded-full" />
                    <div className="w-10 h-64 bg-white/20 rounded-full mt-6" />
                  </div>
            
                  <div className="absolute bottom-4 left-12 overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.name}
                      height={280}
                      width={280}
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Right — content */}
                <div className="flex flex-col gap-3 text-white flex-1">
                  {/* Opening quote icon */}
                  <svg
                    className="w-8 h-8 text-white/70"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8C6.134 8 3 11.134 3 15v9h9v-9H6c0-2.206 1.794-4 4-4V8zm13 0c-3.866 0-7 3.134-7 7v9h9v-9h-6c0-2.206 1.794-4 4-4V8z" />
                  </svg>

                  {/* Name + location */}
                  <div>
                    <p className="font-semibold text-[15px]">{t.name}</p>
                    <p className="text-white/60 text-[13px]">{t.location}</p>
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] font-bold leading-snug">{t.title}</h3>

                  {/* Quote text */}
                  <p className="text-white/75 text-[14px] md:w-148.5 w-full leading-relaxed">
                    {t.quote}
                  </p>

                  {/* Closing quote icon */}
                  <div className="self-end">
                    <svg
                      className="w-8 h-8 text-white/70 rotate-180"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M10 8C6.134 8 3 11.134 3 15v9h9v-9H6c0-2.206 1.794-4 4-4V8zm13 0c-3.866 0-7 3.134-7 7v9h9v-9h-6c0-2.206 1.794-4 4-4V8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons below the card */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button className="testimonial-btn-prev w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow text-[#422A3C] hover:bg-[#BA7894] hover:text-white hover:border-[#BA7894] transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="testimonial-btn-next w-10 h-10 flex items-center justify-center rounded-full bg-[#422A3C] text-white shadow hover:bg-[#BA7894] transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;