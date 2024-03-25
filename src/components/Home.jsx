import React from 'react'
import { IoArrowRedo } from "react-icons/io5";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-indigo-50 via-indigo-500 to-indigo-500">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2>
            I'm a Technical Suppport Engineer-II
          </h2>
          <p>
          Working as a Technical Support Engineer-II with 2.5 years of experience at Dell Technologies through Wipro. 
          Backend engineer specializing in critical Storage Area Networks for global institutions, ensuring high availability through proactive and reactive measures.
          </p>
        </div>
        <div>
          <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-blue-500">
            Portfolio
            <span>
              <IoArrowRedo />
            </span>
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Home