import mongoose from "mongoose";

const ComplexesSchema = new mongoose.Schema({
    compName: String,
    mainImg: String,
    city: String,
    adress: String,
    countApart: Number,
    startPrice: Number,
    classOf: String,
    typeOf: String,

    fullImg: String,
    descriptionOf: String,
    floors: Number,
    minArea: Number,
    maxArea: Number,
    descriptionYard: String,
    yardImg: String,
    year: Number,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    apartaments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Apartaments",
    }],
})

const ComplexesModel = mongoose.model('complexes', ComplexesSchema)
export default ComplexesModel