import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaCaretDown } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    name: "Login / SignUp",
    link: "/login",
  },
  {
    id: 5,
    name: "List your Business",
    link: "/categories",
  },
];

const DropDownLinks = [
  {
    id: 1,
    name: "Treanding Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  const [isChange, setIsChange] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLocationClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    document.querySelector(".modal").style.animation =
      "slideUp 0.5s ease forwards";
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };
  return (
    <>
      {/* modal toggle */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={handleCloseModal} className="esc_btn">
              <IoClose className="close" />
              <span>Esc</span>
            </button>
            <div className="box">
              <h1>
                Tell Us Your <span>Home Town</span>
              </h1>
              <p>Explore the offers nearby you</p>
              <form action="/jalandhar" onSubmit="" className="city_input">
                <MdLocationPin className="text-2xl" />
                <input
                  type="text"
                  value={isChange}
                  onChange={(e) => setIsChange(e.target.value)}
                  placeholder="Enter your city"
                />
                <button type="button" className="bg-primary leading-4">
                  Use my location
                </button>
              </form>
              <h2>Top Cities</h2>
              <div className="top_cities">
                <Link to="/">Jalandhar</Link>
                <Link to="/">Hyderabad</Link>
                <Link to="/">New Dehli</Link>
                <Link to="/">Mumbai</Link>
                <Link to="/">Chandigarh</Link>
                <Link to="/">Chennai</Link>
                <Link to="/">Pune</Link>
                <Link to="/">Maharashtra</Link>
                <Link to="/">Gujrat</Link>
                <Link to="/">Ahmedabad</Link>
                <Link to="/">Goa</Link>
              </div>
              <div className="app_logo">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="shadow-md bg-white dark:bg-grey-900 dark:text-white duration-200 relative ">
        {/* upper Navbar  */}

        <div
          className="flex justify-between my-2 items-center"
          data-aos="zoom-out"
          data-aos-duration="6000"
        >
          <div className="flex justify-center items-center">
            <form>
              <div className="flex justify-center items-center ml-10">
                <p className="flex font-sans text-gray-500">
                  <span className="text-base mt-1 px-1 ">
                    <MdLocationPin />
                  </span>
                  <label for="cars">Select a location</label>
                </p>
                <button
                  className="ml-3 flex city-name justify-center items-center gap-1 cursor-pointer"
                  onClick={handleLocationClick}
                >
                  Jalandhar
                  <span className="text-2xl">
                    <MdArrowDropDown />
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div>
            <ul className="sm:flex hidden items-center gap-4">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block px-4 hover:text-primary duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              {/* Simple Dropdown and links  */}
              {/* <li className="group relative cursor-pointer">
                <a href="#" className="flex item-center gap-[2px] py-2">
                  Treanding Products
                  <span>
                    <FaCaretDown className="transition-all duration-200 mt-1 group-hover:rotate-180 " />
                    <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white me-5 p-2 text-black shadow-md">
                      <ul>
                        {DropDownLinks.map((data) => (
                          <li key={data.id}>
                            <a
                              href={data.link}
                              className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            >
                              {data.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* lower Navbar  */}
        <div className="bg-black py-2 second-nav">
          <div className="container flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-3">
                <img src={Logo} alt="Logo" className="w-10" />
                <span className="nabla-logo-font ">Offerzone</span>
              </a>
            </div>
            {/* Search bar */}
            <div>
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] text-black transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                />
                <IoMdSearch className="text-grey-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
            </div>
            {/* order button  */}
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Button  */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
