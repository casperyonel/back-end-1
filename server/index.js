const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

let SERVER_PORT = 4000


app.get("/api/users", (req, res) => {
    let friends = ['Nittin', 'Eric', 'Jeddy', 'Cameron', 'Riley']
    res.status(200).send(friends)
})

app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`
    res.status(200).send(phrase)
})

app.listen(SERVER_PORT, () => {
    console.log(`the server is running on port ${SERVER_PORT}`)
})

