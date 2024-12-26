import React, { useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group'
import LogoutIcon from '@mui/icons-material/Logout'

const Sidebar = () => {

    const [greeting, setGreeting] = useState("");

    const greetingMessage = () =>{
        const currentHour = new Date().getHours();
        if(currentHour <12 ){
            setGreeting("Good Morning 🌞");
        } else if (currentHour < 18 ){
            setGreeting("Good Afternoon ☀️");
        } else if (currentHour < 21 ){
            setGreeting("Good Evening 🌕");
        } else {
            setGreeting("Good Night 🌜");
        }
    }

    useEffect(()=>{
        greetingMessage()
    },[])

    return (
        <div className='w-1/4 h-[100vh] border-2 bg-black text-white p-5 font-extralight'>
            <div className="text-center text-3xl">
                Power Zone
            </div>
            <div className="flex gap-5 my-5">
                <div className="w-[100px] h-[100px] rounded-lg">
                    <img className='w-full h-full rounded-full' alt="gym pic" src="https://im.whatshot.in/img/2021/Dec/header-image-3-gym-1640779839.jpg"/>
                </div>
                <div className="">
                    <div className="text-2xl">{greeting}</div>
                    <div className="text-xl mt-1 font-semibold">admin</div>
                </div>
            </div>
            <div className="mt-10 py-10 border-t-2 border-gray-700">
                <div className="flex gap-8 font-semibold text-xl bg-slate-800 p-3 rounded-xl  cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ">
                    <div><HomeIcon/></div>
                    <div>Dashobard</div>
                </div>
                <div className="flex gap-8 mt-5 font-semibold text-xl bg-slate-800 p-3 rounded-xl  cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ">
                    <div><GroupIcon/></div>
                    <div>Members</div>
                </div>
                <div className="flex gap-8 mt-5 font-semibold text-xl bg-slate-800 p-3 rounded-xl  cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ">
                    <div><HomeIcon/></div>
                    <div>Logout</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
