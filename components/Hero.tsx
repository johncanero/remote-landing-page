import React from "react";
import Image from "next/image";
import HeroImage from "../public/images/heroImage.png";
import AudioPhile from "../public/images/client-audiophile.svg";
import DataBiz from "../public/images/client-databiz.svg";
import Meet from "../public/images/client-meet.svg";
import Maker from "../public/images/client-maker.svg";


const Hero = () => {
  return (
    <div>
      <div className="lg:flex lg:justify-center lg:mx-auto font-Poppins">
        {/* Mobile and Tablet */}
        <div className="lg:hidden sm:mt-2 md:flex md:justify-center">
          <div>
            <Image
              width={690}
              height={450}
              className="block"
              src={HeroImage}
              alt="Hero Feature"
            />
          </div>
        </div>

        <div className=" sm:mx-8 md:mx-20 lg:mx-20">
          <h1 className="font-semibold text-5xl md:mt-4 md:text-7xl lg:text-8xl lg:mt-32 ">
            Make remote work<span className="text-remoteOrange">.</span>
            <span className="text-remoteBlue">.</span>
            <span className="text-remoteLightBrown">.</span>
          </h1>

          <p className="font-medium text-gray-500 text-lg mt-8 md:mr-56 md:mt-14 lg:mt-14 ">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <button className=" bg-remoteOrange text-gray-800 font-semibold hover:bg-gray-800 hover:text-white py-2 px-4 hover:border-transparent rounded-xl mt-8  md:mt-12">
            Learn more
          </button>

          {/* Clients */}
          <div>
            <div className=" lg:mt-14 flex">
              <div className="mr-5 w-28"><Image className="" src={DataBiz} alt="DataBiz Feature" /></div>
              <div className="mx-10 w-24"><Image className="" src={AudioPhile} alt="AudioPhile Feature" /></div>
              <div className="mx-10 w-24"><Image className="" src={Meet} alt="Meet Feature" /></div>
              <div className="mx-10 w-24"><Image className="" src={Maker} alt="Maker Feature" /></div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="sm:hidden md:hidden lg:block lg:mx-18 lg:mr-14 lg:mt-10">
          <div className="">
            <Image
              width={1700}
              height={1345}
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
