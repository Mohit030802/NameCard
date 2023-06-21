import React from 'react'


const ResumeForm = () => {
  


  return (
    <div>
      <div className="max-w-lg mx-auto bg-white rounded-md p-4 m-4">
        <h1 className='text-center justify-center items-center m-2 font-bold text-4xl'>Build your Card</h1>
        <form action="">
          
            <div className='mb-4'>
                <label className='block text-gray-700 font-bold'>Name</label>
                <input type="text" className='appearance-none leading-tight focus:outline-none focus:shadow-outline border rounded w-full py-2 px-3' placeholder='Enter your Full name'/>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 font-bold'>Age</label>
                <input type="number" className='appearance-none leading-tight focus:outline-none focus:shadow-outline border rounded w-full py-2 px-3' placeholder='Enter your age'/>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 font-bold'>Gender</label>
              <select className='appearance-none leading-tight focus:outline-none focus:shadow-outline border rounded w-full py-2 px-3'>
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Others</option>
              </select>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 font-bold'>Description</label>
                <textarea type="text" className='appearance-none leading-tight focus:outline-none focus:shadow-outline border rounded w-full py-2 px-3' placeholder='Tell Us about Yourself'/>
            </div>
          <button className='flex justify-center items-center bg-black text-white rounded-md p-2' >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ResumeForm
