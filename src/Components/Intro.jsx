import React from 'react'
import {Link} from 'react-router-dom'
const Intro = () => {
    return (
        <>
            

                <div className='flex justify-center items-center text-center rounded-md h-screen'>
                    <div className='flex flex-col p-10 bg-white relative w-1/2 m-auto rounded-xl justify-center items-center text-center'>
                        <h1 className='text-4xl  font-serif font-bold justify-center items-center'>Welcome</h1>
                        <button className='bg-black text-white m-auto mt-2 p-3 rounded font-sans font-semibold'><Link to="/Card">Get Started</Link></button>
                    </div>
                </div>
            
        </>
    )
}

export default Intro
