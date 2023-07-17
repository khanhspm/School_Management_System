const { Double } = require('mongodb');
const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enrollmentSchema = new Schema({
    student_id: {
        type: String,
        require: true
    },
    subject_id: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    midterm_score: {
        type: Number
    },
    final_score: {
        type: Number
    }
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);