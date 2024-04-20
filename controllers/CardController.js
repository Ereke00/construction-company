import CardModel from "../models/Card.js"

export const getAll = async (req, res) => {
    try {
        const cards = await CardModel.find()
        res.json(cards)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось получить карточки"
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const cardId = req.params.id;
        const doc = await CardModel.findOne({ _id: cardId }).exec();

        if (!doc) {
            return res.status(404).json({
                message: "Карточка не найдена"
            });
        }

        res.json(doc);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось получить карточкyy"
        })
    }
}

export const remove = async (req, res) => {
    try {
        const cardId = req.params.id;
        const doc = await CardModel.findOneAndDelete({ _id: cardId }).exec();

        if (!doc) {
            return res.status(404).json({
                message: "Карточка не найдена"
            });
        }

        res.json({
            success: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не удалось удалить карточку"
        });
    }
}

export const update = async (req, res) => {
    try {
        const cardId = req.params.id
        await CardModel.updateOne(
            {
                _id: cardId,
            },
            {
                title: req.body.title,
                adress: req.body.adress,
                description: req.body.description,
                price: req.body.price,
                area: req.body.area,
                residents: req.body.residents,
                apartaments: req.body.apartaments,
                imageUrl: req.body.imageUrl,
                user: req.userId
            }
        )
        res.json({
            success: true
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удалось обновить карточку"
        })
    }
}


export const create = async (req, res) => {
    try {
        const doc = new CardModel({
            title: req.body.title,
            adress: req.body.adress,
            description: req.body.description,
            price: req.body.price,
            area: req.body.area,
            residents: req.body.residents,
            apartaments: req.body.apartaments,
            imageUrl: req.body.imageUrl,
            user: req.userId
        })
        const post = await doc.save();
        res.json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удалось создать карточку"
        })
    }
}