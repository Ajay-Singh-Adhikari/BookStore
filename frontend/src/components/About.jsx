import React from "react";

const About = () => {
  return (
    <div className="pt-28 pb-16 px-4 bg-white text-black dark:bg-slate-900 dark:text-white">
      <div className="max-w-3xl mx-auto border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-8 bg-white dark:bg-slate-900">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
          About Ajay's Bookstore
        </h2>

        <p className="mb-4 text-justify leading-relaxed text-gray-700 dark:text-gray-200">
          Welcome to <span className="font-semibold">Ajay's Bookstore</span> —
          your cozy corner for stories, ideas, and endless learning. We’re a
          small but passionate team dedicated to bringing you books that
          inspire, inform, and ignite curiosity.
        </p>

        <p className="mb-4 text-justify leading-relaxed text-gray-700 dark:text-gray-200">
          Our mission is simple: make knowledge accessible to everyone.
          Carefully curated collections, honest recommendations, and a welcoming
          community — that’s what sets us apart. Whether you’re looking for your
          next favorite novel or free courses to grow your skills, you’ll find a
          shelf just for you here.
        </p>

        <p className="mb-4 text-justify leading-relaxed text-gray-700 dark:text-gray-200">
          We believe every book holds the power to transform — and every reader
          deserves a space where they feel at home. Thank you for being part of
          our story. Let’s keep turning pages, together.
        </p>

        <p className="text-center font-semibold text-green-600 mt-6">
          Happy reading! 📚✨
        </p>
      </div>
    </div>
  );
};

export default About;
