const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    student_id: {
        type: String,
        require: true
    },
    class_id: {
        type: String
    }
}, )

module.exports = mongoose.model('Student', studentSchema);