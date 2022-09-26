import React from "react";
import styles from '../Card/index.module.scss';

export const Card = ({index, image, filesize, timestamp, category}) => {
    let adress = 'http://contest.elecard.ru/frontend_data/' + image;
    return (
        <article className={styles.card} 
                    category={category} 
                    timestamp={timestamp} 
                    filesize={filesize} index = {index}>
            <div className={styles.cardPicture}>
                <img src={(`${adress}`)} alt={category} className={styles.cardImage}/>
                <button className={styles.cardButton} onClick={(index) => (console.log(index))}>X</button>
            </div>
            <p className={styles.cardTitle}>Yep, just some simple content ecapsulates in the card.</p>
        </article>
    )
}