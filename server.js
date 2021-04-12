const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index.html') 
})

app.get('/about.html', (req, res) => {
    res.render('about.html')
})

app.get('/services.html', (req, res) => {
    res.render('services.html')
})

app.listen(process.env.PORT, () => {console.log(`Server listening on port ${process.env.PORT}`)})