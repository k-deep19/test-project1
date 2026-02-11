const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        default: null
    },
    bio: {
        type: String,
        default: null
    },
    deviceType: {
        type: String,
        default: null
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);