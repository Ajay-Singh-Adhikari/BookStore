import Home from "./components/Home";
import Course from "./components/Course";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Signup from "./components/Signup";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-slate-900 dark:text-white">
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Course /> : <PageNotFound />}
          />
          <Route
            path="/contact"
            element={authUser ? <Contact /> : <PageNotFound />}
          />
          <Route
            path="/about"
            element={authUser ? <About /> : <PageNotFound />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
