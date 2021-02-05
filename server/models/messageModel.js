import mongoose from 'mongoose';


const messageSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    messageBody: {
        type: String,
        maxLength: 350,
        required: true
    },
}, {
    timestamps: true
})


const Message = mongoose.model('Message', messageSchema);

export default Message;