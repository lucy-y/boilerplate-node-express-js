const express = require('express')
const app = express()
const expressHandlebars = require('express-handlebars')
const port = process.env.PORT || 3000

const fortune = require('./public/lib/fortune')

app.engine('handlebars', expressHandlebars({
    defalutLayout: 'main'
}))

app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about', {fortune: fortune.getFortune()})
})

app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.use((req, res) => {
    res.status(500)
    res.render('500')
})

app.listen(port, () => {
    `Server started on port ${port}; `
})