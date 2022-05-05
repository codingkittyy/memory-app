import { createSlice, nanoid } from "@reduxjs/toolkit";
import imageData from "../components/imageData";

export const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        score: 0,
        cards: [
            {
                img: '1.jpg',
                matched: false,
            },
            {
                img: '2.jpg',0
                matched: false,
            },
            {
                img: '3.jpg',
                matched: false,
            },
            {
                img: '4.jpg',
                matched: false,
            },
            {
                img: '5.jpg',
                matched: false,
            },
            {
                img: '6.jpg',
                matched: false,
            },
            {
                img: '7.jpg',
                matched: false,
            },
            {
                img: '8.jpg',
                matched: false,
            },
            {
                img: '9.jpg',
                matched: false,
            },
            {
                img: '10.jpg',
                matched: false,
            },
            {
                img: '11.jpg',
                matched: false,
            },
            {
                img: '12.jpg',
                matched: false,
            },
            {
                img: '1.jpg',
                matched: false,
            },
            {
                img: '2.jpg',
                matched: false,
            },
            {
                img: '3.jpg',
                matched: false,
            },
            {
                img: '4.jpg',
                matched: false,
            },
            {
                img: '5.jpg',
                matched: false,
            },
            {
                img: '6.jpg',
                matched: false,
            },
            {
                img: '7.jpg',
                matched: false,
            },
            {
                img: '8.jpg',
                matched: false,
            },
            {
                img: '9.jpg',
                matched: false,
            },
            {
                img: '10.jpg',
                matched: false,
            },
            {
                img: '11.jpg',
                matched: false,
            },
            {
                img: '12.jpg',
                matched: false,
            },
        ],
        turns: 0,
        },
    reducers:{
        shuffleCards: (state) => {
            const shuffledCards = [...state.cards, ...state.cards]
            .slice(0, 24)
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id:nanoid()}));
           
            state.cards = shuffledCards;
            state.turns = 0;
        },
        matchCards: (state, action) => {
            let card = action.payload;
            const newCards = state.cards.map((tmp) => {
                if(card.img === tmp.img){
                    return {...tmp}
                }else{
                    return tmp
                }
            })
            state.cards = newCards
        },
        scoreSuccess: (state) => {
            state.score += 50;
        },
        scoreUnsuccess: (state) => {
            state.score -= 10;
        },
        resetScore: (state) => {
            state.score = 0;
        }
    }
})

export const {shuffleCards,matchCards, scoreSuccess, scoreUnsuccess, resetScore} = cardSlice.actions;
export default cardSlice.reducer
