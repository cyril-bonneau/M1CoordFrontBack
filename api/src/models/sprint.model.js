const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sprintSchema = new Schema({
    projectID: {
        type: String,
        required: true
    },
    sprintTitle: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    sprintStartDate: {
        type: Date,
        required: true,
        minlength: 4,
        maxlength: 128
    },
    sprintEndDate: {
        type: Date
    },
    sprintStatus: {
        type: String
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('sprint', sprintSchema);
//return javascript object {client Schema}
//const project = mongoose.model('project', projectSchema);