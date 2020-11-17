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


// Now add a /priceCheck route which has one parameter: name

// When this route is accessed, it should return the price of the item that was asked for.

// So if someone goes to localhost:3000/priceCheck/couch, they should receive an object in response: {price: 1200}

// If the item doesn't exist, the route should respond with {price: null}

app.get('/priceCheck/:name', function (request, response) {
    let item = store.find(items => items.name === request.params.name)
    if(item === undefined)
        item.price = null

    response.send({price: item.price})
})


const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})