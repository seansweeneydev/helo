require('dotenv').config();
const express = require('express')
      massive = require('massive')
      ctrl = require('./controller')
      PORT = 4050
const {CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

app.post('/api/auth/register', ctrl.register)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)})

app.listen(PORT, () => console.log(`Server listening on port:${PORT}`))
