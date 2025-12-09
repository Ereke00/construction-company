import React from 'react'
import styles from './Services.module.scss'
import services from '../../services.json'
import listComplexes from '../../listComplex.json'
const Services = () => {
    return (
        <div className={styles.services_wrap}>
            <h2>Біздің қызметтер</h2>
            <p>Біз қолайлы бағамен тұрмыстық және коммерциялық нысандарға арналған электр қызметтерінің кешенді спектрін ұсынамыз.</p>
            <div className={styles.card_wrap} >
                {
                    listComplexes.map((listComplex) => (
                        <div className={styles.info_wrap} >
                            <img src={listComplex.Фото_ЖК} alt="air" />
                            <h2>{listComplex.Название_ЖК}</h2>
                            <p>{listComplex.Описание_ЖК}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services
