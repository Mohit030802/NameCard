import React from 'react'
import CardForm from '../Components/CardForm'
import CardLayout from '../Components/CardLayout'
import img1 from '../assets/img1.jpg'
import me from '../assets/me.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
const Resume = () => {
  let cards=[{
    id:1,
    name:"Mohit",
    age:"20",
    gender:"Male" ,
    description:"Mohit is 20 yrs old. ",
    img:me,
    verified:true
  },{
    id:2,
    name:"Mohit",
    age:"20",
    gender:"Male" ,
    description:"Mohit is 20 yrs old. ",
    img:img1,
    verified:false
  },
  {
    id:3,
    name:"Mohit",
    age:"20",
    gender:"Male" ,
    description:"Mohit is 20 yrs old. ",
    img:img2,
    verified:true
  },{
    id:4,
    name:"Mohit",
    age:"20",
    gender:"Male" ,
    description:"Mohit is 20 yrs old. ",
    img:img3,
    verified:false
  }]
  
  return (
    <>
    <div className='App'>
    
      <CardForm />
    
    <div className='flex flex-wrap justify-center items-center space-x-4 space-y-4'>
      {

        cards.map(card=>
          <CardLayout 
          key={card.id}
          name={card.name}
          age={card.age}
          gender={card.gender}
          description={card.description}
          img={card.img}
          id={card.id}

          />
          )
      }
     
    </div>

      
      
      
      
    </div>
    </>
  )
}

export default Resume
