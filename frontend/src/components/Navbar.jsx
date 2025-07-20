import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiSearch, FiSun, FiMoon } from "react-icons/fi";
import Login from "./Login";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";
import User from "./User";

const Navbar = () => {
  const [authUser] = useAuth();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  return (
    <div
      className={`flex justify-between items-center px-4 md:px-6 lg:px-8 py-2 fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "shadow-[0_8px_30px_rgba(34,197,94,0.4)] backdrop-blur bg-gradient-to-r from-white via-green-300 to-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-700"
          : "shadow-sm bg-gray-200 dark:bg-slate-800"
      } text-black dark:text-white`}
    >
      <div className="flex items-center">
        <div className="lg:hidden">
          <button
            onClick={() => setOpenMenu(true)}
            className="btn btn-ghost p-1 mr-2"
          >
            <HiOutlineMenu className="h-6 w-6" />
          </button>
        </div>
        <a href="/" className="font-bold text-xl text-green-500">
          bookStore
        </a>
      </div>

      <div className="flex items-center space-x-4">
        {/* Desktop Navigation */}
        {authUser && (
          <>
            <ul className="hidden lg:flex menu-horizontal text-sm font-medium space-x-6">
              <li>
                <a href="/" className="hover:text-green-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/course"
                  className="hover:text-green-500 transition-colors"
                >
                  Books
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-green-500 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-green-500 transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
            <label className="hidden ml-2 py-1 px-2 lg:flex items-center border border-gray-300 rounded-md dark:border-gray-600">
              <FiSearch className="h-4 w-4 text-gray-500 dark:text-gray-300" />
              <input
                type="text"
                placeholder="Search"
                className="ml-2 outline-none text-sm bg-transparent w-32 text-black dark:text-white"
              />
            </label>
          </>
        )}

        <label className="mr-0 lg:mr-2 swap swap-rotate relative inline-flex w-10 h-10 items-center justify-center cursor-pointer">
          <input type="checkbox" className="theme-controller" />
          {theme === "light" ? (
            <FiMoon
              className="absolute w-6 h-6 text-black"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <FiSun
              className="absolute w-6 h-6 text-white"
              onClick={() => setTheme("light")}
            />
          )}
        </label>
        {authUser ? <User /> : <Login />}
      </div>

      {openMenu && (
        <div className="fixed top-0 left-0 w-2/3 h-screen bg-white/80 dark:bg-slate-900/90 backdrop-blur z-50 p-6 shadow-xl flex flex-col text-black dark:text-white">
          <button
            onClick={() => setOpenMenu(false)}
            className="self-end text-gray-700 dark:text-gray-300"
          >
            <HiOutlineX className="h-6 w-6" />
          </button>

          <ul className="menu menu-vertical space-y-4 mt-6 text-base font-semibold">
            <li>
              <a href="/" className="hover:text-green-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/course"
                className="hover:text-green-500 transition-colors"
              >
                Books
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-green-500 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-green-500 transition-colors"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
