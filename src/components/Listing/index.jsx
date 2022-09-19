import React from "react";
// import styles from '../Listing/index.module.scss';

export const Listing = ({image, filesize, timestamp, category}) => {
    return (
        <div category={category} timestamp={timestamp} filesize={filesize}>
            <ul>
                <li>image: {image}</li>
                <li>filesize: {filesize}</li>
                <li>timestamp: {timestamp}</li>
                <li>category: {category}</li>
            </ul>
        </div>
    )
}