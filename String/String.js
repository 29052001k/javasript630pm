// String
// Property and method

let a = 10
console.log(a)
console.log(typeof (a))

let b = "Kalyani"
console.log(b)
console.log(typeof (b))

let c = true
console.log(c)
console.log(typeof (c))


// string + string ==> string
// number + string ==> string
// string + number ==> string
// number + number ==> number

let FirstName = "Kalyani"
let MiddelName = "Navnath"
let LastName = "Hadole"

console.log(FirstName)
console.log(MiddelName)
console.log(LastName)

let a1 = 10
let b1 = "Romeo"
let c1 = 4

console.log(a1 + b1 + c1)
console.log(a1 + c1 + b1)
console.log(b1 + c1 + a1)
console.log(c1 + a1 + b1)

let FirstName1 = "Aryan"
let LastName1 = "Pawar"

console.log(FirstName1 + " " + LastName1)
console.log("My FirstName is " + FirstName1 + " and My LastName is" + LastName1)
console.log(`My FirstName is ${FirstName1} and My LastName is ${LastName1}`)


let city = "Nagpur"
console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])
console.log(city[4])
console.log(city[5])

for (let i = 0; i < 6; i++) {
    console.log(city[i])
}

let city4 = "goa"
for (let i = 0; i < city4.length; i++) {
    //console.log(i)
    console.log(city4[i])
}

let city2 = "Pune"
for (let i = 0; i < city2.length; i++) {
    //console.log(i)
    console.log(city2[i])
}


let city3 = "Mumbai"
for (let i = city3.length - 1; i >= 0; i--) {
    console.log(city3[i])
}

let names = "Samruddhi"
for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i])
}

let names2 = "Amruta"
for (let i = names2.length - 1; i >= 0; i--) {
    console.log(names2[i])
}

let names3 = "Vaishali"
for (let i = names3.length - 1; i >= 0; i--) {
    console.log(names3[i])
    console.log(names3[3])
}

let FirstName2 = "Samruddhi"
let LastName2 = "Kumawat"
console.log(`My FirstName is ${FirstName2} and My LastName is ${LastName2}`)

"Hello & Ram"
let z="Ganesh"
console.log(`Hello ${z} & Ram`)


let city5="pune"
let str=""
for(let i=0;i<city5.length;i++){
    str=city5[i]+str
}
console.log(str)









