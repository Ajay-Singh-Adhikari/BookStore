import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields!");
      return;
    }

    toast.success("Message sent successfully!");

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");

    // Redirect to home after 2 seconds
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-24 pb-14 px-4 bg-white text-black dark:bg-slate-900 dark:text-white">
      <div className="max-w-2xl mx-auto border-2 shadow-md rounded-lg p-6 bg-white dark:bg-slate-900">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="font-semibold">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="py-2 px-4 bg-gray-200 text-gray-800 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
