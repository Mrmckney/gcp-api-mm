const functions = require("firebase-functions")
const express = require('express')

const app = express()

app.get('/baseballteams', (req, res) => {
    res.send('Umm... the Mets?')
})

app.get('/basketball', (req, res) => {
    res.send('Umm... the Heat?')
})


app.get('/yo', (req, res) => {
    res.send('YO')
})



exports.app = functions.https.onRequest(app)


