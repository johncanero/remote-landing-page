import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="fixed inset-x-0 bottom-0 font-Poppins bg-zinc-50 text-center lg:text-left dark:bg-black">
        <div className="text-gray-800 dark:text-gray-200 text-center p-3">
          © 2022 Copyright:
          <a
            className=" text-gray-800 dark:text-gray-200  ml-1 font-semibold"
            target="_blank"
            href="https://www.linkedin.com/in/johncanero/"
            rel="noopener noreferrer"
          >
            John Cañero
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
