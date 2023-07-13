import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose, AiTwotoneMail } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({ SidebarToggle, className }) => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <div
      className={
        className ||
        "flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white align-center"
      }
    >
      {SidebarToggle}
      {!logo && (
        <Link to="/" className="text-xl font-bold">
          GAUGAU.
        </Link>
      )}
      <ul className="hidden md:flex gap-4">
        <Link to="#">Home</Link>
        <Link to="#">About Us</Link>
        <Link to="#">Services</Link>
        <Link to="#">Review</Link>
        <Link to="#">Contact</Link>
      </ul>
      <div className="hidden md:flex text-primary align-center">
        <BiSearch className="mr-2" size={22} />
        <Link to="/login">
          <BsPerson size={22} />
        </Link>
      </div>

      <div
        onClick={handleNav}
        className="md:hidden relative top-1 right-0 z-20 text-black"
      >
        {!nav && <HiOutlineMenuAlt4 size={20} />}
      </div>
      {/* Mobile menu dropdown */}
      {nav && (
        <motion.div
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={
            "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7"
          }
        >
          <div
            onClick={handleNav}
            className="md:hidden absolute top-7 right-4 z-20 text-black"
          >
              <AiOutlineClose size={20} />
          </div>
          <ul className="w-full">
            <h1>
              <Link to="/" className="text-xl font-bold">
                GAUGAU.
              </Link>
            </h1>
            <div className="flex md:hidden justify-between px-2 py-3">
              <Link to="#">Home</Link>
              <Link to="#">About Us</Link>
              <Link to="#">Services</Link>
              <Link to="#">Review</Link>
              <Link to="#">Contact</Link>
            </div>
            <div className="flex flex-col items-center justify-center text-black">
              <button className="my-6">Search</button>
              <Link to="/login" className="text-black">
                Account
              </Link>
            </div>
            {/* <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
            <FaTiktok className="icon" />
            <AiTwotoneMail className="icon" />
          </div> */}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
