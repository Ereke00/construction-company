import ApartamentsModel from './../models/Apartaments.js';

export const create = async (req, res) => {
    try {
        const doc = new ApartamentsModel({
            planImg: req.body.planImg,
            adress: req.body.adress,
            rooms: req.body.rooms,
            area: req.body.area,
            price: req.body.price,
            floor: req.body.floor,
            entrance: req.body.entrance,
            numApart: req.body.numApart,
            height: req.body.height,
            user: req.userId,
            complexes: req.body.complexes,
        })
        const apartament = await doc.save();
        res.json(apartament);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удалось создать квартиру"
        })
    }
}

export const getApartaments = async (req, res) => {
    try {
        const apartaments = await ApartamentsModel.find()
        res.json(apartaments)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось получить квартиры"
        })
    }
}

export const getApartament = async (req, res) => {
    try {
        const apartamentId = req.params.id;
        const doc = await ApartamentsModel.findOne({ _id: apartamentId }).exec();

        if (!doc) {
            return res.status(404).json({
                message: "Квартира не найдена"
            });
        }

        res.json(doc);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось получить квартиры"
        })
    }
}
export const updateApartment = async (req, res) => {
    try {
        const apartmentId = req.params.id;
        const newData = req.body;
        const updatedApartment = await ApartamentsModel.findByIdAndUpdate(apartmentId, newData, { new: true });

        res.json(updatedApartment);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Ошибка при обновлении квартиры"
        })
    }
}

// Удаление данных квартиры
export const deleteApartment = async (req, res) => {
    try {
        const apartmentId = req.params.id;
        await ApartamentsModel.findByIdAndDelete(apartmentId);

        res.json({ message: "Квартира успешно удалена" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Ошибка при удалении квартиры"
        })
    }
}