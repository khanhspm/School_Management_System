const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    subject_id: {
        type: String,
        require: true
    },
    subject_name: {
        type: String,
        require: true
    },
}, { _id: false });

module.exports = mongoose.model('Subject', teacherSchema);