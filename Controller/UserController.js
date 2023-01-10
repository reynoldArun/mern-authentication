const UserModel = require('../Model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function CreateJwt(user) {
    return jwt.sign({
        userId: user._id,
        username: user.username
    }, process.env.SECRET, {expiresIn: "1h"})
}

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

const loginUser = async(req, res) => {
    const {username, password}  = req.body
    try {
        const checkUser = await UserModel.findOne({username})
        if(!checkUser) {
            return res.status(500).json({
                Errormsg: "Invalid username!"
            })
        }
        const checkPassword = await bcrypt.compare(password, checkUser.password)
        if(!checkPassword) {
            return res.status(500).json({
                Errormsg: "Invalid password!!"
            })
        }
        const token = CreateJwt(checkUser)
        return res.status(200).send({
            msg: "Login Successful",
            username: checkUser.username,
            token
        })
    } catch (error) {
        return res.status(500).json({
            errorMsg: "Something went wrong!"
        })
    }
}

module.exports = {
    CreateUser,
    loginUser
}