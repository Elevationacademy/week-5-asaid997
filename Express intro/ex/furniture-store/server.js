const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'dist')))


const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/priceCheck/:name', function(request, response) {
    let item = store.find(items => items.name === request.params.name)
    if (item === undefined)
        item = { price: null }

    response.send({ price: item.price })
})

// Create another route in your server.js file called /buy which has one parameter: name

// Accessing this route should reduce the inventory of that item by 1.

// So if someone makes a request to localhost:3000/buy/chair, it should reduce the inventory of chair to 15. Make sure your route responds with the updated item.

app.get('/buy/:name', function(request, response) {
    let item = store.find(items => items.name === request.params.name)
    if (item === undefined)
        item = { price: null }

    response.send({ price: item.price })
})

const port = 3000
app.listen(port, function() {
    console.log(`Running server on port ${port}`)
})