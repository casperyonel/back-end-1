const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

let SERVER_PORT = 5050

app.listen(5050, (SERVER_PORT) => {
    console.log(`the server is running on port ${SERVER_PORT}`)
})