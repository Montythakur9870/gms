import React,{useState} from 'react'
import Model from '../model/Model.js'
import ForgotPassword from '../ForgotPassword/ForgotPassword'

const Register = () => {

  const [forgotPassword, setForgotPassword] = useState(true);

  const handleClose = () =>{
    setForgotPassword(prev=>!prev);
  }
  

  return (
      <div className="customSignup w-1/3 p-10 mt-20 ml-20 bg-gray-50 bg-opacity-50 h-[450px] overflow-y-auto">
            <div className="font-sans text-white text-center text-3xl">Register Your Gym</div>
            <input type='email' className='w-full my-10 p-2 rounded-lg' placeholder='Enter Email' />
            <input type='text' className='w-full mb-10 p-2 rounded-lg' placeholder='Enter Gym Name' />
            <input type='text' className='w-full mb-10 p-2 rounded-lg' placeholder='Enter Username' />
            <input type='password' className='w-full mb-10 p-2 rounded-lg' placeholder='Enter password' />
            <input type='file' className='w-full mb-10 p-2 rounded-lg' />
            <img src="https://png.pngtree.com/background/20230516/original/pngtree-an-empty-gym-with-all-of-the-machines-picture-image_2611112.jpg" className=' mb-10 h-[200px] w-[250px]' />
            <div className="p-2 w-[80%] border-2 bg-slate-800 text-white mx-auto rounded-lg text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer">Register</div>
            <div className="p-2 w-[80%] mt-5 border-2 bg-slate-800 text-white mx-auto rounded-lg text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer" onClick={() => setForgotPassword(true)}>Forget Password</div>
            {forgotPassword && <Model header="Forgot Pasword" handleClose={handleClose} content= {<ForgotPassword/>}/>}
          </div>
  )
}

export default Register
