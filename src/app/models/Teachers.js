const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    teacher_id: {
        type: String,
        require: true
    },
    subject_id: {
        type: String,
        require: true
    },
    phone:{
        type: String
    }
}, );

module.exports = mongoose.model('Teacher', teacherSchema);