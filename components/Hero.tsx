import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex font-Poppins">
        <div className="md:mx-28">
          <h1 className="font-semibold md:mt-32 md:text-8xl">Make remote work.</h1>
          <p className="font-medium text-gray-500 text-lg md:mt-20 md:mr-56">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          {/* Button */}

          {/* Companies */}
        </div>
        
        <div className="md:mx-20">
          {/* Image */}
          <h1 className="font-bold">Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Hero;
