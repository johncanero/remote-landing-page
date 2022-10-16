import React from "react";
import Image from "next/image";
import HeroImage from "../public/images/heroImage.png";

const Hero = () => {
  return (
    <div>
      <div className="lg:flex lg:justify-center lg:mx-auto font-Poppins">

        {/* Mobile and Tablet */}
        <div className="lg:hidden md:flex md:justify-center">
          <div className="">
            <Image
              width={690}
              height={450}
              className="block"
              src={HeroImage}
              alt="Hero Feature"
            />
          </div>
        </div>

        <div className="md:mx-20 lg:mx-24">
          <h1 className="font-semibold md:mt-4 md:text-7xl lg:text-8xl lg:mt-32 ">
            Make remote work<span className="text-remoteOrange">.</span>
            <span className="text-remoteBlue">.</span>
            <span className="text-remoteLightBrown">.</span>
          </h1>

          <p className="font-medium text-gray-500 text-lg md:mr-56 md:mt-14 lg:mt-16 ">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <button className=" bg-gray-800 text-white font-semibold hover:bg-remoteOrange hover:text-gray-800 py-2 px-4 hover:border-transparent rounded-xl  md:mt-14">
            Learn more
          </button>
        </div>

        {/* Desktop */}
        <div className="sm:hidden md:hidden lg:block lg:mx-18 lg:mr-12 lg:mt-6">
          <div className="">
            <Image
              width={1650}
              height={1220}
              className="block"
              src={HeroImage}
              alt="Hero Feature"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
