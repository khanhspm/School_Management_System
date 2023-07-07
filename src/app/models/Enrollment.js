const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enrollmentSchema = new Schema({
    student_id: {
        type: Schema.Types.String,
        ref: "Student",
        require: true
    },
    subject_name: {
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
}, { _id: false });

module.exports = mongoose.model('Enrollment', enrollmentSchema);