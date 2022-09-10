import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/kiran.png';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-10 bg-[#0a192f] text-gray-300 ">
      <div className=" ">
        <img src={Logo} alt="logo" style={{ width: '50px' }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>

      {/* hamberger menu*/}
      <div onClick={handleClick} className=" md:hidden z-10 ">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      {/* mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-20 left-0 w-full h-screen flex flex-col justify-center items-center hover:mt-[-5px] duration-500 bg-[#0a192f] text-gray-300 '
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Works</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://kiranwithcode.github.io/codewithkiran/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <FaGithub size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700 ">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://kiranwithcode.github.io/codewithkiran/"
              rel="noreferrer"
            >
              Linkdin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600 ">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://kiranwithcode.github.io/codewithkiran/"
              rel="noreferrer"
            >
              YouTube
              <FaYoutube size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e8495c] ">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://kiranwithcode.github.io/codewithkiran/"
              rel="noreferrer"
            >
              Instagram
              <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
