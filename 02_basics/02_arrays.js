const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3])

// const allHeros = marvel_heros.concat(dc_heros) \\ merge two arrays and creates a new array
// console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros] // same as concat but can take more than two arrays
// console.log(allNewHeros);

const anotherArr = [1,2,3, [4,5,6], 7, [6, 7, [4, 5]]]

const real_another_array = anotherArr.flat(Infinity) // flat => converts depth arrays in one single array
// console.log(real_another_array);


// console.log(Array.isArray("Pranay"))
// console.log(Array.from("Pranay")) // converts into array
// console.log(Array.from({name: "Pranay"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));






