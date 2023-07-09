const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    class_id: {
        type: String,
        require: true
    },
    class_name: {
        type: String,
        required: true
    },
    teacher_id: [
        {
        type: String
        }
    ]
}, );

module.exports = mongoose.model('Class', classSchema);