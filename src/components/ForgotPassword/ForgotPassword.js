import React, { useState } from 'react'


const ForgotPassword = () => {

    const [emailSubmit, setEmailSubmit] = useState(false);
    const [otpValidate, setOtpValidate] = useState(false);
    const [contentVal, setContentVal] = useState("Submit Your Email");
    const handleSubmit = () => {
        if (!emailSubmit) {
            setEmailSubmit(true)
            setContentVal("Submit Your OTP")
        }else if(emailSubmit && !otpValidate)
            setOtpValidate(true)
            setContentVal("Submit Your New Password")
    }

    return (
        <div className="w-full">
            <div className="w-full ">
                <div className="">Enter Your Name</div>
                <input type='email' className='w-1/2 p-2 rounded-lg border-2 border-slate-400' placeholder='Enter Email' />
            </div>
            {
                emailSubmit && <div className="w-full">
                    <div className="">Enter Your OTP</div>
                    <input type='email' className='w-1/2 p-2 rounded-lg border-2 border-slate-400' placeholder='Enter OTP' />
                </div>
            }
            {
                otpValidate && <div className="w-full">
                    <div className="">Enter Your New Password</div>
                    <input type='email' className='w-1/2 p-2 rounded-lg border-2 border-slate-400' placeholder='Enter Your New Password' />
                </div>
            }
            <div className="p-2 w-[50%] mt-5 border-2 bg-slate-800 text-white mx-auto rounded-lg text-center text-lg hover:bg-white hover:text-black font-semibold cursor-pointer" onClick={() => handleSubmit()}>{contentVal}</div>
        </div>
    )
}

export default ForgotPassword
