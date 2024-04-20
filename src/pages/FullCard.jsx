import React from 'react'
import styles from './FullCard.module.scss'
import { useParams } from 'react-router-dom';
import axios from '../axios.js';
import Header from '../components/Header/Header.jsx'
const FullCard = () => {
    const { id } = useParams()
    const [complex, setComplex] = React.useState([])
    React.useEffect(() => {
        axios.get(`/complexes/${id}`)
            .then((response) => {
                console.log(id)
                console.log("data:", response.data)
                setComplex(response.data);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке данных о ЖК", error);
            });
    }, [id]);
    console.log("DATAAAA:", complex)
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <img className={styles.fullImg} src={complex.fullImg} alt="" />

                <div className={styles.main_inf}>
                    <h1>{complex.compName}</h1>
                    <p>{complex.descriptionOf}</p>
                </div>

                <div className={styles.count_inf_wrap}>
                    <div className={styles.count_inf}>
                        <p><span>{complex.floors}<br /></span>
                            этажға дейін
                        </p>
                    </div>
                    <div className={styles.count_inf}>
                        <p><span>{complex.minArea}<br /></span>
                            ең минималды ауданы
                        </p>
                    </div>
                    <div className={styles.count_inf}>
                        <p><span>{complex.maxArea}<br /></span>
                            ең максималды ауданы
                        </p>
                    </div>
                    <div className={styles.count_inf}>
                        <p><span>{complex.countApart}<br /></span>
                            пәтер саны
                        </p>
                    </div>
                    <div className={styles.count_inf}>
                        <p><span>{complex.startPrice} тг.<br /></span>
                            пәтерлердің бастапқы бағасы
                        </p>
                    </div>

                </div>

                <div className={styles.yard_inf_wrap}>
                    {/* <h1>Көгалдандырылған аула</h1> */}
                    <p>{complex.descriptionYard}</p>
                    <img src={complex.yardImg} alt="yard img" />
                </div>
            </div>
        </div>
    )
}

export default FullCard