import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from '../models/Users.js'


export const register = async (req, res) => {
    try {

        const password = req.body.password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);


        const doc = new UserModel({
            email: req.body.email,
            fullName: req.body.fullName,
            avatarUrl: req.body.avatarUrl,
            passwordHash: hash,
        })
        const user = await doc.save();

        const token = jwt.sign({
            _id: user._id,
        },
            'secret123',
            {
                expiresIn: '30d',
            }
        )
        const { passwordHash, ...userData } = user._doc
        res.json({
            ...userData,
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удалось зарегистрироваться"
        })
    }
}

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(404).json({
                message: "Пользователь не найден"
            })
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)

        if (!isValidPass) {
            return res.status(404).json({
                message: "Неверный логин или пароль"
            })
        }
        const token = jwt.sign({
            _id: user._id,
        },
            'secret123',
            {
                expiresIn: '30d',
            }
        )
        const { passwordHash, ...userData } = user._doc
        res.json({
            ...userData,
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удалось зарегистрироваться"
        })
    }
}

export const getMe = async (req, res) => {
    try {
        // Извлекаем токен из заголовка Authorization
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: "Требуется токен авторизации" });
        }

        // Верификация токена
        const decoded = jwt.verify(token.replace('Bearer ', ''), 'secret123');

        // Проверка, что токен содержит нужные данные (например, _id пользователя)
        if (!decoded || !decoded._id) {
            return res.status(401).json({ message: "Неверный токен авторизации" });
        }

        const user = await UserModel.findById(decoded._id);

        if (!user) {
            return res.status(404).json({ message: "Пользователь не найден" });
        }

        const { passwordHash, ...userData } = user._doc;
        res.json(userData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Net dostupa" });
    }
}
