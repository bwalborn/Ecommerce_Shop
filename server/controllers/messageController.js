import asyncHandler from 'express-async-handler'
import Message from '../models/messageModel.js'


// ----- CONTROLLER with all the functions for the routes -----



// @desc      Create new message
// @route     POST /api/message
// @access    Public
const addMessage = asyncHandler(async (req, res) => {
    const { firstName, lastName, emailAddress, messageBody } = req.body;

    if(messageBody && messageBody.length === 0) {
        res.status(400);
        throw new Error('No message to be sent');
        // return
    } else {
        const message = new Message({
            firstName, lastName, emailAddress, messageBody
        });

        const createdMessage = await message.save();
        res.status(201).json(createdMessage);
    }
})



// @desc      Get order by ID
// @route     GET /api/orders/:id
// @access    Private
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if(order) {
        res.json(order);
    } else {
        res.status(404);
        throw new Error('Order not found')
    }
})




// @desc      Update order to paid
// @route     GET /api/orders/:id/pay
// @access    Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if(order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address,
        }

        const updateOrder = await order.save();

        res.json(updateOrder)

    } else {
        res.status(404);
        throw new Error('Order not found')
    }
})





// @desc      Fetch all messages
// @route     GET /api/messages
// @access    Public
const getAllMessages = asyncHandler(async (req, res) => {
    const messages = await Message.find({})

    res.json(messages);
})

// export { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders };
export { };