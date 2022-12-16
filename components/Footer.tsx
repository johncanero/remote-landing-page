import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="fixed inset-x-0 bottom-0 py-1 text-center font-Poppins bg-zinc-50 lg:text-left dark:bg-zinc-900">
        <div className="p-3 text-center text-gray-800 dark:text-zinc-400">
          © 2022 Copyright:
          <a
            className="ml-1 font-semibold text-gray-800 dark:text-zinc-400"
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
