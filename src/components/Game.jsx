import { useEffect, useState } from 'react'
import Card from './Card'
import {shuffleCards, matchCards, scoreSuccess, scoreUnsuccess, resetScore} from '../redux/cardSlice'
import {useDispatch, useSelector} from 'react-redux'

function Game() {
  const dispatch = useDispatch()
  const cardList = useSelector(state => state.cards.cards)
  const score = useSelector(state => state.cards.score)
  console.log(cardList)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [turns, setTurns] = useState(0)
  const [cards, setCards] = useState([])
  const [disabled, setDisabled] = useState(false)

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(() => {
    dispatch(shuffleCards())
    setCards(cardList)
  }, [])

  console.log(cards)

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if(choiceOne.img === choiceTwo.img){
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.img === choiceOne.img || card.img === choiceTwo) {
              return {...card, matched: true}
            }else {
              return card
            }
          })
        })
        dispatch(scoreSuccess())
        resetTurn()
      }else{
        setTimeout(() => resetTurn(), 1000)
        dispatch(scoreUnsuccess())
      }
    }
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  const handleClick = (e) => {
    dispatch(resetScore())
    dispatch(shuffleCards())
    setTurns(0)
    window.location.reload()
  }

  return (
    <>
      <h1>React Memory Game</h1>
      <button className='btn btn-primary col-md-2' onClick={() => handleClick()}>New Game</button>
      <h1>Score: {score}</h1>
      <h2>Turns: {turns}</h2>
      {cards?.map((card) =>  (
      <div className='container col-md-2 mt-3' key={card.id}>
        <Card 
        card={card} 
        handleChoice={handleChoice}
        flipped = {card === choiceOne || card === choiceTwo || cards.matched}
        disabled = {disabled}
        />
      </div>
      ))}
    </>
  )
}

export default Game
