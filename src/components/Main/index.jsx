import React from "react";
import styles from '../Main/index.module.scss';
import { CardsList } from '../../data/stores/useCardStore';
import { Card } from '../Card/index';
import { FilterBlock } from '../Filters/index';

export const Main = () => {
    let cardsOnLoaded = CardsList();
    console.log(cardsOnLoaded);
    return (
        <main className={styles.main}> 
        <FilterBlock/>         
        {cardsOnLoaded.lenght===0 && (
            <p className={styles.mainWithOutCards}>Карточки не загружены</p>
        )
        }{
            cardsOnLoaded.map((card, index) => {
            return <Card key={index} image={card.image} filesize={card.filesize} timestamp={card.timestamp} category={card.category}/>
            })
        }
        </main>
    )
}