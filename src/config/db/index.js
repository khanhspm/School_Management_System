// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://khanhcshadu:mvk652002@cluster0.ceyfv4w.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect successfully!')
    } catch (error) {
        console.log('Connect failure!!!')
        
    }
}

module.exports = {connect}
