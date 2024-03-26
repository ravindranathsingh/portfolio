import React from 'react'
import profileDp from '../assets/profileDp.jpg'
import { CiLocationArrow1 } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaCircleArrowRight } from "react-icons/fa6"
import { GoNorthStar } from "react-icons/go";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-row py-28 pt-36 bg-indigo-400">

      <div className="flex flex-col justify-center bg-white w-64 h-96 pl-14 rounded-xl shadow-lg ml-14">
        <div>
          <img src={profileDp} alt="display profile" className="w-40 h-40 my-4 rounded-full"/>
        </div>
        <div>
          <button className="text-3xl w-40 py-2 pl-3 font-bold rounded-lg bg-indigo-600 flex flex-row text-white">
            I'm Ravi <CiLocationArrow1 className="p-0 m-0 pt-1 size-8"/>
            </button>
        </div>
        <div>
          <button className="text-2xl font-bold p-4">Biography</button>
        </div>
      </div>

      <div className="flex flex-col justify-self-center bg-white w-72 h-64 p-6 ml-5 rounded-xl">
        <h2 className="text-3xl font-extrabold py-4">Title</h2>
        <h3 className="text-4xl font-bold py-3 text-gray-500">Technical Support Engineer-II</h3>
      </div>

      <div className="flex flex-col justify-between bg-white w-72 h-64 p-6 ml-5 rounded-xl">
        <span className="flex flex-row justify-evenly">
          <button className="border-2 w-20 h-20 p-2 rounded-full">
            <FaInstagram size={50} className="pl-3 m-0"/>
          </button>
          <button className="border-2 w-20 h-20 p-2 rounded-full">
            <IoLogoLinkedin size={50} className="pl-3 m-0"/>
          </button>
        </span>
        <span className="flex flex-row justify-evenly">
          <h2 className="text-3xl">Profiles</h2>
          <FaCircleArrowRight size={30} className="m-0"/>
        </span>
      </div>

      <div className="bg-white w-60 p-5 h-16 ml-5 rounded-xl relative overflow-hidden">
        <span className="flex flex-row justify-between absolute top-4 left-4 transform -translate-y-1/2 moving-text">
          <GoNorthStar size={30} className="text-indigo-500"/>
          <p className="font-bold text-1xl pl-3 text-nowrap">LATEST WORKS AND LEARNINGS</p>
        </span>
        
      </div>

    </div>
  )
}

export default Home