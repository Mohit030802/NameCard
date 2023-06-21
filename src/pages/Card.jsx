import React, { useState } from 'react'
import CardForm from '../Components/CardForm'
import CardLayout from '../Components/CardLayout'
import me from '../assets/me.jpg'
import cardDb from '../data/data'
const Resume = () => {
  const [cards, setCards] = useState(cardDb)
  return (
    <>
      <div className='App'>

        <CardForm />

        <div className='flex flex-wrap justify-center items-center space-x-4 space-y-4'>
        <button className='flex justify-center items-center bg-black text-white rounded-md p-2' onClick={() => {
          setCards([...cards, {
            id: cards.length + 1,
            name: "jack",
            age: "20",
            gender: "Male",
            description: "Mohit is 20 yrs old. ",
            img: me,
            verified: true
          }])
        }}>ADD</button>
          {

            cards.map(card =>
              <CardLayout
                key={card.id}
                name={card.name}
                age={card.age}
                gender={card.gender}
                description={card.description}
                img={card.img}
                id={card.id}
                onDownload={() => console.log("Downloading", card.name)}
                onStop={() => console.log("Downloading stop", card.name)}
              />
            )
          }

        </div>





      </div>
    </>
  )
}

export default Resume
