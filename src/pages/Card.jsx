import React, { useReducer, useState } from 'react'
import CardForm from '../Components/CardForm'
import CardLayout from '../Components/CardLayout'
import me from '../assets/me.jpg'
import cardDb from '../data/data'
const Resume = ({deleteCard,editCard,updateCard}) => {
  const [editableCard, setEditableCard] = useState(null)
  function cardReducer(cards,action){
    switch(action.type){
      case 'ADD':
        return [...cards,{...action.payload,id:cards.length+1}];
      case 'DELETE':
        return cards.filter(card=>card.id!==action.payload)
      case 'UPDATE':
        const index=cards.findIndex(c=>c.id===action.payload.id)
        const newCard=[...cards]
        newCard.splice(index,1,action.payload)
        setEditableCard(null)
        return newCard;
      default:
        return cards;
    }
  }
  const [cards,dispatch]=useReducer(cardReducer,cardDb);
  // const [cards, setCards] = useState(cardDb)
 
  function onAdd(card){
    // it won't show old additions 
    // setCards([{...card,id:cards.length+1}])
// it will show old adds
    // setCards([...cards,{...card,id:cards.length+1}])

    // Reducer
    // action :{type:'ADD',payload:card}
    
    dispatch({type:'ADD',payload:card})
  }
  // function deleteCard(id){
  //   dispatch({type:'DELETE',payload:id})
  //   // setCards( cards.filter(card=>card.id!==id))
   
  // }
  function editCard(id){
   
    setEditableCard(cards.find(card=>card.id===id))
   
  }
  function updateCard(card){
    dispatch({type:'UPDATE',payload:card})
    // const index=cards.findIndex(c=>c.id===card.id)
    // const newCard=[...cards]
    // newCard.splice(index,1,card)
    // setCards(newCard)
    // console.log(newCard)
  }
  return (
    
    <>
      <div className='App'>

        <CardForm ButtonName="Submit" onAdd={onAdd} editableCard={editableCard} updateCard={updateCard}/>

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
                dispatch={dispatch}
                editCard={editCard}
              />
            )
          }

        </div>





      </div>
    </>
  )
}

export default Resume
