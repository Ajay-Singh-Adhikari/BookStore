import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";

const Course = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 Spinner state

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-backend-wdxz.onrender.com");
        setBook(res.data);
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setLoading(false); // 👈 Data aane ke baad spinner hatao
      }
    };
    getBook();
  }, []);

  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen text-black bg-white p-6 flex flex-col justify-center items-center text-center">
      <h1 className="text-xl mt-20 text-center mb-5">
        We're delighted to have you{" "}
        <span className="font-semibold text-green-500">Here! :)</span>
      </h1>
      <p className="max-w-[90%] mx-auto text-xs dark:text-gray-200 text-gray-700 mb-6">
        At Ajay's Bookstore, we believe that every book holds the power to
        transport you to another world, spark new ideas, and open doors you
        never knew existed. Whether you're searching for a beloved classic, a
        new bestseller, or a hidden gem waiting to be discovered, we hope you
        feel right at home among our shelves. Take your time to wander, flip
        through pages, and let curiosity guide you. Our cozy corners are made
        for lingering, our recommendations are shared from the heart, and our
        greatest joy is seeing readers leave with a story that stays with them
        long after the last page is turned. Thank you for stepping into our
        world of words — we can't wait to help you find your next great read.
        Happy browsing, and happy reading!
      </p>
      <Link
        to="/"
        className="px-3 py-1 text-center bg-green-500 text-white hover:bg-green-700 duration-200 transition-all rounded"
      >
        Back
      </Link>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <ul className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-10">
          {book.map((data) => (
            <Card data={data} key={data.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Course;
