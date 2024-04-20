import mongoose from "mongoose";

const ApartamentsSchema = new mongoose.Schema({
    planImg: String,
    adress: String,
    rooms: Number,
    area: Number,
    price: Number,
    floor: Number,
    entrance: Number,
    numApart: Number,
    height: Number,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    complexes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Complexes"
    }
})

const ApartamentsModel = mongoose.model('apartaments', ApartamentsSchema)
export default ApartamentsModel