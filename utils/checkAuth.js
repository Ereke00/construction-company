import jwt from "jsonwebtoken";
const checkAuth = (req, res, next) => {
    const token = req.headers.authorization;
    console.log("xZCZXCZXCXZ:", req.headers.authorization)
    console.log("FFFFF:", req)
    console.log("ADSDSDSd:", token)
    console.log("TTTWWW", req.headers.authorization)

    if (!token) {
        return res.status(401).json({ message: "Требуется токен авторизации" });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), 'secret123');
        req.userId = decoded._id; // Добавление _id пользователя в объект запроса для последующего использования

        next(); // Продолжаем выполнение запроса, если токен верифицирован
    } catch (error) {
        return res.status(401).json({ message: "Неверный токен авторизации" });
    }
};

// const checkAuth = (req, res, next) => {
//     const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

//     if (token) {
//         try {
//             const decoded = jwt.verify(token, 'secret123');
//             req.userId = decoded._id;

//             next();
//         } catch (error) {
//             return res.status(403).json({
//                 message: 'Нет доступа11'
//             });
//         }
//     } else {
//         return res.status(403).json({
//             message: 'Нет доступа'
//         });
//     }
// };

export default checkAuth;
