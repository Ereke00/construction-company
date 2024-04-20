import { body } from "express-validator";

export const loginValidation = [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
]

export const registerValidation = [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('fullName').isLength({ min: 3 }),
    body('avatarUrl').optional().isURL(),
]

export const postCreateValidation = [
    body('title', 'Введите загаловок статьи').isLength({ min: 3 }).isString(),
    body('text', 'Введите текст статьи').isLength({ min: 3 }).isString(),
    body('tags', 'Введите тэг статьи').optional().isString(),
    body('iamgeUrl', 'Неверн ссылка изобр').optional().isString(),
]
export const cardCreateValidation = [
    body('title', 'Введите назвние ЖК').isLength({ min: 3 }).isString(),
    body('adress', 'Введите адрес ЖК').isLength({ min: 3 }).isString(),
    body('description', 'Введите адрес ЖК').isLength({ min: 3 }).isString(),
    body('price', 'Введите цену квартиры').optional().isNumeric(),
    body('area', 'Введите площадь жк').optional().isNumeric(),
    body('residents', 'Введите жителей ЖК').optional().isNumeric(),
    body('apartaments', 'Введите количество квартиры').optional().isNumeric(),
]