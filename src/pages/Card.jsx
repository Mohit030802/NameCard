import React, { useState } from 'react'
import CardForm from '../Components/CardForm'
import CardLayout from '../Components/CardLayout'
import me from '../assets/me.jpg'
import cardDb from '../data/data'
const Resume = () => {
  const [cards, setCards] = useState(cardDb)
  function onAdd(card){
    setCards([{...card,id:cards.length+1}])
  }
  return (
    
    <>
      <div className='App'>

        <CardForm ButtonName="Submit" onAdd={onAdd}/>

        <div className='flex flex-wrap justify-center items-center space-x-4 space-y-4'>
       
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
