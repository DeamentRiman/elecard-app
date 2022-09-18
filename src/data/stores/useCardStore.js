import React from 'react';
// import create from 'zustand';

export const CardsList = () => {
    const [cards, setCards] = React.useState([]);
    React.useEffect(() => {
        fetch('http://contest.elecard.ru/frontend_data/catalog.json')
            .then((response) => (response.ok) ? (response.json()) : (() => {throw new Error (`Упс, что то пошло не так. Ошибка ${response.status}`)})())
            .then((cards) => setCards(cards))
            .catch((error) => console.log('Error'));
    }, [])
    return cards;
}
