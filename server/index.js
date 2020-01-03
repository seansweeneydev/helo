require('dotenv').config();
const express = require('express')
      massive = require('massive')
      app = express()
      PORT = 4050
const {CONNECTION_STRING} = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)})

app.listen(PORT, () => console.log(`Server listening on port:${PORT}`))
