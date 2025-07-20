import React from "react";
import { MdEmail } from "react-icons/md";
import { useAuth } from "../context/AuthProvider";

const Hero = () => {
  const [authUser] = useAuth();
  return (
    <div className="text-black dark:text-white flex items-center px-4 md:px-10 bg-white dark:bg-slate-900 flex-col-reverse space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 pt-20">
      <div className="w-full sm:w-1/2 pt-10 flex flex-col space-y-4 items-baseline justify-center">
        <h1 className="text-2xl sm:text-3xl font-bold">
          bookStore welcomes you here to learn something{" "}
          <span className="text-green-500">new everyday!!!</span>
        </h1>
        <p className="text-xs text-gray-700 dark:text-gray-200 mt-2">
          Here every shelf holds a new adventure, a fresh idea, and a story
          waiting just for you. Browse, discover, and let your next favorite
          book find you. Happy reading!
        </p>

        <label className="input validator bg-white dark:bg-slate-800 flex border border-gray-700 dark:border-gray-600 w-full px-2 py-1 items-center space-x-2 rounded-md">
          <MdEmail className="text-gray-600 dark:text-gray-300 text-lg" />
          <input
            type="email"
            placeholder="ajayadhkari10c@gmail.com"
            required
            readOnly
            className="bg-transparent text-black dark:text-white placeholder:text-gray-400 focus:outline-none w-full"
          />
        </label>

        <div className="validator-hint hidden">Enter valid email address</div>

        <a
          href={authUser ? "mailto:ajayadhikari10c@gmail.com" : "#"}
          onClick={(e) => {
            if (!authUser) {
              e.preventDefault();
              document.getElementById("my_modal_3").showModal();
            }
          }}
          className="bg-green-500 py-2 rounded text-white font-bold px-4 hover:bg-green-700"
        >
          Send Queries
        </a>
      </div>

      <div className="w-full sm:w-1/2 p-2 flex justify-center items-center mt-6">
        <img
          src="banner.jpg"
          alt="book"
          className="max-w-sm h-auto object-contain rounded-md"
        />
      </div>
    </div>
  );
};

export default Hero;
