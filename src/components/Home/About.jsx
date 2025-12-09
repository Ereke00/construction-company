import React from 'react'
import styles from './About.module.scss'
import historyPhoto from '../../img/history_content_photo.jpg'
import historyExp from '../../img/exp_img.jpg'
import Services from '../Our_services/Services'
import servicesInfo from '../../mainServices.json'
import Customers from '../Customers_comment/Customers'
import News from '../News/News'
import { Link } from 'react-router-dom'
const About = () => {
    console.log(servicesInfo[0].title);
    const mainServices = ['Коммерческий', 'Жилой', 'Промышленный']
    const [serviceIndex, setServiceIndex] = React.useState(0)
    const onClickService = () => {
        setServiceIndex()
        console.log(serviceIndex);
        console.log(servicesInfo[serviceIndex].title)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.main_disc}>
                    <h2>Қазақстанның жылжымайтын мүлік нарығындағы көшбасшы
                    </h2>
                    <Link to="/apartaments">Жылжымайтын мүліктерді қарау</Link>
                </div>

            </div>
            <div className={styles.history_content}>
                <img src={historyPhoto} alt='history_photo' />
                <div className={styles.img_text_wrap}>

                    <div className={styles.history_text}>
                        <h2>Біз сіздің болашағыңызды қамтамасыз етеміз
                        </h2>
                        <p> Fortress – Қазақстанның жылжымайтын мүлік нарығындағы көшбасшы, ірі инновациялық құрылыс холдингі. Холдинг 1995 жылдан бері жұмыс істейді және осы уақыт ішінде кәсіби және сенімді серіктес ретінде беделге ие болды. Компанияның басты мақсаты – Орталық Азиядағы No1 Construction Tech позициясын сенімді түрде бекіту.

                            <br />
                            Fortress бүгінде құрылымы әртүрлі құрылыс, даму және инжиниринг салаларындағы бөлімдер мен дирекциялардан тұратын әртараптандырылған холдинг болып табылады.

                        </p>
                    </div>
                    <div className={styles.history_exp}>
                        <img src={historyExp} alt="Exper" />
                        <ul>
                            <li>- Сіздің барлық жүйелік талаптарыңыз үшін</li>
                            <li>- Барлық жұмыстарды білікті қызметкерлер атқарады </li>
                            <li>- Тәжірибелі кеңсе қызметкерлерінің болуы </li>
                            <li>- Жұмысқа толық кепілдік</li>
                            <li>- Қолайлы бағадағы жылжымайтын мүлік </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.main_services_wrapper}>
                <div className={styles.main_services_header}>
                    <h1>Біз не ұсынамыз?</h1>
                    <h2> Негізгі қызметтер</h2>
                    <p>Біздің тұрғын үй және коммерциялық электр қондырғыларында үлкен тәжірибеміз бар және ешқандай жұмыс тым аз емес. Клиенттеріміз біздің кәсіпқойлығымызды, жұмыс этикасын және бәсекеге қабілетті бағаны бағалайды.
                    </p>
                </div>
                <div className={styles.main_services_title}>
                    {
                        mainServices.map((serviceId) => (
                            <h1>{serviceId}</h1>
                        ))
                    }
                </div>
                <div className={styles.services_descr_wrapper}>
                    <div className={styles.services_descr}>
                        <div className={styles.services_title_descr}>
                            <h2 >{servicesInfo[0].title}</h2>
                            <p >
                                {servicesInfo[0].description}
                            </p>
                        </div>
                        <img src={servicesInfo[0].imageUrl} alt="desc" />
                    </div>

                </div>
            </div>

        </div >
    )
}

export default About
