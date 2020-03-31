const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    clientID:{
        type: String,
        required: true
    },
    projectTitle: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    projectDevise: {
        type: Number,
        required: true,
        minlength: 4,
        maxlength: 128
    },
    projectStartDate: {
        type: String
    },
    projectEndDate: {
        type: String
    },
    projectdelay: {
        type: Number
    },
    projectStatus: {
        type: String
    },
    projectStack: {
        type: String
    },
    projectCout: {
        type: Number
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('project', projectSchema);
//return javascript object {client Schema}
//const client = mongoose.model('client', clientSchema);