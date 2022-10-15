import React from "react";
import Image from "next/image";
import HeroImage from "../public/images/heroImage.png";

const Hero = () => {
  return (
    <div>
      <div className="flex md:justify-center md:mx-auto font-Poppins">
        <div className="md:mx-24">
          <h1 className="font-semibold md:mt-32 md:text-8xl">
            Make remote work<span className="text-remoteOrange">.</span>
            <span className="text-remoteBlue">.</span>
            <span className="text-remoteLightBrown">.</span>
          </h1>
          <p className="font-medium text-gray-500 text-lg md:mt-16 md:mr-56">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          {/* Button */}

          {/* Companies */}
        </div>

        <div className="md:mx-18 md:mr-12 md:mt-6">
          <div className="">
            {/* Image */}
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
