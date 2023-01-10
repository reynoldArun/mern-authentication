const UserModel = require('../Model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const CreateUser = async (req, res) => {
    const {username, password, email} = req.body
    try {
        const checkUserExist = await UserModel.findOne({username})
        if(checkUserExist) {
            return res.status(500).json({
                msg: "Username already taken!!"
            })
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = new UserModel({
            username,
            password: hashPassword,
            email
        })
        user.save()
        return res.status(201).json({
            msg: "User created Successfully!!"
        })
    } catch (error) {
        return res.status(500).json({
            errorMsg: "Something went wrong!!"
        })
    }
}

module.exports = {
    CreateUser
}