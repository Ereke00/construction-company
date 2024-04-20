import React from 'react'
import styles from './News.module.scss'
import news1 from '../../img/news1.jpg'
import news2 from '../../img/news2.jpg'
const News = () => {
    return (
        <div className={styles.wrapper}>
            <h2>Latest News</h2>
            <div className={styles.news_wrapper}>
                <div className={styles.news}>
                    <img src={news1} alt="news" />
                    <div className={styles.author_data}>
                        <p>Shekerbek Erzhan</p>
                        <p>16 April 2023</p>
                    </div>
                    <h3>How Outside Lighting can Transform Your Summer Garden</h3>
                    <p>Capitalize on low-hanging fruit to identify a ballpark value added matrix economically activity to beta test override the multiple touchpoints for offshoring the digital divide with DevOps.</p>
                    <a href="/">View more</a>
                </div>
                <div className={styles.news}>
                    <img src={news2} alt="news" />
                    <div className={styles.author_data}>
                        <p>Oral Adlet</p>
                        <p>17 April 2023</p>
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
