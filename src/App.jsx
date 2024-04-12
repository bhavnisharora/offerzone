import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import { Routes, Route } from "react-router-dom";
import './App.css'
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/about" Component={About} exact />
        <Route path="/contact" Component={Contact} exact />
        <Route path="/login" Component={Login} exact />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
