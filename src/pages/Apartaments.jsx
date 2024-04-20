import React from 'react'
import Header from '../components/Header/Header'
import axios from '../axios.js'
import ApartamentCard from '../components/Apartament/ApartamentCard'
import styles from './Apartaments.module.scss'

const Apartaments = () => {

    const [apartaments, setApartaments] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/apartaments`);
                const apartamentsData = response.data;

                const updatedApartments = await Promise.all(
                    apartamentsData.map(async (apartament) => {
                        const complexDataResponse = await axios.get(`/complexes/${apartament.complexes}`);
                        const complexData1 = complexDataResponse.data;

                        // Используйте 'adress' из квартиры, а не из жилого комплекса
                        return { ...apartament, complexData: { ...complexData1, adress: apartament.adress } };
                    })
                );

                setApartaments(updatedApartments);
            } catch (error) {
                console.error("Ошибка при загрузке данных", error);
            }
        };

        fetchData();
    }, []);

    console.log("apartaments:", apartaments);

    return (
        <>
            <Header />
            <div className={styles.apartaments_wrapper}>

                {apartaments.map((apartament) => {
                    console.log("apartament.adress:", apartament.adress);
                    console.log("apartament.adress:", apartament.area);
                    console.log("apartament.compName:", apartament.compName);

                    return (
                        <ApartamentCard
                            key={apartament._id}
                            adress={apartament.adress}
                            area={apartament.area}
                            entrance={apartament.entrance}
                            floor={apartament.floor}
                            height={apartament.height}
                            numApart={apartament.numApart}
                            planImg={apartament.planImg}
                            price={apartament.price}
                            rooms={apartament.rooms}
                            compName={apartament.complexData.compName}
                            classOf={apartament.complexData.classOf}
                            city={apartament.complexData.city}
                            year={apartament.complexData.year}
                        />
                    );
                })}
            </div>
        </>
    );


}
export default Apartaments