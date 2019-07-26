const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    pets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dogs'
    }]
})

const User = mongoose.model('User', userSchema);
module.exports = User;