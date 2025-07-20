import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Logout = ({ setModalOpen }) => {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("User");
      toast.success("Logout Successful");
      setModalOpen(true);
      navigate("/");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div>
      <button
        className="bg-red-500 py-1 rounded text-white font-bold px-4 hover:bg-red-700"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
