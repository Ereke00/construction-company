import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    area: {
        type: Number,
        required: true,
        default: 0,
    },
    residents: {
        type: Number,
        required: true,
        default: 0,
    },
    apartaments: {
        type: Number,
        required: true,
        default: 0,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    imageUrl: String
},
    {
        timestamps: true
    }
)

export default mongoose.model('Card', CardSchema)