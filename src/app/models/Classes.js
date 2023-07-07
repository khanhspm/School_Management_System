const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    student: [{
        type: Schema.Types.String,
        ref: "user",
        require: true
    }],
    teacher: {
        type: Schema.Types.String,
        ref: "user",
    },
    class_name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Class', classSchema);