const {Schema, model } = require('mongoose')


const UserSchema = new Schema({
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

const Model = new model(UserSchema, 'users')
module.exports = Model