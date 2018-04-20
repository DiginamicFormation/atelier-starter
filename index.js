const express = require('express')
const app = express()

app.get('/all', function (req, res) {
    res.send('init all !')
}).listen(8080, function () {
    console.log('App starting on 8080')
})