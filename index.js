const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname + '/static')));

app.listen(1234, () => {
    console.log("http://localhost:1234")
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'html', 'index.html'))
})

app.get('/waifuhax', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'html', 'WaifuHax.html'))
})

app.get('/ttd', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'html', 'ttd.html'))
})