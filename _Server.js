require('dotenv').config()
const express = require("express");
const ConnectDB = require('./Database/Connection');
const cors = require('cors');
const router  = require('./Routes/routes');

const app = express()
const port = process.env.PORT || 3001
const url = 'mongodb://127.0.0.1:27017'

//middleware
app.use(cors());
app.use(express.json())
app.disable('x-powered-by')
app.use('/api', router)

app.listen(port, () => {
    ConnectDB(url)
    console.log(`Server is up & running on port ${port}`)
})