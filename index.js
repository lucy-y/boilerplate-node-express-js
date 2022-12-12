const express = require('express')
const app = express()
const expressHandlebars = require('express-handlebars')
const port = process.env.PORT || 3000

app.engine('handlebars', expressHandlebars({
    defalutLayout: 'main'
}))

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
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