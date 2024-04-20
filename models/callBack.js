import mongoose from 'mongoose';

const meetingSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    city: String,
    callbackTime: String,
});

const MeetingModel = mongoose.model('Meeting', meetingSchema);
export default MeetingModel;
