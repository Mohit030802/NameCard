import React from 'react'
import CardForm from '../Components/CardForm'
import CardLayout from '../Components/CardLayout'

const Resume = () => {
  return (
    <>
    <div className='md:grid md:grid-cols-2 justify-center items-center h-screen'>

      <CardForm/>
      <CardLayout/>
    </div>
    </>
  )
}

export default Resume
