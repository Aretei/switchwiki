require('dotenv').config()

const express = require('express')

const app = express()

const massive = require('massive')

const session = require('express-session')

const switchCtrl = require('./controllers/controllers')

const authCtrl = require('./controllers/authcontroller')

app.use(express.static(`${__dirname}/../build`))

const { PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

app.get('/api/switch', switchCtrl.allSwitch)
app.get('/api/switch/:id', switchCtrl.getSwitch)
app.get('/api/linear', switchCtrl.linear)
app.get('/api/tactile', switchCtrl.tactile)
app.get('/api/review/:id', switchCtrl.getReview)
app.post('/api/review/:id', switchCtrl.postReview)
app.put('/api/review/:id', switchCtrl.editReview)
app.delete('/api/review/:id', switchCtrl.deleteReview)
app.post('/api/email', switchCtrl.sendEmail)


app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)


massive ({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
})
.then(dbInstance => {
    app.set('db', dbInstance)
    app.listen(PORT, () => console.log(`server running on ${PORT}`))
})

