import React from 'react'
import me from '../assets/me.jpg'

const ResumeLayout = () => {
  return (
    <>
      <div className= 'flex bg-white max-w-lg mx-auto rounded-md p-2 m-2'>
        <img className='w-48 mr-3 rounded-md' src={me} alt="" />
        <div>
        <h1><span className='font-bold font-serif'>Name</span> : Mohit Kumar Dubey</h1>
        <p><span className='font-bold font-serif'>Age:</span> 20 yrs</p>
        <p><span className='font-bold font-serif '>Gender : </span> Male</p>
        <p><span className='font-bold font-serif'>Description : </span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione possimus iure corporis distinctio repellendus beatae sint blanditiis, eos repellat omnis rem sequi tempora, maxime adipisci.</p>

        </div>


      </div>
    </>
  )
}

export default ResumeLayout
