const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectTitle: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    projectDevise: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 128
    },
    projectStartDate: {
        type: Date
    },
    projectEndDate: {
        type: Date
    },
    projectStatus: {
        type: String
    },
    projectStack: {
        type: Boolean
    },
    projectCout: {
        type: Number
    },
    //Foreign Key **********
    clientId: {
        type: Schema.Types.ObjectId, ref: 'client'
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('project', projectSchema);
//return javascript object {client Schema}
const client = mongoose.model('client', clientSchema);