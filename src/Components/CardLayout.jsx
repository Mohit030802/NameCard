import React from 'react'

const ResumeLayout = ({name,age,gender,description,img,verified,id}) => {
  
  let nameJSX
  if(verified){

    nameJSX=<h1><span className='font-bold font-serif'>Name</span> : {name} ✅</h1>
  }
  else{
    nameJSX=<h1><span className='font-bold font-serif'>Name</span> : {name} </h1>
  }
  return (
    <>
    <div className='flex bg-gradient-to-r from-[#20002c] to-[#cbb4d4] p-4 max-w-xl rounded-md hover:scale-95 transition ease-in 0.5s'>

  
      <div className='flex bg-white  mx-auto rounded-md p-4 m-4'>
        
        <div  className='flex flex-col mx-auto  w-[100%] h-[100%] mr-2'>
          <img className='w-[75%] h-[75%] rounded-md' src={img} alt="" />
        <br />


          <button className='flex bg-black rounded-md text-white m-2 p-2 justify-center items-center text-center mt-3'>Download</button>
        </div>

      
      <div className='flex flex-col'>
        {id}
        {nameJSX}
        <p><span className='font-bold font-serif'>Age:</span> {age} yrs</p>
        <p><span className='font-bold font-serif '>Gender : </span> {gender}</p>
        <p><span className='font-bold font-serif'>Description : </span>{description}</p>

      </div>


    </div >
    </div>
    </>
  )
}

export default ResumeLayout
