import asyncHandler from 'express-async-handler'
import Message from '../models/messageModel.js'


// ----- CONTROLLER with all the functions for the routes -----



// @desc      Create new message
// @route     POST /api/messages
// @access    Public
const addMessage = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, messageBody } = req.body;

    if(messageBody && messageBody.length === 0) {
        res.status(400);
        throw new Error('No message to be sent');
        // return
    } else {
        const message = new Message({
            firstName, lastName, email, messageBody
        });

        const createdMessage = await message.save();
        res.status(201).json(createdMessage);
    }
})



// @desc      Fetch all messages
// @route     GET /api/messages
// @access    Private/Admin
const getAllMessages = asyncHandler(async (req, res) => {
    const messages = await Message.find({})

    res.json(messages);
})


// @desc      fetch single message
// @route     GET /api/messages/:id
// @access    Private/Admin
const getMessageById = asyncHandler(async (req, res) => {
    const message = await Message.findById(req.params.id);

    if(message) {
        res.json(message);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
})


// @desc      Delete message
// @route     DELETE /api/messages/:id
// @access    Private/Admin
const deleteMessage = asyncHandler(async (req, res) => {
    const message = await Message.findById(req.params.id);

    if(message) {
        await message.remove();
        res.json({ message: 'Message removed' });
    } else {
        res.status(404);
        throw new Error("Message not found");
    }
})



export { addMessage, getAllMessages, getMessageById, deleteMessage };