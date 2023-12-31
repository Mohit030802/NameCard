import React, { useEffect, useState } from 'react'
import me from '../assets/me.jpg'
const initialState={
  name:'',
  age:'',
  description:'',
  img: me,
}
const ResumeForm = ({ ButtonName,onAdd,editableCard,updateCard}) => {
  const [card,setCard]=useState(initialState)
  // function handleClick(e) {
  //   e.preventDefault();
  //   omSmash();
  // }
  

  function handleSubmit(e){
    e.preventDefault();
    if(editableCard){
      updateCard(card)
    }
    else{

      onAdd(card)
    }
    setCard(initialState)
    // console.log(card)

  }
  function handleChange(e){
    // console.log(e.target.name,e.target.value);
    setCard({...card,
      [e.target.name]:e.target.value,
      
    })
    
  }
  useEffect(()=>{
    // console.log("object")
    if(editableCard){

      setCard(editableCard)
    }
  },[editableCard])

  return (
    <div>
      <div className="max-w-lg mx-auto bg-black text-white rounded-md p-4 m-4">
        <h1 className='text-center justify-center items-center m-2 font-bold text-4xl'>Build your Card</h1>
        <form action="" className='text-white'>

          <div className='mb-4 text-white'>
            <label className='block  font-bold' >Name</label>
            <input type="text" name="name" value={card.name}  className='appearance-none leading-tight focus:outline-none focus:shadow-outline border rounded w-full py-2 px-3' onChange={handleChange} placeholder='Enter your Full name' />
          </div>
          <div className='mb-4'>
            <label className='block text-white font-bold'>Age</label>
            <input type="number" name="age" value={card.age} className='appearance-none leading-tight focus:outline-none focus:shadow-outline border rounded w-full py-2 px-3'  onChange={handleChange} placeholder='Enter your age' />
          </div>
          <div className='mb-4'>
            <label className='block text-white font-bold' >Gender</label>
            <select name="gender" value={card.gender} onChange={handleChange} className='appearance-none leading-tight focus:outline-none text-black focus:shadow-outline border rounded w-full py-2 px-3'>
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Others</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block text-white font-bold'>Description</label>
            <textarea type="text" name="description" value={card.description} className='appearance-none leading-tight focus:outline-none focus:shadow-outline border rounded w-full py-2 px-3'  onChange={handleChange} placeholder='Tell Us about Yourself' />
          </div>
          <button className='flex justify-center items-center bg-white text-black rounded-md p-2' 
          onClick={handleSubmit}
          
          >
            {editableCard?"Edit":"Submit"}</button>
        </form>
      </div>
    </div>
  )
}

export default ResumeForm
