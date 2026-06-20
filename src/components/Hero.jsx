import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-187.5 bg-cover bg-center"
      style={{
        backgroundImage: "url('/salon.svg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#422A3C] via-[#2d1730]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-xl text-white">
            <p className="text-xs uppercase tracking-wider mb-4">
              Hair Salon, Masseuse, Beauty Salon
            </p>

            <h1 className="text-5xl lg:text-6xl text-[#F7E5C1] font-bold leading-14 mb-6">
              Find a service <br />
              close to you
            </h1>

            <p className="text-sm text-gray-300 mb-8">
              There are many variations of passages of lorem ipsum available,
              majority have suffered alteration in some form.
            </p>

            {/* Search Box */}
            <div className="bg-white rounded-full p-2 flex flex-col md:flex-row items-center gap-2 shadow-lg">
              <div className="flex-1 px-4 w-full">
                <label className="text-[18px] font-bold text-[#BA7894] block">
                  Service Name
                </label>
                <input
                  type="text"
                  placeholder="Book your services..."
                  className="w-full outline-none text-black text-sm"
                />
              </div>

              <div className="hidden md:block h-10 w-px bg-gray-300" />

              <div className="flex-1 px-4 w-full">
                <label className="text-[18px] font-bold text-[#BA7894] block">Address</label>
                <input
                  type="text"
                  placeholder="Where"
                  className="w-full outline-none text-black text-sm"
                />
              </div>

              <button className="bg-[#BA7894] hover:bg-pink-500 text-white px-8 py-3 rounded-full transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
