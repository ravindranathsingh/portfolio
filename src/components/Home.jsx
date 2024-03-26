import React from 'react'
import profileDp from '../assets/git_dp.png'

const Home = () => {
  return (
    <div className="flex flex-row h-screen bg-gradient-to-b from-blue-200 via-blue-300 to-indigo-500">
      <div className="h-screen flex flex-col justify-center px-14">
        <div>
          <img src={profileDp} alt="display profile" className="w-40 h-40 m-2 rounded-full"/>
        </div>
        <div>
          <button className="text-3xl w-40 font-bold bg-white p-2 m-2 rounded-lg">
            I'm Ravi
            </button>
        </div>
        <div>
          <button className="text-2xl font-bold p-4">Biography</button>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold py-4">Title</h2>
        <h3 className="text-5xl font-extrabold">Technical Support <br/ >Engineer-II</h3>
      </div>
    </div>
  )
}

export default Home