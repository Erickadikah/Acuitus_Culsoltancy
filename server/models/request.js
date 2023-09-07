const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const messageSchema = new Schema ({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const messageModel = model('message', messageSchema)

module.exports = messageModel;