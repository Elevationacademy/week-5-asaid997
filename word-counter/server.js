const express = require('express')
const validator = require('validator')

const sanitize = str => validator.rtrim(validator.ltrim(validator.blacklist(str, "^\\[a-zA-Z \\]")))

const api = require('./server/routes/api')


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(['/word/:words', '/words/:words'], function(req, res, next) {
    req.body.words = sanitize(req.params.words)
    next()
})

app.use('/', api)

const port = 3000
app.listen(port, function() {
    console.log(`Server running on ${port}`)
})