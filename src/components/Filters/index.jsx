import React, { useState} from "react";
import styles from '../Filters/index.module.scss';

export const FilterBlock = () => {
    const [categotyValue, setCategoryValue] = useState('allCategory');
    const [dateValue, setDateValue] = useState('allDate');
    const [nameValue, setNameValue] = useState();
    const [fileSizeValue, setFileSizeValue] = useState('allFileSize');
    const [viewValue, setViewValue] = useState('cards');
    const [initialValue, setInitialValue] = useState();
    const [formValue, setFormValue] = useState({categotyValue, dateValue,nameValue, fileSizeValue, viewValue, initialValue});
    return (
        <div className={styles.mainFilter}>
            <form className={styles.mainFilterForm} onChange={(e)=>(setFormValue(e.target.value))}>
                <div className={styles.mainFilterCategory}>
                    <fieldset className={styles.mainFilterFieldset}>
                        <legend className={styles.mainFilterLegend}>Сортировака по категории</legend>
                        <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='category' value='allCategory' onChange={(e)=>(setCategoryValue(e.target.value))} defaultChecked/>
                            Все категории
                        </label>
                        <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='category' value='animals' onChange={(e)=>(setCategoryValue(e.target.value))}/>
                            Животные
                        </label>
                        <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='category' value='business' onChange={(e)=>(setCategoryValue(e.target.value))}/>
                            Бизнес
                        </label>
                        <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='category'value='food' onChange={(e)=>(setCategoryValue(e.target.value))}/>
                            Еда
                        </label>
                        <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='category' value='health' onChange={(e)=>(setCategoryValue(e.target.value))}/>
                            Здоровье
                        </label>
                        <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='category' value='places' onChange={(e)=>(setCategoryValue(e.target.value))}/>
                            Места
                        </label>
                        <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='category' value='science' onChange={(e)=>(setCategoryValue(e.target.value))}/>
                            Наука
                        </label>
                        <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='category' value='winter' onChange={(e)=>(setCategoryValue(e.target.value))}/>
                            Зима
                        </label>
                    </fieldset>
                </div>
                <div className={styles.mainFilterCategory}>
                    <fieldset className={styles.mainFilterFieldset}>
                        <legend className={styles.mainFilterLegend}>Сортировака по дате</legend>
                        <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='date' value='allDate' onChange={(e)=>(setDateValue(e.target.value))} defaultChecked/>
                            Без сортировки
                        </label>
                        <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='date' value='toHight' onChange={(e)=>(setDateValue(e.target.value))}/>
                            По возрастанию
                        </label>
                        <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='date' value='toLow' onChange={(e)=>(setDateValue(e.target.value))}/>
                            По убыванию
                        </label>
                    </fieldset>
                </div>
                <div className={styles.mainFilterCategory}>
                    <label className={styles.mainFilterTitle} htmlFor='name'>Сортировака по названию</label>
                    <input className={styles.mainFilterInput} type="text" name='name' id='name' value='' placeholder='Введите название' onChange={(e)=>(setNameValue(e.target.value))}/>
                </div>
                <div className={styles.mainFilterCategory}>
                    <fieldset className={styles.mainFilterFieldset}>
                        <legend className={styles.mainFilterLegend}>Сортировака по размеру файла</legend>
                        <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='fileSize' value='allFileSize' onChange={(e)=>(setFileSizeValue(e.target.value))} defaultChecked/>
                            Без сортировки
                        </label>
                        <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='fileSize' value='toHight' onChange={(e)=>(setFileSizeValue(e.target.value))}/>
                            По возрастанию
                        </label>
                        <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='fileSize' value='toLow' onChange={(e)=>(setFileSizeValue(e.target.value))}/>
                            По убыванию
                        </label>
                    </fieldset>
                </div>
                <div className={styles.mainFilterCategory}>
                    <fieldset className={styles.mainFilterFieldset}>
                        <legend className={styles.mainFilterLegend}>Отображение данных</legend>
                        <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='appearance' value='listing' onChange={(e)=>(setViewValue(e.target.value))}/>
                            Список
                        </label>
                        <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='appearance' value='cards' onChange={(e)=>(setViewValue(e.target.value))} defaultChecked/>
                            Карточки
                        </label>
                    </fieldset>
                </div>
                <div className={styles.mainFilterCategory}>
                    <button className={styles.mainFilterButton} type="button" onClick={(e)=>(setInitialValue(e.target.value))}>Начальное состояние</button> 
                </div>
            </form>
        </div>
    )
}