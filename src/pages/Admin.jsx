import React from 'react';
import axios from '../axios.js'
const Admin = () => {
    const [complex, setComplex] = React.useState([])
    const fetchDatas = async () => {
        const response = await axios.get(`/complexes`)
        setComplex(response.data)
        console.log(response)
    }
    React.useEffect(() => {


        // .catch((error) => {
        //     console.error("Ошибка при загрузке данных о ЖК", error);
        // });
        fetchDatas()
    }, []);
    console.log("DATAAAA:", complex)
    const complexDelete = async (complexId) => {
        const token = localStorage.getItem('adminToken'); // Получаем токен из localStorage
        console.log(complexId);
        try {
            const response = await axios.delete(`/admin/complexes/${complexId}`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Устанавливаем токен в заголовок запроса
                },
            });
            fetchDatas();
        } catch (error) {
            console.error('Ошибка при удалении:', error);
        }
    };
    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Название ЖК</th>
                            <th>Город</th>
                            <th>Год постройки</th>
                            <th>Изменить</th>
                            <th>Удалить</th>
                        </tr>
                    </thead>
                    <tbody>
                        {complex.map((complex) => (
                            <tr key={complex._id}>
                                <td>{complex.compName}</td>
                                <td>{complex.city}</td>
                                <td>{complex.year}</td>
                                <td>
                                    <button >Изменить</button>
                                </td>
                                <td>
                                    <button onClick={() => complexDelete(complex._id)}>Удалить</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button>Создать новый ЖК</button>
            </div>
        </div>
    );
};

export default Admin;