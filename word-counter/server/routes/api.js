const express = require('express')
const router = express.Router()

const wordCounter = {
    'rank3': 14,
    "rank5": 5,
    'rank2': 18,
    "stammmm": 4,
    'rank4': 6,
    'rank1': 20,
    "stammmm2": 3
}

router.get('/sanity', function(req, res) {
    res.send("server is up and running")
})

router.get('/word/:word', function(req, res) {
    const word = req.params.word
    if (wordCounter[word] == undefined)
        res.send({ count: 0 })
    else
        res.send({ count: wordCounter[word] })
})

const addWord = function(word) {
    if (wordCounter[word] == undefined) {
        wordCounter[word] = 1
        return true;
    } else
        wordCounter[word]++
        return false
}

router.post('/word/:words', function(req, res) {
    const word = req.body.words
    addWord(word)
    res.send({ text: `Added ${word}`, currentCount: wordCounter[word] })
})

router.post('/words/:words', function(req, res) {
    let newCounter = 0

    const sentence = req.body.words
    const wordsArray = sentence.split(" ")
    wordsArray.forEach(word => { if (addWord(word)) newCounter++ })
    res.send({ text: `Added ${newCounter} words, ${wordsArray.length - newCounter} already existed`, currentCount: -1 })
})

router.get('/total', function(req, res) {
    let sum = 0
    Object.keys(wordCounter).forEach(key => sum += wordCounter[key])
    res.send({ text: "Total count", count: { sum } })
})

router.get('/popular', function(req, res) {
    let mostPopular = { text: "", count: 0 }
    Object.keys(wordCounter).forEach(key => { if (wordCounter[key] > mostPopular.count) mostPopular = { text: key, count: wordCounter[key] } })
    res.send(mostPopular)
})

router.get('/ranking', function(req, res) {
    const rankings = {
        ranking: Object.keys(wordCounter).sort((x, y) => wordCounter[y] - wordCounter[x]).splice(0, 5).map(key => {
            return {
                [key]: wordCounter[key]
            }
        })
    }
    res.send(rankings)
})

module.exports = router