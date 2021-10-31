require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express')
const app = express()
const db = require("./models/connect")
app.use(express.json())
const port = process.env.PORT || 3000
//const http = require('http')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

db.sequelize.sync()

// setup route
require("./routes/user")(app)

app.listen(port,() => {
    console.log(`Listen at port ${port}`)
})