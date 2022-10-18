import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="fixed inset-x-0 bottom-0 bg-gray-100 text-center lg:text-left">
        <div
          className="text-gray-700 text-center p-3"
        >
          © 2021 Copyright:
          <a className="text-gray-800 ml-1 font-semibold" href="https://www.linkedin.com/in/johncanero/">
            John Cañero
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
