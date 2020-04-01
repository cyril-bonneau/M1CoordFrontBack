const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Sprint = require('../models/sprint.model');

const taskSchema = new Schema({
    sprintID: {
        type: String,
        required: true
    },
    taskName: {
        type: String,
        required: true,
        unique: true
    },
    taskDescription: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    taskStatus: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 128
    },
    taskTime: {
        type: Number
    }
}, 
{
    timestamps: true
});

module.exports = mongoose.model('task', taskSchema);
//return javascript object {client Schema}
//const sprint = mongoose.model('sprint', sprintSchema);