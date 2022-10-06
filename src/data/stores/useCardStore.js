// import React from 'react';
import create from 'zustand';
import axios from 'axios';

export const useCardsStore = create((set, get) => ({
    cards: [],
    executeCards: async (url) => {
        const response = await axios.get(url);
        set({ 
            cards: await response.data,
        })
    },
    cardCloser: (index) => {
        const { cards } = get();
        set({
            cards: cards.filter((card, i) => {
                return index !== i;
        })
        });
    },
    setInitialState: (cardsList)=> {
        const { cards } = get();
        set ({
            cards: cardsList
        });
        console.log(cards);
    }
    }))

// export const CardsList = () => {
//     const [cards, setCards] = React.useState([]);
//     React.useEffect(() => {
//         fetch('http://contest.elecard.ru/frontend_data/catalog.json')
//             .then((response) => (response.ok) ? (response.json()) : (() => {throw new Error (`Упс, что то пошло не так. Ошибка ${response.status}`)})())
//             .then((cards) => setCards(cards))
//             .catch((error) => console.log('Error'));
//     }, [])
//     React.useEffect(()=> {
//         localStorage.setItem("storage", JSON.stringify(cards));
//     }, [cards])
//     return cards;
// }