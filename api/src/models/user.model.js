const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');


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
        //required: true,
        minlength: 4,
        maxlength: 128
    },
    userSiret: {
        type: String
    },
    userMail: {
        type: String,
        unique: true
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
        required: true,
        unique: true
      },
}, {
    timestamps: true
});

userSchema.plugin(uniqueValidator); 

module.exports = mongoose.model('User', userSchema);