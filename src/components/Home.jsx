import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import logo from '../assets/kiran.png'

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen  text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <div className='m-auto flex justify-center items-center p-4 mt-28' >
            <img src={logo} style={{backgroundSize:"cover"}} className=" h-[250px] w-[250px]" alt="profile" />
        </div>
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Kiran Kamble
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.{' '}
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
