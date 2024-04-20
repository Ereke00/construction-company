import React, { useState, useEffect } from 'react';
import styles from './Cards.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import { fetchComplexes } from '../redux/slices/complexes';
import Card from '../components/Card/Card';

const Cards = () => {
    const dispatch = useDispatch();
    const { complexes } = useSelector(state => state.complexes);
    const isCardsLoading = complexes.status === 'loading';

    const [cityFilter, setCityFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('');
    const [nameFilter, setNameFilter] = useState('');
    const [classFilter, setClassFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');

    useEffect(() => {
        dispatch(fetchComplexes());
    }, [dispatch]);

    const availableCities = [...new Set(complexes.items.map(complex => complex.city))];
    const availableYears = [...new Set(complexes.items.map(complex => complex.year))];
    const availableClasses = [...new Set(complexes.items.map(complex => complex.classOf))];
    const availablePrices = [...new Set(complexes.items.map(complex => complex.startPrice))];

    const handleApplyFilters = () => {
        const filteredComplexes = complexes.items.filter(complex => {
            return (
                (cityFilter === '' || complex.city.toLowerCase() === cityFilter.toLowerCase()) &&
                (yearFilter === '' || complex.year === parseInt(yearFilter)) &&
                (nameFilter === '' || complex.compName.toLowerCase().includes(nameFilter.toLowerCase())) &&
                (classFilter === '' || complex.classOf.toLowerCase() === classFilter.toLowerCase()) &&
                (priceFilter === '' || complex.startPrice >= parseFloat(priceFilter))
            );
        });

        // Обновление данных после применения фильтров
        // Например, установка состояния для отображения отфильтрованных данных
    };

    return (
        <div>
            <Header />
            <div className={styles.filter_bar}>
                {/* Фильтр по городу */}
                <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
                    <option value="">Барлық қалалар</option>
                    {availableCities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                    ))}
                </select>

                {/* Фильтр по годам */}
                <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
                    <option value="">Берілу уақыты</option>
                    {availableYears.map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                    ))}
                </select>

                {/* Фильтр по названию ЖК */}
                <input
                    type="text"
                    placeholder="Атын енгізңіз"
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                />

                {/* Фильтр по классу ЖК */}
                <select value={classFilter} onChange={(e) => setClassFilter(e.target.value)}>
                    <option value="">Классын таңдаңыз</option>
                    {availableClasses.map((classVal, index) => (
                        <option key={index} value={classVal}>{classVal}</option>
                    ))}
                </select>

                {/* Фильтр по стартовой цене */}
                <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
                    <option value="">Бастапқы бағасы</option>
                    {availablePrices.map((price, index) => (
                        <option key={index} value={price}>{price}</option>
                    ))}
                </select>

                {/* Кнопка применить фильтры */}
                {/* <button onClick={handleApplyFilters}>Применить</button> */}
            </div>

            {/* Отображение отфильтрованных данных */}
            <div className={styles.cards_wrapper}>
                {isCardsLoading ? (
                    <p>Loading...</p>
                ) : (
                    complexes.items
                        .filter(complex => {
                            // Вместо фильтрации здесь можно использовать filteredComplexes
                            return (
                                (cityFilter === '' || complex.city.toLowerCase() === cityFilter.toLowerCase()) &&
                                (yearFilter === '' || complex.year === parseInt(yearFilter)) &&
                                (nameFilter === '' || complex.compName.toLowerCase().includes(nameFilter.toLowerCase())) &&
                                (classFilter === '' || complex.classOf.toLowerCase() === classFilter.toLowerCase()) &&
                                (priceFilter === '' || complex.startPrice >= parseFloat(priceFilter))
                            );
                        })
                        .map((obj, index) => (
                            <div key={index}>
                                <Card
                                    id={obj._id}
                                    mainImg={obj.mainImg}
                                    compName={obj.compName}
                                    city={obj.city}
                                    adress={obj.adress}
                                    countApart={obj.countApart}
                                    startPrice={obj.startPrice}
                                    classOf={obj.classOf}
                                    typeOf={obj.typeOf}
                                    year={obj.year}
                                />
                            </div>
                        ))
                )}
            </div>
        </div>
    );
};

export default Cards;
