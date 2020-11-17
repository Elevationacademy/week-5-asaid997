const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, 'dist')))



const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}

//required params
app.get('/users/:username', function (request, response) {
    response.send(`${users[request.params.username]}`)
})

// app.get('/', function (request, response) {
//     console.log("Someone has come into the server. Brace yourselves.")
//     response.send("Ending the cycle, thanks for visiting")
// })



app.get('/life', function (request, response) {
    response.send("42")
})

app.get('/landing/:username', function (request, response) {
    response.send(`Hi there, ${request.params.username}`)
})

//optional params
app.get('/routeWithOptionalParameters', (request, response) => {
    let params = request.query
    response.send(params)
})
app.get('/details', (request, response) => {
    let params = request.query
    console.log(params.city)
    response.send(params)
})


const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})