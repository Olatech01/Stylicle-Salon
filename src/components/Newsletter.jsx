import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full flex items-center pb-20 justify-center">
      <div className="flex gap-5 items-center">
        <Image height={353} width={630} src={"/news.svg"} alt="images" />
        <div>
          <h2 className="text-[#141414] text-[45px] font-bold">
            Subscribe to newsletter
          </h2>
          <p className="text-[#555555] text-[18px] font-normal leading-tight">
            Sign up for our newsletter to stay up-to-date on the latest
            promotions, <br /> discounts, and new features releases.
          </p>
          <div className="flex items-center border border-[#ECBFD3] h-[68px] w-[543px] rounded-full px-2.5 gap-3">
            <Mail size={25}/>
            <input type="text" placeholder="Enter your mail" className=" w-[80%] outline-0"/>
            <button className="bg-[#141414] h-[50px] w-[144px] rounded-full text-white font-medium">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
