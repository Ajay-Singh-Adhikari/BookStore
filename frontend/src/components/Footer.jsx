import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-b from-white to-green-200 to-green-500 dark:bg-gradient-to-b dark:from-slate-900 dark:to-green-200 dark:to-green-500 dark:text-white  footer footer-horizontal footer-center text-black rounded p-10">
        <nav className="flex flex-col md:flex-row gap-4">
          <a href="/about" className="link link-hover">
            About us
          </a>
          <a href="/contact" className="link link-hover">
            Contact
          </a>
          <a href="/course" className="link link-hover">
            Books
          </a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/in/ajay-singh-adhikari-039415290"
              className="bg-transparent border border-black dark:border-white rounded-full p-2"
            >
              <FaLinkedin className=" text-black dark:text-white w-4 h-4" />
            </a>
            <a
              href="https://github.com/Ajay-Singh-Adhikari"
              className="bg-transparent border border-black dark:border-white rounded-full p-2"
            >
              <FaGithub className="text-black dark:text-white w-4 h-4" />
            </a>
            <a
              href="https://wa.me/916395712341"
              className="bg-transparent border border-black dark:border-white rounded-full p-2"
            >
              <FaWhatsapp className="text-black dark:text-white w-4 h-4" />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Ajay
            Singh Adhikari
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
