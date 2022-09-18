import React from "react";
import styles from '../Card/index.module.scss';

export const Card = ({image, filesize, timestamp, category}) => {
    let adress = 'http://contest.elecard.ru/frontend_data/' + image;
    return (
        <article className={styles.card} 
                    category={category} 
                    timestamp={timestamp} 
                    filesize={filesize}>
            <div className={styles.cardPicture}>
                <img src={(`${adress}`)} alt={category} className={styles.cardImage}/>
            </div>
            <p className={styles.cardTitle}>Yep, just some simple content ecapsulates in the card.</p>
        </article>
    )
}