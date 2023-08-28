let book = {
    name: 'Onepiece',
    Author: 'Oda',
    Episode: 1073,
    Anime: 'yes',
    story: 'pirates'
}

// for loop
array = []
array.push(book)
for (index = 0; index < array.length; index++) {
    console.log(array[index])
}


// for in

for (let key in book) {
    console.log(key, book[key])
}


// for of

array = []
array.push(book)
for (let value of array) {
    console.log(value)
}


// for each

array = []
array.push(book)
function print(value) {
    console.log(value);
}
array.forEach(print)


