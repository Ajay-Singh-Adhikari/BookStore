import React, { useState, useEffect } from "react";
import { FiUser } from "react-icons/fi";
import Logout from "./Logout";

const User = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState({ fullName: "", email: "" });

  useEffect(() => {
    try {
      const storedUserRaw = localStorage.getItem("User");

      if (!storedUserRaw) return;
      const storedUser = JSON.parse(storedUserRaw);
      if (
        storedUser.user &&
        storedUser.user.fullName &&
        storedUser.user.email
      ) {
        setUser({
          fullName: storedUser.user.fullName,
          email: storedUser.user.email,
        });
      } else {
        setUser({ fullName: "No Name Found", email: "No Email Found" });
      }
    } catch (error) {
      console.error("Error parsing user from localStorage", error);
      setUser({ fullName: "No Name Found", email: "No Email Found" });
    }
  }, []);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        aria-label="User Account"
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
      >
        <FiUser className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      </button>

      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white dark:bg-slate-800 rounded-lg p-6 w-80 max-w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-gray-100">
              User Info
            </h2>

            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-2 top-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-red-600 hover:text-white cursor-pointer text-xl font-bold dark:hover:bg-red-600 dark:text-white"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="mb-3">
              <strong>Full Name:</strong>
              <p className="text-gray-700 dark:text-gray-300">
                {user.fullName || "N/A"}
              </p>
            </div>

            <div className="mb-5">
              <strong>Email:</strong>
              <p className="text-gray-700 dark:text-gray-300">
                {user.email || "N/A"}
              </p>
            </div>

            <Logout setModalOpen={setModalOpen} />
          </div>
        </div>
      )}
    </>
  );
};

export default User;
