import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import { Routes, Route } from "react-router-dom";
import './App.css'
import ModalParent from "./components/modal/ModalParent";
import ScrollButton from "./components/ScrollButton";
import AboutModal from "./components/modal/aboutmodal/AboutModal";
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
      {/* <Navbar /> */}
      <ModalParent />
      <ScrollButton />
      <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/about" Component={AboutModal} exact />
        <Route path="/contact" Component={Contact} exact />
        <Route path="/login" Component={Login} exact />
        <Route path="/register" Component={Register} exact />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
