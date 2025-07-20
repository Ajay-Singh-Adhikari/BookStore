import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.close();
      setTimeout(() => {
        navigate(path);
      }, 100);
    } else {
      navigate(path);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://bookstore-backend-wdxz.onrender.com/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          document.getElementById("my_modal_3").close();
          toast.success("Login Successfull");
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("User", JSON.stringify(res.data));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });

    handleNavigate("/");
  };

  return (
    <div>
      <button
        className="btn bg-black text-white hover:bg-green-500 hover:text-white border-none text-sm px-4 transition-all duration-200 dark:bg-white dark:text-black dark:hover:bg-green-500 dark:hover:text-white"
        onClick={() => {
          document.getElementById("my_modal_3").showModal();
        }}
      >
        Login
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-slate-900 text-black dark:text-white max-w-md w-full rounded-lg shadow-md p-6 relative">
          <button
            onClick={() => handleNavigate("/")}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-white dark:text-black"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                {...register("email", { required: true })}
                className="py-2 px-3 bg-gray-200 text-gray-700 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {errors.email && (
                <span className="text-red-500 mt-[-5px] text-sm">
                  Email is required
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                {...register("password", { required: true })}
                className="py-2 px-3 bg-gray-200 text-gray-700 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {errors.password && (
                <span className="text-red-500 mt-[-5px] text-sm">
                  Password is required
                </span>
              )}
            </div>

            <button
              type="submit"
              className="bg-green-500 py-2 w-full rounded text-white font-bold px-4 hover:bg-green-700 transition"
            >
              Login
            </button>

            <p className="text-sm text-center">
              Not Registered?{" "}
              <span
                className="text-blue-700 underline cursor-pointer"
                onClick={() => handleNavigate("/signup")}
              >
                Signup
              </span>
            </p>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
