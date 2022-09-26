import React from "react";
import styles from '../FilterComponent/index.module.scss';
// удалить компонент
function filterChoise (value) {
    console.log(1);
}

export const FilterComponent = ({filterType, category}) => {
    return (
        <label className={styles.mainFilterTitle}>
            <input type="radio" name = { filterType } value={ category }/>
                {category}
        </label>
    )
}  