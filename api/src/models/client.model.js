const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    clientDenomination: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    clientAdresse: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 128
    },
    clientFirstName: {
        type: String
    },
    clientSecondName: {
        type: String
    },
    clientTelephone: {
        type: Number
    },
    clientMail: {
        type: String
    },
    //FOREIGN KEY 
    userId: {
        type: Schema.Types.ObjectId, ref: 'user'
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('client', clientSchema);

//return javascript object {user Schema}
//const user = mongoose.model('user', userSchema);