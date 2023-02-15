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
      <div className="lg:flex lg:justify-center font-Poppins">
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
          <h1 className="text-5xl font-semibold md:mt-4 md:text-7xl lg:text-8xl lg:mt-28 ">
            Make remote work<span className="text-remoteOrange">.</span>
            <span className="text-remoteBlue">.</span>
            <span className="text-remoteLightBrown">.</span>
          </h1>

          <p className="mt-8 text-lg font-medium text-gray-50010md:mt-11 lg:mt-14 ">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <button className="flex py-3 mx-auto mt-8 font-semibold text-gray-800 bg-remoteOrange hover:bg-zinc-900 dark:hover:bg-zinc-800 hover:text-white px-28 md:px-6 md:mx-0 hover:border-transparent rounded-xl md:mt-12">
            Learn more
          </button>

          {/* Mobile */}
          <div className="flex md:hidden">
            <div className="m-auto mt-12 mb-28">
              <div className="flex">
                <div className="mx-6 w-28">
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
            <div className="hidden md:flex md:justify-left md:mt-16 md:mb-12 lg:mt-14">
              <div className="mr-5 w-36 md:mb-10">
                <Image className="" src={DataBiz} alt="DataBiz Feature" />
              </div>
              <div className="w-24 mx-10 md:mb-10">
                <Image className="" src={AudioPhile} alt="AudioPhile Feature" />
              </div>
              <div className="w-24 mx-10 md:mb-10">
                <Image className="" src={Meet} alt="Meet Feature" />
              </div>
              <div className="w-24 mx-10 md:mb-10">
                <Image className="" src={Maker} alt="Maker Feature" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="sm:hidden md:hidden lg:block lg:pr-20 lg:mt-20">
          <div className="">
            <Image
              width={1200}
              height={900}
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
