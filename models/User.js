const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    pets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dogs'
    }]
})

const User = mongoose.model('User', userSchema);
module.exports = User;