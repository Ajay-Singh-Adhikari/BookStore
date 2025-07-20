import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const Content = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 Spinner control

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-backend-wdxz.onrender.com/book");
        setBook(res.data);
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setLoading(false); // 👈 Data mil gaya, ab spinner hata do
      }
    };
    getBook();
  }, []);

  const filterList = book.filter((data) => data.category === "free");

  return (
    <div className="dark:bg-slate-900 dark:text-white text-black bg-white px-4 md:px-10 py-10">
      <h1 className="font-bold text-xl mb-4">Free Offered Courses</h1>
      <p className="text-xs text-gray-700 dark:text-gray-200 mb-6">
        Grab Your Free Books — Expand Your Knowledge for Free! Dive into our
        curated collection of free books, hand-picked to help you learn, grow,
        and stay inspired — without spending a single penny. This includes — a
        wide range of topics, easy-to-download formats, no hidden costs or
        subscriptions, 100% free and forever yours. Instantly accessible — read
        anytime, anywhere. Carefully selected by experts & readers like you.
      </p>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <ul className="flex overflow-x-auto gap-4 py-10 scrollbar-hide">
          {filterList.map((data) => (
            <Card data={data} key={data.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Content;
