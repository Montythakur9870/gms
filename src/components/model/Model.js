import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';

const Model = ({handleClose, content, header}) => {
  return (
    <div className='w-full h-[100vh] fixed bg-black bg-opacity-50 text-black top-0 left-0 flex justify-center'>
        <div className="w-1/2 bg-white rounded-lg h-fit mt-32 p-5">
            <div className="flex justify-between">
                <div className="text-4xl font-semibold">{header}</div>
                <div onClick={()=>handleClose()}><ClearIcon sx={{fontSize:"32"}}/></div>
            </div>
            <div className="m-10">Hii This is the main content </div>
            {content}
        </div>
      </div>
  )
}

export default Model
