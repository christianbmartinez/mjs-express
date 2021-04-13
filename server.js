const express = require('express')
const app = express()
const path = require('path')
const PORT = '8000'

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

app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)})