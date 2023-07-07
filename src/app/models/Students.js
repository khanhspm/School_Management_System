const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    user: {
        type: Schema.Types.String,
        ref: "User",
        require: true
    },
    
})

module.exports = mongoose.model('Student', studentSchema);