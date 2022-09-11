import React from 'react';
import face from '../assets/face.png';
import hotel from '../assets/hotel.png';
import netflix from '../assets/netflix.png';
import coschedule from '../assets/coschedule.png';
import kimaya from '../assets/kimaya.png';
import expedia from '../assets/expedia.png';


const workList = [
  {
    img: coschedule,
    name: "CoShedule Clone",
    demo: "Demo",
    git: "GitHub",
    gitLink: "https://github.com/kiranwithcode/CoSchedule_Clone",
    deployLink: "https://wondrous-hotteok-604287.netlify.app/"
  },
  {
    img: netflix,
    name: "NetFlix Clone",
    demo: "Demo",
    git: "GitHub",
    gitLink: "https://github.com/kiranwithcode/Netflix-Clone",
    deployLink: "https://netflix-clone-kiran.herokuapp.com/"
  },
  {
    img: expedia,
    name: "Expedia Clone",
    demo: "Demo",
    git: "GitHub",
    gitLink: "https://github.com/kiranwithcode/Expedia_Clone",
    deployLink: "https://jolly-tulumba-a0bccf.netlify.app/"
  },
  {
    img: kimaya,
    name: "Kimaya Clone",
    demo: "Demo",
    git: "GitHub",
    gitLink: "https://github.com/kiranwithcode/Expedia_Clone",
    deployLink: "https://jolly-tulumba-a0bccf.netlify.app/"
  },
  {
    img: face,
    name: "Face Recognition",
    demo: "Demo",
    git: "GitHub",
    gitLink: "https://github.com/kiranwithcode/Expedia_Clone",
    deployLink: "https://jolly-tulumba-a0bccf.netlify.app/"
  },
  {
    img: hotel,
    name: "Hotel Management",
    demo: "Demo",
    git: "GitHub",
    gitLink: "https://github.com/kiranwithcode/Expedia_Clone",
    deployLink: "https://jolly-tulumba-a0bccf.netlify.app/"
  }
]
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      {/* main container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some my recent works</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
         {
          workList.map((work, index) =>(
            <div
            key={index+1}
            style={{ backgroundImage: `url(${work.img})`}}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
               {work.name}
              </span>
              <div className="pt-8 text-center">
                <a href={work.deployLink} target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {work.demo}
                  </button>
                </a>
                <a href={work.gitLink} target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {work.git}
                  </button>
                </a>
              </div>
            </div>
          </div>
          ))
         }

         


        </div>
      </div>
      {/* end container */}
    </div>
  );
};

export default Work;
