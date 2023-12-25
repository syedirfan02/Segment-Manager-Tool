import React from "react";

const PersonalCard = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-8 rounded-lg shadow-xl w-full md:w-1/3 lg:w-1/4 transform hover:scale-105 transition-transform duration-300">
      <div className="text-white text-center">
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocKmHeM1q6cfPU8ZOHF8bWPAEt-xUL4pRHrbhH1xbA9s5Q=s96-c-rg-br100"
          alt="Syed Irfan"
          className="rounded-full w-20 h-20 mx-auto mb-4 border-4 border-white hover:opacity-80 transition-opacity duration-300"
        />
        <h2 className="text-3xl font-bold mb-4">Syed Irfan</h2>
        <p className="text-gray-200 mb-2">Email: syedirfan8079@gmail.com</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://syedirfan-portfolio.netlify.app/"
          className="text-gray-200 mb-4 inline-block underline hover:text-blue-300 transition-colors duration-300"
        >
          My Portfolio
        </a>
        <div>
          <a
            className="bg-[#1E3ED4] text-white font-bold py-2 px-4 rounded-full hover:bg-blue-400 transition-colors duration-300 focus:outline-none focus:ring focus:border-blue-300 animate-pulse"
            href="https://syedirfan-portfolio.netlify.app/contact"
            target="_blank"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
