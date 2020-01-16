require('dotenv').config();
const express = require('express')
      massive = require('massive')
      session = require('express-session')
      authCtrl = require('./controllers/authController')
      PORT = 4050
const {CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

app.use(express.json())
app.use(session({
        resave: true, 
        saveUninitialized: false,
        secret: SESSION_SECRET,
    })
)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})

// Endpoints
app.post('/api/auth/register', authCtrl.register)
app.post('/api/auth/login', authCtrl.login)
    
app.listen(PORT, () => console.log(`Server listening on port:${PORT}`))
