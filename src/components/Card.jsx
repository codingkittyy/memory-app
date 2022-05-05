import {useState} from 'react'

function Card({card, handleChoice, flipped, disabled}) {

  return (
    <div className='memoCard' key={card.id} >
        <div className={flipped || card.matched === true ? 'flipped' : '' + 'col-md-2'}>
                <img
                    src={require(`../images/${card.img}`)} 
                    height='150px'
                    className='front shadow'
                />
                <img 
                  src={require(`../images/bg.png`)}
                  onClick = {() => !disabled && handleChoice(card)}
                  className='back shadow'
                  height='150px'
                />
            </div>
        </div>
  )
}

export default Card


