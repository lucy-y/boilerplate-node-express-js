const express = require('express')
const app = express()
const expressHandlebars = require('express-handlebars')
const port = process.env.PORT || 3000

const fortune = require('./public/lib/fortune')
const handlers = require('./public/lib/handlers')

app.engine('handlebars', expressHandlebars({
    defalutLayout: 'main'
}))

app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

app.get('/', handlers.home)
app.get('/about', handlers.about)
app.use(handlers.notFound)
app.use(handlers.serverError)

app.listen(port, () => {
    `Server started on port ${port}; `
})