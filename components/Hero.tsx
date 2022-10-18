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

        <div className=" sm:mx-8 md:mx-20 lg:mx-24">
          <h1 className="font-semibold text-5xl md:mt-4 md:text-7xl lg:text-8xl lg:mt-28 ">
            Make remote work<span className="text-remoteOrange">.</span>
            <span className="text-remoteBlue">.</span>
            <span className="text-remoteLightBrown">.</span>
          </h1>

          <p className="font-medium text-gray-500 text-lg mt-8 md:mr-56 md:mt-14 lg:mt-14 ">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <button className=" bg-remoteOrange text-gray-800 font-semibold hover:bg-gray-800 hover:text-white py-2 px-4 hover:border-transparent rounded-xl mt-8 md:mt-12">
            Learn more
          </button>

          {/* Mobile */}
          <div className="flex md:hidden">
            <div className="m-auto mt-12 mb-28">
              <div className="flex">
                <div className="w-28 mx-6">
                  <Image src={DataBiz} alt="DataBiz Feature" />
                </div>
                <div className="w-24 mx-6">
                  <Image src={AudioPhile} alt="AudioPhile Feature" />
                </div>
              </div>

              <div className="flex">
                <div className="w-24 mx-6 mt-4">
                  <Image className="" src={Meet} alt="Meet Feature" />
                </div>
                <div className="w-24 mx-6 mt-4">
                  <Image className="" src={Maker} alt="Maker Feature" />
                </div>
              </div>
            </div>
          </div>

          {/* Tablet and Desktop: Clients */}
          <div>
            <div className="hidden md:flex md:justify-center md:mt-16 md:mb-12 lg:mt-14">
              <div className="mr-5 w-28 md:mb-10">
                <Image className="" src={DataBiz} alt="DataBiz Feature" />
              </div>
              <div className="mx-10 w-24 md:mb-10">
                <Image className="" src={AudioPhile} alt="AudioPhile Feature" />
              </div>
              <div className="mx-10 w-24 md:mb-10">
                <Image className="" src={Meet} alt="Meet Feature" />
              </div>
              <div className="mx-10 w-24 md:mb-10">
                <Image className="" src={Maker} alt="Maker Feature" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="sm:hidden md:hidden lg:block lg:mx-18 lg:mr-14 lg:mt-12">
          <div className="">
            <Image
              width={1770}
              height={1370}
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
