const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    student_id: {
        type: Schema.Types.String,
        ref: "User",
        require: true
    },
    class_id: {
        type: String
    }
}, { _id: false })

module.exports = mongoose.model('Student', studentSchema);