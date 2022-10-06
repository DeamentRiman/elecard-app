import React from "react";
import { useCardsStore } from "../../data/stores/useCardStore";
import styles from '../Card/index.module.scss';

export const Card = ({index, image, filesize, timestamp, category}) => {
    const {cardCloser} = useCardsStore((state => state));
    let adress = 'http://contest.elecard.ru/frontend_data/' + image;
    return (
        <article className={styles.card}
                    index = {index}
                    category={category} 
                    timestamp={timestamp} 
                    filesize={filesize}>
            <div className={styles.cardPicture}>
                <img src={(`${adress}`)} alt={category} className={styles.cardImage}/>
                <button className={styles.cardButton} index = {index} onClick={()=>(cardCloser(index))}>X</button>
            </div>
            <p className={styles.cardTitle}>Yep, just some simple content ecapsulates in the card.</p>
        </article>
    )
}