require('dotenv').config()
const express = require("express");
const ConnectDB = require('./Database/Connection');

const app = express()


const port = process.env.PORT || 3001
const url = process.env.url

app.listen(port, () => {
    ConnectDB(url)
    console.log(`Server is up & running on port ${port}`)
})