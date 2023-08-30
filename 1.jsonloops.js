let book = '{ "name": "Onepiece", "Author": "Oda", "Episode": 1073, "Anime": "yes", "story": "pirates" }'

// for loop
let jsonObject = JSON.parse(book)
for (let index = 0; index < (Object.keys(jsonObject)).length; index++) {
    console.log(Object.keys(jsonObject)[index], ':', jsonObject[Object.keys(jsonObject)[index]])
}


// // for in

for (let key in book) {
    console.log(key, book[key])
}


// // for of


let jsonObject = JSON.parse(book)
for (let entry of Object.entries(jsonObject)) {
    console.log(entry[0], ':', entry[1])
}


// // for each
let jsonObject = JSON.parse(book)
Object.entries(jsonObject).forEach((entry) => {
    console.log(entry[0], ':', entry[1])
})


