import ComplexesModel from '../models/Complexes.js'

export const create = async (req, res) => {
    try {
        if (req.userId !== '65635d8b30a1027af8675f87') {
            return res.status(403).json({
                message: "Недостаточно прав для создания ЖК"
            });
        }
        const doc = new ComplexesModel({
            compName: req.body.compName,
            mainImg: req.body.mainImg,
            city: req.body.city,
            adress: req.body.adress,
            countApart: req.body.countApart,
            startPrice: req.body.startPrice,
            classOf: req.body.classOf,
            typeOf: req.body.typeOf,
            fullImg: req.body.fullImg,
            descriptionOf: req.body.description,
            floors: req.body.floors,
            minArea: req.body.minArea,
            maxArea: req.body.maxArea,
            descriptionYard: req.body.descriptionYard,
            yardImg: req.body.yardImg,
            year: req.body.year,
            user: req.userId,
            apartaments: req.body.apartaments
        })
        const complex = await doc.save();
        res.json(complex);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удалось создать ЖК"
        })
    }
}

export const getComplexes = async (req, res) => {
    try {
        const complexes = await ComplexesModel.find()
        res.json(complexes)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось получить ЖК"
        })
    }
}

export const getComplex = async (req, res) => {
    try {
        const complexId = req.params.id;
        const doc = await ComplexesModel.findOne({ _id: complexId }).exec();

        if (!doc) {
            return res.status(404).json({
                message: "ЖК не найдена"
            });
        }

        res.json(doc);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось получить ЖК"
        })
    }
}
export const updateComplex = async (req, res) => {
    try {
        if (req.userId !== '65635d8b30a1027af8675f87') {
            return res.status(403).json({
                message: "Недостаточно прав для изменения ЖК"
            });
        }
        const complexId = req.params.id;
        const newData = req.body;
        const updatedComplex = await ComplexesModel.findByIdAndUpdate(complexId, newData, { new: true });

        res.json(updatedComplex);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Ошибка при обновлении ЖК"
        })
    }
}


export const deleteComplex = async (req, res) => {
    try {
        const complexId = req.params.id;

        if (req.userId !== '65635d8b30a1027af8675f87') {
            return res.status(403).json({
                message: "Недостаточно прав для удаления ЖК"
            });
        }

        await ComplexesModel.findByIdAndDelete(complexId);

        res.json({ message: "ЖК успешно удален" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Ошибка при удалении ЖК"
        });
    }
};
