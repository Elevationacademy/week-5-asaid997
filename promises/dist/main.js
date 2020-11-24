// $.ajax({
//     method: "GET",
//     url: "/randomWord",
//     success: function (word) {
//         $.ajax({
//             method: "GET",
//             url: `/synonyms/${word}`,
//             success: function (synonyms) {
//                 $.ajax({
//                     method: "GET",
//                     url: `sentiment/${word}`,
//                     success: function (sentiment) {
//                         console.log(`
//                         The word ${word} has a 
//                         ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//                         its synonyms are: ${synonyms}`)
//                     },
//                     error: function (err) {
//                         console.log(err)
//                     }
//                 })
//             },
//             error: function (err) {
//                 console.log(err)
//             }
//         })
//     },
//     error: function (err) {
//         console.log(err)
//     }
// })


// let p = $.get('/randomWord') //notice that we don't use a callback in this case! We can, but this is what we're avoiding.
// console.log(p.state())

// let p = $.get('/randomWord')

// p.then(function (word) {
//     console.log(word)
// })


// $.get('/randomWord')
//     .then(function (word) {
//         console.log(word)
//     })

// $.get('/sentiment/Ploy')
//     .then(function (response) {
//         console.log(response)
//     })

// $.get('/randomWord')
//     .then(function (word) {
//         let synonymsPromise = $.get(`/synonyms/${word}`)
//         let sentimentPromise = $.get(`/sentiment/${word}`)
//         Promise.all([synonymsPromise, sentimentPromise])
//             .then(function (results) {
//                 console.log(results)
//             })
//     })


// const printResults = function (word, synonyms, sentiment) {
//     console.log(`
//         The word ${word} has a 
//         ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//         its synonyms are: ${synonyms}`
//     )
// }

// $.get('/randomWord')
//     .then(function (word) {
//         let synonymsPromise = $.get(`/synonyms/${word}`)
//         let sentimentPromise = $.get(`/sentiment/${word}`)
//         Promise.all([synonymsPromise, sentimentPromise])
//             .then(function (results) {
//                 printResults(word, results[0], results[1])
//             })
//     })

    const randomWord = $.get('/randomWord')

    randomWord.then(function(word){
        const books = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
        const gif = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`)

        Promise.all([books,gif]).
        then(results => {
            $('body').append(`<div>the word is ${word} and the book title is: ${results[0].items[0].volumeInfo.title}</div>`)
            $("body").append(`<iframe src="${results[1].data[0].embed_url}">`)
        })
    })