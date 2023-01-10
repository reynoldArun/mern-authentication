const mongoose = require('mongoose')


function ConnectDB(url) {
    try {
        mongoose.set('strictQuery', true)
        mongoose.connect(url)
        console.log("Mongo DB connection Success!!")
    } catch (error) {
        console.log("Mongo DB connection failed!!")
    }
}

module.exports = ConnectDB;