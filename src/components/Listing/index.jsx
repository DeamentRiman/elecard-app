import React from "react";
import styles from '../Listing/index.module.scss';
import Popup from 'reactjs-popup';
// import Popup from "../Popup";
import 'reactjs-popup/dist/index.css';
import Moment from 'react-moment';

// import styles from '../Popup/index.module.scss';

export const Listing = ({index, image, filesize, timestamp, category}) => {
    let adress = 'http://contest.elecard.ru/frontend_data/' + image;
    Moment.globalFormat = 'dd.mm.yyyy';

    return (
        <div className={styles.list} index = {index} category={category} timestamp={timestamp} filesize={filesize}>
            <ul className={styles.listTree} index = {index}>
                <li className={styles.listTreeParent}> { index + 1 } element</li>
                <ul className={styles.listTreeSubList}>
                    <li>
                    <Popup trigger={<div className={styles.listTreeButton} adress={adress}>
                            <img src={`${adress}`} className={styles.listTreeImage} alt={`${category}`}/>
                        </div>} modal nested >
                        {close => (
                        <div className={styles.listTreeModal}>
                            <button className={styles.listTreeClose} onClick={close}>&times;</button>
                            <div className={styles.listTreeContent}>
                                <img src={(`${adress}`)} className={styles.listTreeImage} alt={`${category}`}/>
                            </div>
                        <div className={styles.listTreeActions}>
                        </div>
                        </div>
                        )}
                    </Popup>
                    </li>
                    <li>filesize: {filesize}</li>
                    <li>timestamp: <Moment unix>{timestamp}</Moment></li>
                    <li>category: {category}</li>
                </ul>
            </ul>
        </div>
    )
}