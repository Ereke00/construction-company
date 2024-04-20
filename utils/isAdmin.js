const adminId = '65635d8b30a1027af8675f87'; // Замените на реальный идентификатор администратора

const isAdmin = (req, res, next) => {
    console.log(req)
    console.log("user:", req.user)
    // Проверяем, соответствует ли ID пользователя идентификатору администратора
    if (req.user === adminId) {

        // Если пользователь - администратор, пропускаем его к следующему обработчику
        next();
    } else {
        // Если пользователь не является администратором, отправляем сообщение об ошибке доступа
        return res.status(403).json({
            message: 'Недостаточно прав доступа'
        });
    }
};
export default isAdmin
// Пример использования middleware isAdmin для маршрутов администратора

// и другие маршруты для администратора

// Контроллеры для операций с записями ЖК
// (ComplexesController.create, ComplexesController.updateComplex, ComplexesController.deleteComplex и т.д.)
