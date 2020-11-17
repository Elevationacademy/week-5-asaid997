const validator = require('validator');
const faker = require('faker')

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
let flag = validator.isEmail("shoobert@dylan")
console.log(flag)

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
flag = validator.isMobilePhone("786-329-9958", "en-US")
console.log(flag)

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
console.log(validator.blacklist(text, blacklist))

function makeHuman(number) {
    // The function should receive a number
    // Inside, you should create as many people using faker as the number received
    // Each person should have a name, an image URL (avatar), and a company name
    //company -> companyName
    //name -> firstName
    //image -> image
    for (let i = 0; i < number; i++) {
        console.log(`${faker.name.firstName()}, ${faker.image.people()} , ${faker.company.companyName()}`)
    }
}
makeHuman(2)