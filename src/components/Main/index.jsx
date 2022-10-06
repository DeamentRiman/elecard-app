import React from "react";
import styles from '../Main/index.module.scss';
import { Loader } from '../Loader/index';
import { useCardsStore } from '../../data/stores/useCardStore';
import { Card } from '../Card/index';
import { Listing } from '../Listing/index';
import Pagination from '../Pagination/index.jsx';
// import { FilterBlock } from '../Filters/index';

export const Main = () => {
    const SERVER_URI = 'http://contest.elecard.ru/frontend_data/catalog.json';

    const [loading, setLoading] = React.useState(true);
    const {cards, executeCards, setInitialState} = useCardsStore((state => state));
    const [categoryState, setCategoryState] = React.useState('allCategory');
    const [dateState, setDateState] = React.useState('allDate');
    const [nameState, setNameState] = React.useState('allName');
    const [fileSizeState, setFileSizeState] = React.useState('allFileSize');
    const [appearanceState, setAppearanceState] = React.useState('cards');
    const [currentPage, setCurrentPage] = React.useState(1);
    const [cardsPerPage] = React.useState(24);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            executeCards(SERVER_URI);
            setLoading(false);
        }, 0);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    let cardsOnLoaded = cards.slice();

    const lastCardIndex = currentPage * cardsPerPage;
    const firstCardIndex = lastCardIndex - cardsPerPage;

    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    cardsOnLoaded = cardsOnLoaded.filter((card) => { 
        if (categoryState !== 'allCategory') {
            return card.category === categoryState;
        } else return card;
    });

    cardsOnLoaded.sort((a, b) => {
        if (dateState === 'toHight') {
            return a.timestamp - b.timestamp;
        } else if (dateState === 'toLow') {
            return b.timestamp - a.timestamp;
        } else if (dateState === 'allDate') 
            return;
    });

    cardsOnLoaded.sort((a, b) => {
        if (nameState === 'toHight') {
            return a.image - b.image;
        } else if (nameState === 'toLow') {
            return b.image - a.image;
        } else if (nameState === 'allDate') 
            return;
    });

    cardsOnLoaded.sort((a, b) => {
        if (fileSizeState === 'toHight') {
            return a.filesize - b.filesize;
        } else if (fileSizeState === 'toLow') {
            return b.filesize - a.filesize;
        } else if (fileSizeState === 'allFileSize') 
            return;
    });

    const currentCards = cardsOnLoaded.slice(firstCardIndex, lastCardIndex);

    return (
        <main className={styles.main}>
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
                        <fieldset className={styles.mainFilterFieldset}>
                            <legend className={styles.mainFilterLegend}>Сортировка по названию</legend>
                            <label className={styles.mainFilterTitle}>
                                <input className={styles.mainFilterRadio} type="radio" name='name' value='allNames' onClick={(e)=>(setNameState(e.target.value))} defaultChecked/>
                                Без сортировки
                            </label>
                            <label className={styles.mainFilterTitle}>
                                <input className={styles.mainFilterRadio} type="radio" name='name' value='toHight' onClick={(e)=>(setNameState(e.target.value))}/>
                                По возрастанию 
                            </label>
                            <label className={styles.mainFilterTitle}>
                                <input className={styles.mainFilterRadio} type="radio" name='name' value='toLow' onClick={(e)=>(setNameState(e.target.value))}/>
                                По убыванию
                            </label>
                        </fieldset>
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
                                <input className={styles.mainFilterRadio} type="radio" name='appearance' value='list' onClick={(e)=>(setAppearanceState(e.target.value))} />
                                Список
                            </label>
                            <label className={styles.mainFilterTitle}>
                                <input className={styles.mainFilterRadio} type="radio" name='appearance' value='cards' onClick={(e)=>(setAppearanceState(e.target.value))} defaultChecked/>
                                Карточки
                            </label>
                        </fieldset>
                    </div>
                    <div className={styles.mainFilterCategory}>
                        <button className={styles.mainFilterButton} type="button" onClick={(e) => {
                            setCategoryState('allCategory');
                            setDateState('allDate');
                            setNameState('allNames');
                            setFileSizeState('allFileSize');
                            setAppearanceState('cards');
                            cardsOnLoaded = cards.slice();
                            setInitialState(cardsOnLoaded);
                        }}>Начальное состояние</button> 
                    </div>
                </form>
            </div>
            {loading && <Loader/>}
            {cardsOnLoaded.lenght===0 && (
                <p className={styles.mainWithOutCards}>Карточки не загружены</p>
            )
            }{
                currentCards.map((card, index) => {
                    if ( appearanceState === 'cards') {
                        return <Card key = {index} index = {index} image = {card.image} filesize = {card.filesize} timestamp = {card.timestamp} category = {card.category}/>
                    } else {
                        return <Listing key = {index} index = {index} image={card.image} filesize={card.filesize} timestamp={card.timestamp} category={card.category}/>
                    }
                })
            }
            <Pagination cardsPerPage={cardsPerPage} totalCards={cardsOnLoaded.length} paginate={paginate}/>
        </main>
    )
}