const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    teacher_id: {
        type: Schema.Types.String,
        ref: "User",
        require: true
    },
    subject_id: {
        type: String,
        require: true
    },
}, { _id: false });

module.exports = mongoose.model('Teacher', teacherSchema);