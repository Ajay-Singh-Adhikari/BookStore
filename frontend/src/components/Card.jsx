import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

const Card = ({ data }) => {
  const [authUser] = useAuth();
  return (
    <>
      <li
        key={data.id}
        className="flex-shrink-0 w-64 dark:bg-slate-900 dark:text-white  bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:md:scale-105 active:scale-105 transition-all duration-300"
      >
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-40 object-cover rounded-md"
        />
        <div className="flex space-x-2 items-center mt-3">
          <h2 className="font-semibold text-sm">{data.title}</h2>
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full hover:bg-green-700 cursor-pointer">
            {data.category}
          </span>
        </div>
        <p className="text-gray-600 text-xs mt-2 dark:text-gray-300">
          {data.description}
        </p>
        <div className="mt-5 flex justify-between">
          <button className="text-xs text-black bg-gray-200 px-3 py-1 rounded">
            ₹{data.price}
          </button>
          <button
            onClick={() => {
              {
                authUser
                  ? toast.success("Order complete")
                  : toast.error("Please Login or Signup first");
              }
            }}
            className="text-xs bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700"
          >
            Buy Now
          </button>
        </div>
      </li>
    </>
  );
};
export default Card;
