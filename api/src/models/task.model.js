const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
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
    },
    //Foreign Key **********
    sprintId: {
        type: Schema.Types.ObjectId, ref: 'sprint'
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('task', taskSchema);
//return javascript object {client Schema}
//const sprint = mongoose.model('sprint', clientSchema);