import React, { useState } from 'react';
import styles from './calBack.module.scss'
import axios from '../../axios'; // Подключаем axios для отправки данных на сервер

const MeetingForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        city: '',
        callbackTime: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Отправляем данные на сервер
            await axios.post('/meeting', formData);
            console.log("udalos otpt")

            // Здесь можно добавить обработку успешной отправки
            e.preventDefault();

            e.target.reset(); // очищаем форму

        } catch (error) {
            console.log("Ne udalos otpt", error)
        }
    };

    return (
        <div className={styles.callBack_wrapper}>
            <h2> Қосымша көмек алу үшін өзңіз жайалы ақпарат қалдырыңыз. Біздің операторлар сізбен байланысқа шығады.</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Тегі"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Есімі"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Телефон номері"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Қала"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Қолайлы уақыт"
                    name="callbackTime"
                    value={formData.callbackTime}
                    onChange={handleChange}
                />
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default MeetingForm;
