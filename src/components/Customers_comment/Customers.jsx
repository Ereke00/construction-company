import React from 'react'
import styles from './Customers.module.scss'
import pfp from '../../img/profile_pfp.jpg'
import prev from '../../img/prev.jpg'
import next from '../../img/next.jpg'
import tfIcon from '../../img/tfIcon.jpg'
import company1 from '../../img/company1.jpg'
import company2 from '../../img/company2.jpg'
import company3 from '../../img/company3.jpg'
import company4 from '../../img/company4.jpg'


const Customers = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.customer_form}>
                <div className={styles.customers_wrapper}>
                    <h2>
                        Клиенттер айтады
                    </h2>
                    <div className={styles.customer_profil}>
                        <img src={pfp} alt="ava" />
                        <h3>Айнұр Айжанқызы <br />
                            Астана
                        </h3>

                    </div>
                    <p>Біз Fortress командасымен бірнеше жақсы тәжірибе алдық. Жақында олар біздің 20 жылдық HVAC жүйесін жаңа, заманауи және тиімдірек жүйеге ауыстырды және ол жақсы жұмыс істеді.
                    </p>
                    <div className={styles.buttons_wrap}>
                        <img src={prev} alt="prev" />
                        <img src={next} alt="next" />
                    </div>
                    <div className={styles.call_info}>
                        <h3>
                            99,9% тұтынушылардың қанағаттануына негізделген

                        </h3>
                        <p>Егер сізде сұрақтар туындаса немесе көмек қажет болса, біздің командаға хабарласыңыз немесе қоңырау шалыңыз
                        </p>
                        <div className={styles.img_wrap}>
                            <img src={tfIcon} alt="call" />
                            <p>8 777 777 7777</p>
                        </div>
                    </div>
                </div>
                <div className={styles.form_wrapper}>
                    <h2>Кездесу формасы
                    </h2>
                    <div className={styles.input_wrap}>
                        <input placeholder='Ваше имя' type="text" />
                        <input placeholder='Е-mail' type="text" />
                        <input placeholder='Номер телефон' type="text" />
                        <input placeholder='Дата' type="text" />
                        <input placeholder='Комментарий' type="text" />
                        <button>Жіберу</button>
                    </div>
                </div>
            </div>
            <div className={styles.companies_trust}>
                <h1>Біздің сенімді үлкен клиенттеріміз!
                </h1>
                <div className={styles.img_wrap}>
                    <img src={company1} alt="comp" />
                    <img src={company2} alt="comp" />
                    <img src={company3} alt="comp" />
                    <img src={company4} alt="comp" />
                </div>
            </div>
        </div>
    )
}

export default Customers
