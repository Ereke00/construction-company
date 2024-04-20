import MeetingModel from '../models/callBack.js'
export const createMeeting = async (req, res) => {
    try {
        const { firstName, lastName, phoneNumber, city, callbackTime } = req.body;

        const newMeeting = new MeetingModel({
            firstName,
            lastName,
            phoneNumber,
            city,
            callbackTime,
        });

        const meeting = await newMeeting.save();
        res.status(201).json(meeting);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Не удалось создать встречу"
        });
    }
};
