/* eslint-disable react/no-unescaped-entities */
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
            <div className="hidden md:flex md:justify-left md:mt-16 lg:mt-14">
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
      <div className="mt-6 mb-12 sm:mx-8 md:mx-20 lg:mx-32 md:mt-0">
        <div className="justify-between md:flex">
          {/* Image */}
          <div className="relative overflow-hidden bg-no-repeat bg-cover"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            <div>
              <Link rel="noopener noreferrer" href="/features">
                <a>
                  <Image
                    width={700}
                    height={500}
                    className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-100 rounded-3xl hover:opacity-70"
                    src="/images/remoteWorkFeatureCompressed.jpg"
                    alt="Remote Image Feature"
                  />
                </a>
              </Link>
            </div>
          </div>

          {/* Features - label */}
          <div className="mt-4 md:ml-9 md:mt-0">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Features
            </h2>
            <div className="max-w-lg mt-3 lg:max-w-2xl">
              <p className='text-justify text-md'>
                1. <span className="font-semibold dark:text-remoteLightBrown">Flexibility</span>: Remote work offers more flexibility to employees in terms of when and where they work. This allows them to better balance their personal and professional responsibilities.
              </p>

              <p className='text-justify text-md'>
                2. <span className="font-semibold dark:text-remoteLightBrown">Cost-saving</span>: Remote work eliminates the need for a physical office space, which can save employers money on rent, utilities, and other overhead costs.
              </p>

              <p className='hidden text-justify text-md lg:block'>
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

      {/* Company Section */}
      <div className="mt-6 mb-12 sm:mx-8 md:mx-20 lg:mx-32 md:mt-0">
        <div className="justify-between md:flex">

          {/* Image - Mobile*/}
          <div className="relative block overflow-hidden bg-no-repeat bg-cover md:hidden"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            <div>
              <Link rel="noopener noreferrer" href="/company">
                <a>
                  <Image
                    width={700}
                    height={500}
                    className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-100 rounded-3xl hover:opacity-70"
                    src="/images/companyCompressed.jpg"
                    alt="Company Image Feature"
                  />
                </a>
              </Link>
            </div>
          </div>

          {/* Company - label */}
          <div className="mt-4 md:mt-0 md:mr-10">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Company
            </h2>
            <div className="max-w-lg mt-3 lg:max-w-2xl">
              <p className='text-justify text-md'>
                Welcome to
                <Link href="/">
                  <a>
                    <span className="font-extrabold dark:text-amber-400">&nbsp;Remote</span>
                  </a>
                </Link>,
                the remote work company that's committed to providing a flexible and fulfilling work experience for our team members. We believe that remote work is the future of work, and we're proud to be leading the way in creating a culture of remote work excellence.
              </p>

              <p className='hidden mt-2 text-justify lg:block text-md'>
                Our Commitment to Remote Work:
              </p>

              <p className='hidden mt-2 text-justify text-md lg:block'>
                At Remote, remote work is not just an option - it's a core part of our company philosophy. We believe that remote work allows our team members to be more productive, creative, and engaged in their work, which ultimately leads to better outcomes for our clients and our company.
              </p>

              {/* Link: Read More */}
              <div className="mt-2">
                <Link rel="noopener noreferrer" href="/company">
                  <a className="font-medium dark:text-amber-400 hover:underline">Read more...</a>
                </Link>
              </div>
            </div>
          </div>

          {/* Image - Desktop and Tablet*/}
          <div className="relative hidden overflow-hidden bg-no-repeat bg-cover md:block"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            <div>
              <Link rel="noopener noreferrer" href="/company">
                <a>
                  <Image
                    width={700}
                    height={500}
                    className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-100 rounded-3xl hover:opacity-70"
                    src="/images/companyCompressed.jpg"
                    alt="Company Image Feature"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* Careers Section */}
      <div className="mt-6 mb-12 sm:mx-8 md:mx-20 lg:mx-32 md:mt-0">
        <div className="justify-between md:flex">
          {/* Image */}
          <div className="relative overflow-hidden bg-no-repeat bg-cover"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            <div>
              <Link rel="noopener noreferrer" href="/careers">
                <a>
                  <Image
                    width={700}
                    height={500}
                    className="absolute top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-100 rounded-3xl hover:opacity-70"
                    src="/images/cardCompressed2.jpg"
                    alt="Careers Card"
                  />
                </a>
              </Link>
            </div>
          </div>

          {/* Careers - label */}
          <div className="mt-4 md:ml-9 md:mt-0">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Careers
            </h2>
            <div className="max-w-lg mt-3 lg:max-w-2xl">
              <p className='text-justify text-md'>
                Remote work has become increasingly popular in recent years, especially due to the COVID-19 pandemic. There are many careers that can be done remotely, including:
              </p>

              <p className='mt-2 text-justify text-md'>
                1. <span className="font-semibold dark:text-remoteLightBrown">Software Development</span>: Many software developers work remotely, as long as they have access to a reliable internet connection and a computer with the necessary software.
              </p>

              <p className='hidden text-justify text-md lg:block'>
                2. <span className="font-semibold dark:text-remoteLightBrown">Graphic Design</span>: Graphic designers can work from anywhere as long as they have a computer and access to design software.
              </p>

              <p className='hidden text-justify text-md lg:block'>
                3. <span className="font-semibold dark:text-remoteLightBrown">Marketing</span>: Marketers can work remotely, managing social media accounts, running email campaigns, and developing marketing strategies.
              </p>

              {/* Link: Read More */}
              <div className="mt-2">
                <Link rel="noopener noreferrer" href="/careers">
                  <a className="font-medium dark:text-amber-400 hover:underline">Read more...</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className='flex mt-8 mb-8'>
        <div className='justify-center mx-auto flex w-10/12'>
          <Link rel="noopener noreferrer" href="/about">
            <a>
              <Image
                width={1200}
                height={600}
                className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden transition duration-300 ease-in-out bg-fixed opacity-100 rounded-3xl hover:opacity-80"
                src="/images/remoteWorkAppPresentation.png"
                alt="Remote Work App Presentation"
              />
            </a>
          </Link>
        </div>
      </div>


    </div>
  );
};

export default Hero;
