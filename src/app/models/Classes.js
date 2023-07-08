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
        type: Schema.Types.String,
        ref: 'Teacher',
        }
    ]
}, { _id: false });

module.exports = mongoose.model('Class', classSchema);