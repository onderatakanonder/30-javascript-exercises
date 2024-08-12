const people = [
    { uName: 'Wes', bYear: 1988 },
    { uName: 'Kait', bYear: 1986 },
    { uName: 'Irv', bYear: 1970 },
    { uName: 'Lux', bYear: 2015 }
];

const comments = [
    { mText: 'Love this!', id: 523423 },
    { mText: 'Super good', id: 823423 },
    { mText: 'You are the best', id: 2039842 },
    { mText: 'Ramen is my fav food ever', id: 123523 },
    { mText: 'Nice Nice Nice!', id: 542328 }
];

const currentYear = new Date().getFullYear()
console.log(currentYear)

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

//const isAdault = people.some(function(person){
//    if (currentYear - person.bYear >= 19) {
//        return true
//    }      
//})

const isAdault = people.some(person => currentYear - person.bYear >= 19)
console.log(isAdault)

// Array.prototype.every() // is everyone 19 or older?

const allAdaults = people.every(person => currentYear - person.bYear >= 19)
console.log(allAdaults)

// Array.prototype.find()



// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const comment = comments.find(comment => comment.id === 823423)
console.log(comment)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423)
console.log(index)

//comments.splice(index, 1)

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
]
console.table(newComments)
