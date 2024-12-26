import React from 'react'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const Member = () => {
  return (
    <div className='text-black p-5 w-3/4 '>
     {/* block for banner */}
      <div className='border-2 bg-slate-900 flex justify-between w-full text-white rounded-lg p-3'>
        <div className="border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black">Add member<FitnessCenterIcon/></div>
        <div className="border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black">Membership<AddIcon/></div>
      </div>

      {/* block for back to dahsboard button */}

      <Link to={'/dashboard'}><ArrowBackIcon /> Back to Dashboard Page </Link>
    </div>
  )
}

export default Member
