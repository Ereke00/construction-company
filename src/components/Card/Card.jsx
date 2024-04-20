import React from 'react'
import styles from './Card.module.scss'
import { Link } from 'react-router-dom'
// import photo from '../../../uploads/photo-1506526161669-902c6c94f985.jpeg'
// import { useDispatch, useSelector } from 'react-redux'

// import { fetchCards } from '../redux/slices/cards'
const Card = ({
    id,
    mainImg,
    compName,
    city,
    adress,
    countApart,
    startPrice,
    classOf,
    typeOf
}) => {
    // const dispatch = useDispatch()
    // const { cards } = useSelector(state => state.cards)
    // const isCardsLoading = cards.status === 'loading'
    // React.useEffect(() => {
    //     dispatch(fetchCards())
    // }, [])


    return (
        <div className={styles.wrapper}>
            <div className={styles.image_container}>
                <img src={mainImg} alt="alt" />
            </div>
            <div className={styles.text_wrapper}>
                <Link to={`/complexes/${id}`}>
                    <h1>{compName}</h1>
                </Link>
                <p>{city} қаласы, {adress}</p>
                <p><span>Пәтер саны:</span> {countApart}</p>
                <p><span>Пәтер құны:</span> {startPrice} теңгеден басталады.</p>
                <p><span>Класс:</span> {classOf}</p>
            </div>
        </div>
    )
}

export default Card
