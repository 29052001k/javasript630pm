// Array Methods                    functional methods
// 1 push()                         14 map() 
// 2 pop()                          15 fliter()
// 3 shift()                        16 reduce() 
// 4 unshift()                      17 some ()
// 5 slice()                        18 forEach()
// 6 fill()                         19 findIndex()
// 7 reverce()                      20 every()
// 8 flat()                         21 find()
// 9 concat()
// 10 includes()
// 11 join()
// 12 sort ()
// 13 indexof()


// push()
let fruits = ["apple", "banana", "cocnut", "mango"]
let q1 = fruits.push("chikkoo")
console.log(q1)
console.log(fruits)

// pop()
let fruits2 = ["apple", "banana", "coconut", "mango"]
let q2 = fruits2.pop()
console.log(q2)
console.log(fruits2)

// shift()

let names = ["kalyani", "navnath", "hadole"]
let q3 = names.shift()
console.log(q3)
console.log(names)

// unshift()

let names2 = ["aryan", "amruta", "dhanvi", "nilesh"]
let q4 = names2.unshift("kalyani")
console.log(q4)
console.log(names2)

// includes()

let country = ["London", "America", "India", "Pakistan"]
let q5 = country.includes("america")
console.log(q5)
console.log(country)
// join()

let num = ["Kalyani", "Navnath", "Hadole"]
let q6 = num.join(" ")
console.log(q6)

// slice()

let num2 = ["a", "b", "c", "d"]
let q7=num2.slice(1, 3)
console.log(q7)

// fill()

let num3 = ["a", "b", "c", "d"]
console.log(num3.fill(true, 1, 3))

// reverse

let num4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(num4.reverse())

// flat()

let num5 = [[12, 32], [33, 34], 35, 36, 37]
console.log(num5.flat())


// concat()

let arr = [12, 13, 14, 15, 16]
let arr2 = [17, 18, 19, 20]
console.log(arr.concat(arr2))

// sort()

let arr3 = [3, 6, 2, 4, 1, 5]
console.log(arr3.sort())

// indexof()

let arr4 = [12, 23, 43, 32, 13]
console.log(arr4.indexOf(43))
console.log(arr4.indexOf(13))

// splice()

let cities=["Mumbai","Pune","Kalkata","Gujrat"]
 cities.splice(2,3)
 console.log(cities)
 cities.splice(2,3, "Nashik","Chennai")
 console.log(cities)

 
let names1=["samu","kalyani","rajveer","vaish"]
names1.splice(2,2,"aryan","dhanu")
console.log(names1)


//functional methods

// map ()

let birthyear = ["1990", "1991", "1992", "1993"]
let e1 = birthyear.map(function (el, index, array) {
    return 2022 - el
})
console.log(e1)

// filter()

let arr5 = [21, 43, 32, 22, 55, 45, 34]
let e2 = arr5.filter(function (el, index, array) {
    return el > 30
})
console.log(e2)

// reduce()

let arr6 = [11, 22, 33, 44]
let e3 = arr5.reduce(function (acc, el, index, array) {
    return acc + el
    //return acc-el
})
console.log(e3)

// some()

let numN = [21, 32, 43, 23, 33, 44, 12, 22]
let e4 = numN.some(function (el, index, array) {
    return el > 30
    //return el>50
})
console.log(e4)

// every

let numN1 = [21, 32, 43, 23, 33, 44, 12, 22]
let e5 = numN1.every(function (el, index, array) {
    // return el>20
    return el > 10
})
console.log(e5)

// find()

let numN2 = [21, 32, 43, 23, 44,  22]
let e6 = numN2.find(function(el, index, array){
    return el >30
})
console.log(e6)

let numbersB = [33,44,55,6,77,88]
let e8 =numbersB.find(function(el){
    return el > 30
})
console.log(e8)

// findIndex()

let numN3=[43,23,33,12,22,21]
let e7=numN3.findIndex(function(el,index,array){
    return el>20
})
console.log(e7)

// let numbersB = [33,44,55,6,77,88]
// let e7 =numbersB.findIndex(function(el){
//     return el > 30
// })
// console.log(e7)


// forEach()
let city = ["pune","mumbai","banglore","kolkata"]
city.forEach(function(el,index,arr){
    console.log('welcome' + el)
})

console.log("**************************************")

let withdraw=[100,-200,300,400,-500,-600]
let total1=withdraw.findIndex(function(el,index,array){
   //console.log(el)
    //console.log(el<0)
    return el<0
})
//console.log(total1)

let total2=withdraw.filter(function(el){
    return el<0
})
console.log(total2)

let total3=withdraw.reduce(function(acc,el){
return acc+el
},0)
console.log(total3)

let total4=withdraw.filter(el=>el<0).reduce((acc,el)=>acc+el,0) 
console.log(total4)