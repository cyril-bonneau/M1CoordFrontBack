const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    userSociety: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 128
    },
    userSiret: {
        type: String
    },
    userMail: {
        type: String
    },
    userTelephone: {
        type: Number
    },
    userStatus: {
        type: Boolean
    },
    userProfil: {
        type: String
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);