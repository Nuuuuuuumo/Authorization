//Imports
const express = require('express')
const colors = require('colors')
const connection = require('./mongoDB/dataBase')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./router/index')
require('dotenv').config()
const errorMiddleware = require('./middleware/error-middleware')

//Application
const app = express()
const PORT = process.env.PORT || 3030
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use("/api", router)
app.use(errorMiddleware)

const start = async () => {
    try {
        await connection(process.env.DB_URL)
        app.listen(PORT, () => console.log(colors.bgBlue(`Server has been started on port ${PORT}`)))
    } catch (e) {
        console.log(colors.bgRed(`Error: ${e.message}`))
    }
}
start().catch(e => console.log(e.message))
