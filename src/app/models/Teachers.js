const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    user: {
        type: Schema.Types.String,
        ref: "User",
        require: true
    },
    teacher_subject: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('Teacher', teacherSchema);