import React from 'react';
import Popup from 'reactjs-popup';
import styles from '../Popup/index.module.scss';

export default (adress) => (
    <Popup trigger={<div className={styles.button} adress={adress}>
            <img src={`${adress}`} className={styles.listTreeImage}/>
        </div>} modal nested >
        {close => (
        <div className={styles.modal}>
            <button className={styles.close} onClick={close}>&times;</button>
            <div className={styles.content}>
                <img src={(`${adress}`)} className={styles.listTreeImage}/>
            </div>
        <div className={styles.actions}>
        </div>
        </div>
        )}
    </Popup>
);