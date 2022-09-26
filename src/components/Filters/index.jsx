import React  from "react";
import styles from '../Filters/index.module.scss';
// import { useCardsStore } from '../../data/stores/useCardStore';

export const FilterBlock = () => {
    const [categoryState, setCategoryState] = React.useState('All');
    const [dateState, setDateState] = React.useState('All');
    const [nameState, setNameState] = React.useState('All');
    const [fileSizeState, setFileSizeState] = React.useState('All');
    const [appearanceState, setAppearanceState] = React.useState('cards');
    const formState = [categoryState, dateState, nameState, fileSizeState, appearanceState];

    return (
        <div className={styles.mainFilter}>
             <form className={styles.mainFilterForm}>
                 <div className={styles.mainFilterCategory}>
                     <fieldset className={styles.mainFilterFieldset}>
                         <legend className={styles.mainFilterLegend}>Сортировака по категории</legend>
                         <label className={styles.mainFilterTitle}>
                             <input className={styles.mainFilterRadio} type="radio" name='category' value='allCategory' onClick={(e)=>(setCategoryState(e.target.value))} defaultChecked/>
                             Все категории
                         </label>
                         <label className={styles.mainFilterTitle}>
                             <input className={styles.mainFilterRadio} type="radio" name='category' value='animals' onClick={(e)=>(setCategoryState(e.target.value))}/>
                             Животные
                         </label>
                         <label className={styles.mainFilterTitle}>
                             <input className={styles.mainFilterRadio} type="radio" name='category' value='business' onClick={(e)=>(setCategoryState(e.target.value))}/>
                             Бизнес
                         </label>
                         <label className={styles.mainFilterTitle}>
                             <input className={styles.mainFilterRadio} type="radio" name='category'value='food' onClick={(e)=>(setCategoryState(e.target.value))}/>
                             Еда
                         </label>
                         <label className={styles.mainFilterTitle}>
                             <input className={styles.mainFilterRadio} type="radio" name='category' value='health' onClick={(e)=>(setCategoryState(e.target.value))}/>
                             Здоровье
                         </label>
                         <label className={styles.mainFilterTitle}>
                             <input className={styles.mainFilterRadio} type="radio" name='category' value='places' onClick={(e)=>(setCategoryState(e.target.value))}/>
                             Места
                         </label>
                         <label className={styles.mainFilterTitle}>
                             <input className={styles.mainFilterRadio} type="radio" name='category' value='science' onClick={(e)=>(setCategoryState(e.target.value))}/>
                             Наука
                         </label>
                         <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='category' value='winter' onClick={(e)=>(setCategoryState(e.target.value))}/>
                             Зима
                         </label>
                     </fieldset>
                 </div>
                 <div className={styles.mainFilterCategory}>
                     <fieldset className={styles.mainFilterFieldset}>
                        <legend className={styles.mainFilterLegend}>Сортировака по дате</legend>
                         <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='date' value='allDate' onClick={(e)=>(setDateState(e.target.value))} defaultChecked/>
                             Без сортировки
                         </label>
                        <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='date' value='toHight' onClick={(e)=>(setDateState(e.target.value))}/>
                             По возрастанию
                         </label>
                         <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='date' value='toLow' onClick={(e)=>(setDateState(e.target.value))}/>
                             По убыванию
                         </label>
                     </fieldset>
                 </div>
                 <div className={styles.mainFilterCategory}>
                     <label className={styles.mainFilterTitle} htmlFor='name'>Сортировака по названию</label>
                     <input className={styles.mainFilterInput} type="text" name='name' id='name' placeholder='Введите название' onChange={(e)=>(setNameState(e.target.value))}/>
                 </div>
                 <div className={styles.mainFilterCategory}>
                     <fieldset className={styles.mainFilterFieldset}>
                         <legend className={styles.mainFilterLegend}>Сортировака по размеру файла</legend>
                         <label className={styles.mainFilterTitle}>
                             <input className={styles.mainFilterRadio} type="radio" name='fileSize' value='allFileSize' onClick={(e)=>(setFileSizeState(e.target.value))} defaultChecked/>
                             Без сортировки
                         </label>
                         <label className={styles.mainFilterTitle}>
                            <input className={styles.mainFilterRadio} type="radio" name='fileSize' value='toHight' onClick={(e)=>(setFileSizeState(e.target.value))}/>
                             По возрастанию
                         </label>
                         <label className={styles.mainFilterTitle}>
                             <input className={styles.mainFilterRadio} type="radio" name='fileSize' value='toLow' onClick={(e)=>(setFileSizeState(e.target.value))}/>
                             По убыванию
                         </label>
                     </fieldset>
                 </div>
                <div className={styles.mainFilterCategory}>
                     <fieldset className={styles.mainFilterFieldset}>
                         <legend className={styles.mainFilterLegend}>Отображение данных</legend>
                         <label className={styles.mainFilterTitle}>
                             <input className={styles.mainFilterRadio} type="radio" name='appearance' value='list' onClick={(e)=>(setAppearanceState(e.target.value))}/>
                             Список
                         </label>
                         <label className={styles.mainFilterTitle}>
                             <input className={styles.mainFilterRadio} type="radio" name='appearance' value='cards' onClick={(e)=>(setAppearanceState(e.target.value))} defaultChecked/>
                             Карточки
                         </label>
                     </fieldset>
                 </div>
                 <div className={styles.mainFilterCategory}>
                     <button className={styles.mainFilterButton} type="button" onClick={(e)=>(console.log(e.target.value))}>Начальное состояние</button> 
                </div>
             </form>
         </div>
    )
}