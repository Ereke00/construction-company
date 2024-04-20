import React, { useState } from 'react';
import axios from '../axios'; // Импорт вашего файла axios.js

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/admin/login/', { email, password });

            // Обработка успешной аутентификации
            const { token } = response.data;
            console.log("tttokkenn:", token);

            // Устанавливаем токен в localStorage
            localStorage.setItem('adminToken', token);

            // Устанавливаем токен в заголовок Authorization для будущих запросов
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            window.location.href = '/admin/'; // Перенаправляем на страницу администратора
        } catch (error) {
            // Обработка ошибок аутентификации
            console.error('Ошибка:', error);
            alert('Неправильный email или пароль');
        }
    };

    console.log(password, "/n", email)

    return (
        <div>
            <h1>Администраторский логин</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /><br /><br />

                <label htmlFor="password">Пароль:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br /><br />

                <input type="submit" value="Войти" />
            </form>
        </div>
    );
};

export default AdminLogin;
