const express = require('express')
const dotenv = require('dotenv')

//load config
dotenv.config({path: './config/config.env'})

const app = express()

const PORT = process.env.PORT || 8811

app.listen(PORT, console.log(`Server runnin' ${process.env.NODE_ENV} mode on port ${PORT}`))