const express = require('express')
const app = express()
const expressHandlebars = require('express-handlebars')
const port = process.env.PORT || 3000

app.engine('handlebars', expressHandlebars({
    defalutLayout: 'main'
}))

app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

const fortunes = [
    "message1",
    "message2",
    "message3",
    "message4",
    "message5"
]

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', {fortune: randomFortune})
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