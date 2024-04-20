import express from "express";
import multer from "multer";
import cors from "cors"
import mongoose from "mongoose";
import { registerValidation, loginValidation, postCreateValidation, cardCreateValidation } from './auth.js'
import { CardController, PostController, UserController, ComplexesController, ApartamentController, meetingController } from './controllers/index.js'
import { handleValidationErrors, checkAuth, isAdmin } from './utils/index.js'
const app = express();

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads')
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage })


mongoose.connect(
    "mongodb://127.0.0.1:27017/ConsCom"
)
    .then(() => console.log("DB OKK"))
    .catch((err) => console.log("DB NOT OK", err));
app.use(express.json());
app.use('/uploads', express.static('uploads'))
app.use(cors())
app.get('/', (req, res) => {
    res.send("HELLLLLOO")
})

app.post('/admin/login/', loginValidation, handleValidationErrors, UserController.login)
app.post('/admin/register', registerValidation, handleValidationErrors, UserController.register)
app.get('/admin/me', checkAuth, UserController.getMe)

app.post('/admin/complexes', isAdmin, ComplexesController.create);
app.put('/admin/complexes/:id', isAdmin, ComplexesController.updateComplex);
app.delete('/admin/complexes/:id', checkAuth, isAdmin, ComplexesController.deleteComplex);

app.post('/posts', checkAuth, postCreateValidation, PostController.create)
app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})

app.post('/cards', checkAuth, cardCreateValidation, handleValidationErrors, CardController.create)
app.get('/cards', CardController.getAll)
app.get('/cards/:id', CardController.getOne)
app.delete('/cards/:id', checkAuth, CardController.remove)
app.patch('/cards/:id', checkAuth, cardCreateValidation, handleValidationErrors, CardController.update)

app.post('/complexes', checkAuth, ComplexesController.create)
app.get('/complexes', ComplexesController.getComplexes)
app.get('/complexes/:id', ComplexesController.getComplex)
app.put('/complexes/:id', checkAuth, ComplexesController.updateComplex);
app.delete('/complexes/:id', checkAuth, ComplexesController.deleteComplex);


app.post('/apartaments', checkAuth, ApartamentController.create)
app.get('/apartaments', ApartamentController.getApartaments)
app.get('/apartaments/:id', ApartamentController.getApartament)
app.put('/apartments/:id', checkAuth, ApartamentController.updateApartment);
app.delete('/apartments/:id', checkAuth, ApartamentController.deleteApartment);

app.post('/meeting', meetingController.createMeeting);



app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("SERVER OK");
})



