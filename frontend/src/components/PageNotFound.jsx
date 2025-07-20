import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-900 text-black dark:text-white px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-green-500 py-2 px-4 rounded text-white font-bold hover:bg-green-700"
      >
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
