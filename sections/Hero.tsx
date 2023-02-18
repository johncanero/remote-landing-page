import React from "react";
import Link from "next/link";
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

        <div className=" sm:mx-8 md:mx-20 lg:mx-32">
          <h1 className="text-4xl font-bold md:mt-4 md:text-7xl lg:text-8xl lg:mt-28 ">
            Make remote work<span className="text-remoteOrange">.</span>
            <span className="text-remoteBlue">.</span>
            <span className="text-remoteLightBrown">.</span> 
          </h1>

          <p className="mt-8 text-lg font-medium text-gray-500 lg:mr-24 md:mt-11 lg:mt-12 ">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <button className="flex py-3 mx-auto mt-8 font-semibold text-gray-800 bg-remoteOrange hover:bg-zinc-900 dark:hover:bg-remoteLightBrown hover:text-white px-28 md:px-6 md:mx-0 hover:border-transparent rounded-xl md:mt-12">
            Learn more
          </button>

          {/* Mobile */}
          <div className="flex md:hidden">
            <div className="m-auto mt-12">
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
            <div className="hidden md:flex md:justify-left md:mt-16  lg:mt-14">
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

      {/* Features Section */}
      <div className="sm:mx-8 md:mx-20 lg:mx-32 mt-6 md:mt-0 mb-12">
        <div className="md:flex justify-between">
          {/* Image */}
          <div className="relative overflow-hidden bg-no-repeat bg-cover"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            <div>
              <Link rel="noopener noreferrer" href="/features">
                <Image
                  width={600}
                  height={500}
                  className=" rounded-3xl absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-100 hover:opacity-70 transition duration-300 ease-in-out"
                  src="/images/remoteWorkFeatureCompressed.jpg"
                  alt="Remote Work Feature"
                />
              </Link>
            </div>
          </div>

          {/* Features - label */}
          <div className="md:ml-6 mt-6 md:mt-0">
            <h2 className="text-5xl font-bold md:text-5xl">
              Features
            </h2>
            <div className="max-w-md lg:max-w-2xl mt-3">
              <p className='text-justify text-md'>
                1. <span className="font-semibold dark:text-remoteLightBrown">Flexibility</span>: Remote work offers more flexibility to employees in terms of when and where they work. This allows them to better balance their personal and professional responsibilities.
              </p>

              <p className='text-justify text-md'>
                2. <span className="font-semibold dark:text-remoteLightBrown">Cost-saving</span>: Remote work eliminates the need for a physical office space, which can save employers money on rent, utilities, and other overhead costs.
              </p>

              <p className='text-justify text-md hidden lg:block'>
                3. <span className="font-semibold dark:text-remoteLightBrown">Increased Productivity</span>: Studies have shown that remote workers are often more productive than their in-office counterparts, due to fewer distractions and a more comfortable working environment.
              </p>

              {/* Link: Read More */}
              <div className="mt-2">
                <Link rel="noopener noreferrer" href="/features">
                  <a className="font-medium dark:text-amber-400 hover:underline">Read more...</a>
                </Link>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Hero;
