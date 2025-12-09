import React from 'react'
import styles from "./ApartamentCard.module.scss"
const ApartamentCard = (props) => {
    const { adress, area, entrance, floor, height, numApart, planImg, price, rooms, compName, classOf, city, floors, year } = props
    console.log("props:", props)
    console.log("price::", price - 0.03 * price);
    return (
        <div className={styles.apart_wrapper}>
            <h4>{compName}</h4>
            <h2>{rooms}-бөлмелі. {area} м²</h2>
            <h3>{price} тг.</h3>
            <h5>{classOf}</h5>
            <img src={planImg} alt="planImg" />
            <p>Пәтер нөмері {numApart}. Пәтер {entrance} кіреберісте, {floor} қабатта орналасқан</p>
            <p>Мекенжайы: {adress}</p>
            <p>Тапсырылу уақыты: {year}</p>
        </div>
    )
}

export default ApartamentCard