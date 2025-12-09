import React from 'react'
import styles from './News.module.scss'
import news1 from '../../img/news1.jpg'
import news2 from '../../img/news2.jpg'
const News = () => {
    return (
        <div className={styles.wrapper}>
            <h2>Соңғы жаңалықтар</h2>
            <div className={styles.news_wrapper}>
                <div className={styles.news}>
                    <img src={news1} alt="news" />
                    <div className={styles.author_data}>
                        <p>Ermek Ermek</p>
                        <p>2023 жылғы 16 сәуір</p>
                    </div>
                    <h3>Сыртқы жарықтандыру сіздің жазғы бақшаңызды қалай өзгерте алады</h3>
                    <p>DevOps көмегімен сандық теңсіздікті жою үшін бірнеше жанасу нүктелерін жоққа шығару үшін бета сынағы үшін шар алаңының қосылған құн матрицасын экономикалық белсенділікті анықтау үшін төмен ілулі жемістерді капиталдандырыңыз.</p>
                    <a href="/">View more</a>
                </div>
                <div className={styles.news}>
                    <img src={news2} alt="news" />
                    <div className={styles.author_data}>
                        <p>Asik Asik</p>
                        <p>2023 жылғы 17 сәуір</p>
                    </div>
                    <h3>How Outside Lighting can Transform Your Summer Garden</h3>
                    <p>Capitalize on low-hanging fruit to identify a ballpark value added matrix economically activity to beta test override the multiple touchpoints for offshoring the digital divide with DevOps.</p>
                    <a href="/">View more</a>
                </div>
            </div>

        </div>

    )
}

export default News
