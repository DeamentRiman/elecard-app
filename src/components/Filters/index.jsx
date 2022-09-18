import React from "react";
import styles from '../Filters/index.module.scss';

export const FilterBlock = () => {
    return (
        <div className={styles.mainFilter}>
            <form className={styles.mainFilterForm}>
                <div className={styles.mainFilterCategory}>
                    <label className={styles.mainFilterTitle} for='category'>Сортировака по категории</label>
                    <select className={styles.mainFilterSelect} name='category' id='category'>
                        <option value="noValue">-- Выберите категорию --</option>
                        <option value='animals'>Животные</option>
                        <option value='business'>Бизнес</option>
                        <option value='food'>Еда</option>
                        <option value='health'>Здоровье</option>
                        <option value='places'>Места</option>
                        <option value='science'>Наука</option>
                        <option value='winter'>Зима</option>
                    </select>
                </div>
                <div className={styles.mainFilterCategory}>
                    <label className={styles.mainFilterTitle} for='date'>Сортировака по дате</label>
                    <select className={styles.mainFilterSelect} name='date' id='date'>
                        <option value="">-- Выберите тип сортировки --</option>
                        <option value='toHight'>По возратанию</option>
                        <option value='toLow'>По убыванию</option>
                    </select>
                </div>
                <div className={styles.mainFilterCategory}>
                    <label className={styles.mainFilterTitle} for='name'>Сортировака по названию</label>
                    <input className={styles.mainFilterInput} type="text" name='name' placeholder='Введите название'/>
                </div>
                <div className={styles.mainFilterCategory}>
                    <label className={styles.mainFilterTitle} for='fileSize'>Сортировака по размеру файла</label>
                    <select className={styles.mainFilterSelect} name='fileSize' id='fileSize'>
                        <option value="">-- Выберите тип сортировки --</option>
                        <option value='toHight'>По возратанию</option>
                        <option value='toLow'>По убыванию</option>
                    </select>
                </div>
                <div className={styles.mainFilterCategory}>
                    <label className={styles.mainFilterTitle} for='viewChanger'>Отобразить карточки списком</label>
                    <input className={styles.mainFilterRange} type="range" name='viewChanger' id='viewChanger' min='0' max='1' value='1' step='1'/>
                </div>
                <div className={styles.mainFilterCategory}>
                    <button className={styles.mainFilterButton} type="button">Начальное состояние</button> 
                </div>
            </form>
        </div>
    )
}