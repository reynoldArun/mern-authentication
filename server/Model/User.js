const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        required: [true, "Username cannot be empty!!"]
    },
    password: {
        type: String,
        required: [true, "Password cannot be empty!!"],
        min: [6, "Password length must be greater then 6"]
    },
    email: { 
        type: String,
        required: [true, "Email cannot be empty!!"],
    }
})
const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel

