import React from 'react'
import Login from '../../components/LoginPage/Login'
import Register from '../../components/Signup/Register'

function Home() {
  return (
    <div className='w-full h-[100vh]'>
      <div className="border-2 border-slate-800 bg-slate-800 text-white p-5 font-semibold text-xl">
        Welcome To Gym Management System
      </div>
      <div className='w-full bg-cover flex justify-center h-[100%] bg-[url("https://www.pixelstalk.net/wp-content/uploads/images6/Cool-Gym-Background.jpg")]'>
        <div className="w-full lg:flex gap-32">
          <Login/>
          <Register/>
        </div>
      </div>
    </div>
  )
}

export default Home