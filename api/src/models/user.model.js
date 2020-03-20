const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// var bcrypt = require('bcrypt');
// mongoose.connect(config.database)

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
    userPassword: {
        type: String,
        required: true
      },
}, {
    timestamps: true
});


module.exports = mongoose.model('User', userSchema);