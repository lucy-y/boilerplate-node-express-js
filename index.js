const express = require('express')
const app = express()
const expressHandlebars = require('express-handlebars')
const { request } = require('http')
/* eslint-disable no-undef */
const port = process.env.PORT || 3000
/* eslint-disable no-undef */

const handlers = require('./public/lib/handlers')

app.engine('handlebars', expressHandlebars({
    defalutLayout: 'main'
}))

/* eslint-disable no-undef */
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))
/* eslint-disable no-undef */

app.get('/', handlers.home)
app.get('/about', handlers.about)
app.use(handlers.notFound)
app.use(handlers.serverError)

if(request.main === module){
    app.listen(port, () => {
        `Server started on port ${port}; `
    })
} else {
    module.exports = app
}
