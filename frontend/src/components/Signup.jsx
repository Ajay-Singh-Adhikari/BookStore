import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://bookstore-backend-wdxz.onrender.com/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfull");
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("User", JSON.stringify(res.data));
          }, 1000);
        }

        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <div className="min-h-screen flex items-start justify-center pt-24 pb-16 bg-white dark:bg-slate-900 text-black dark:text-white px-4">
      <div className="relative w-full max-w-md border-2 dark:border-white border-gray-300 shadow-md rounded-lg bg-white dark:bg-slate-900 p-8">
        {/* Close Button with Link */}
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-white dark:text-black"
        >
          ✕
        </Link>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

        {/* Full Name */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 mb-4">
            <label className="font-bold">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              {...register("fullName", { required: true })}
              className="py-2 px-3 bg-gray-200 text-gray-700 rounded-md border border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.fullname && (
              <span className="text-red-500 mt-[-5px] text-sm">
                Fullname is required
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 mb-4">
            <label className="font-bold">Email</label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="example@gmail.com"
              className="py-2 px-3 bg-gray-200 text-gray-700 rounded-md border border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.email && (
              <span className="text-red-500 mt-[-5px] text-sm">
                Email is required
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              {...register("password", { required: true })}
              className="py-2 px-3 bg-gray-200 text-gray-700 rounded-md border border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.password && (
              <span className="text-red-500 mt-[-5px] text-sm">
                Password is required
              </span>
            )}
          </div>

          {/* Signup Button + Login Link */}
          <div className="flex flex-col items-center gap-3">
            <button
              type="submit"
              className="bg-green-500 py-2 w-full rounded text-white font-bold px-4 hover:bg-green-700 transition"
            >
              Signup
            </button>
            <p className="text-sm text-center">
              Already Registered?{" "}
              <span
                onClick={() => {
                  document.getElementById("my_modal_3").showModal();
                }}
                className="text-blue-700 underline cursor-pointer"
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
