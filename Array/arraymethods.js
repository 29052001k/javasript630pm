//ARRAY
// array stores the value by index
let names=["kalyani","aryan", "amruta"]

console.log(names[0])
console.log(names[1])
console.log(names[l2])


let  city=["pune","mumbai","indore","gujrat"]
let q1=city.length
 console.log(q1)

for(let i=0; i<city.length;i++){

    console.log(city[i])
   console.log(i)
}

let city1=["nagar","manmad","nagapur","pune"]
let q2=city1.length
console.log(q2)

for(let i=0;i<city.length;i++){
console.log(city[i])
console.log(i)
}

// let city=["nagar","manmad","nagapur","pune"]
//  let q1=city.length
//  console.log(q1)

//  for(let i=0;i<city.length;i++){
//     console.log(city[i])
//     console.log(i)
//  }


// let city=["pune","mumbai","rajsthan","chennai"]
// let q1=city.length
// console.log(q1)

// for(let i=0;i<city.length;i++){
//     console.log(city[i])
//     console.log(i)
// }

//ARRAY
// ARRAY METODES           //FUNCTIONAL MATODES
// 1 push()                // 14 map()
// 2 pop()                 // 15 filter()
// 3 shift()               // 16 reduce()
// 4 unshift()             // 17 some()
// 5 join()                // 18 for each()
// 6 slice()               // 19 find index()
// 7 fill()                // 20 every()
// 8 reverse()
// 9 flat()
// 10 includes()
// 11 sort()
// 12 indexof()
// 13 concate()


// 1 push ()
// action - add the element at last
// return type- new length of array

let cities=["mumbai","pune","indore","goa"]
let q3=cities.push("kalkata")
// console.log(q1)
console.log(cities)

// 2 pop ()
//action- remove the last element 
// return type-same element
 let q4= cities.pop()
console.log(q4)
console.log(cities)


// 3 shift()
// action- remove the first number
// return type-same element

let names1=["kalyani","aryan","amruta"]
let q5=names.shift()
console.log(q5)
console.log(names1)


// 4 unshift()
// action - add the first number
// return type- new length of array

let q6= names.unshift("dhanvi")
console.log(q6)
console.log(names)


// 5 includes()
// action- search for element
// return type- boolean true or false


let country=["India","Pakisthan","America"]
let q7= country.includes("London")
console.log(q7)
console.log(country)

// 6 join()
// action -joins all elements of arrays
// return type- string

let info=["Kalyani","Navnath","Hadole"]
let q8= info.join(" ")
console.log(q8)
console.log(info)

// let info=["Kalyani","Navnath","Hadole"]
// let q2= info.join("-")
// console.log(q2)
// console.log(info)


// 7 slice(start end no, end ind no)
// action - cut the array betweeen passed points
// return - sliced array( array)

var arr=["a","b","c",2]
console.log(arr.slice(1,3))

// 8 fill
// action- replace/fill elements in between passed points
// return - updated array(array)

var arr=["a","b","c",2]
//console.log(arr.fill(true,1,3))
console.log(arr.fill(true,-3))


// 9 reverse()
// action- reverse base array 
// return - reversed array( array)

var arr=["a","b","c",2]
console.log(arr.reverse())


// ## nested array
// array contains another  sub array

var arr=["a","b","c",[10,20],2]
console.log(arr[3])
console.log(arr[3][0])
console.log(arr[3][1])

// 10 flat()
// action- removing sub array from base arrya 
// return - new flat array 

var arr=["a","b","c",[10,20],2]
console.log(arr.flat())
console.log(arr)


//console.log("****************************************************")
// program 1

let birthyear=["1989","1990","1991","1992"]
let ages=[]

for (let i=0;i<birthyear.length;i++){
   // console.log(2022-(birthyear[i]))
    let a=2022-(birthyear[i])
    ages.push(a)
}
console.log(ages)

// let birthyear=["1978","1979","1980","1981"]
// let ages=[]

// for(let i=0;i<birthyear.length;i++){
//     // console.log(i)
//     // console.log(2022-(birthyear[i]))
//     let a=2022-(birthyear[i])
//     ages.push(a)
// }
// console.log(ages)

// let birthyear = ["1989", "1990", "1991", "1992"]
// let ages = []

// for (let i = 0; i < birthyear.length; i++) {
//     //console.log(i)
//     console.log(2022 - (birthyear[i]))
//     let a = 2022 - (birthyear[i])
//     ages.push(a)
//}
//console.log(ages)

// for (let i=0;i<birthyear.length;i++){

//    // console.log(2022-(birthyear[i]))
//     let a=2022-(birthyear[i])
//     ages.push(a)
// }
// console.log(ages)


// for ( let i=0;i<birthyear.length;i++){
//     let a= 2022-(birthyear[i])
//     ages.push(a)
// }
// console.log(ages)


// for( let i=0;i<birthyear.length;i++){
//     let a=2022-(birthyear[i])
//     ages.push(a)
// }
// console.log(ages)

// for (let i=0;i<birthyear.length;i++){
//     let a=2022-birthyear[i]
//     ages.push(a)
// }
// console.log(ages)


// for (let i=0;i<birthyear.length;i++){
//     let a = 2022-birthyear[i]
//     ages.push(a)
// }
// console.log(ages)


//console.log("****************************************************")
// program2

let ages1=[22,43,32,21,43,33,32,12]
let above30=[]

for (let i=0;i<ages1.length;i++){
    //console.log(i)
   // console.log(ages[i])
    if (ages1[i]>30){
        above30.push(ages1[i])
    }

}
console.log(above30)

// let ages = [22, 43, 32, 21, 43, 33, 32, 12]
// let above30 = []

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] > 30) {
//         above30.push(ages[i])
//     }
// }
// console.log(above30)

//  let ages=[22,34,43,21,27,37,45]
//  let above30=[]

// for(let i=0;i<ages.length;i++){
//     if (ages[i]>30){
//         above30.push(ages[i])
//     }
// }
// console.log(above30)   

// for (let i=0;i<ages.length;i++){
//     if(ages[i]>30){
//         above30.push(ages[i])
//     }
// }
// console.log(above30)


// for( let i=0;i<ages.length;i++){
//     if(ages[i]>30){
//         above30.push(ages[i])
//     }
// }
// console.log(above30)



// let ages=[22,34,43,21,27,37,45]
// let above30=[]

// for(let i=0;i<ages.length;i++){
//     if (ages[i]>30){
//         above30.push(ages[i])
//     }
// }

// console.log(above30)


// for (let i=0;i<ages.length;i++){
//     if(ages[i]>30){
//         above30.push(ages[i])
//     }
// }
// console.log(above30)


//console.log("****************************************************")
// program3

let s = [11, 22, 33, 44, 55]
let total = 0

for (let i = 0; i < s.length; i++) {
    total = total + s[i]
}
console.log(total)

// let s = [11, 22, 33, 44, 55]
// let total = 0

// for (let i = 0; i < s.length; i++) {
//     total = total + s[i]
// }
// console.log(total)

// let marks = [10, 20, 30, 40]
// let sum = 0

// for (let i = 0; i < marks.length; i++) {
//     sum = sum + marks[i]

// }
// console.log(sum)
// let a = sum / marks.length
// console.log(a)


//console.log("**********************************************")
// program 1

// let birthyear=["1989","1990","1991","1992"]
// let ages=[]

// for ( let i=0;i<birthyear.length;i++){
//     let a = 2022-(birthyear[i])
//     ages.push(a)
// }
// console.log(ages)


//console.log("*****************************************")

// program 2 

// let ages=[12,23,33,43,35,54,22]
// let above30=[]

// for (let i=0;i<ages.length;i++){
//    if(ages[i]>30){
//     above30.push(ages[i])
//    }
// }
// console.log(above30)

// let above30=[]

// for ( let i=0;i<ages.length;i++){
//     if ( ages[i]>30){
//         above30.push(ages[i])
//     }
// }

// console.log(above30)


// let ages=[23,34,43,12,54,11]
// let above30=[]

// for (let i=0;i<ages.length;i++){
//     if ( ages[i]>30){
//         above30.push(ages[i])
//     }
// }
// console.log(above30)


// let ages=[12,34,54,66,23,43]
// let above30=[]

// for (let i=0;i<ages.length;i++){
//     if( ages[i]>30){
//         above30.push(ages[i])
//     }
// }
// console.log(above30)

// let ages=[12,34,54,66,23,43]
// let above30=[]

// for (let i=0;i<ages.length;i++){
//     if (ages[i]>30){
//         above30.push(ages[i])
//     }
// }
// console.log(above30)

// let ages=[12,34,54,66,23,43]
// let above30=[]

// for (let i=0;i<ages.length;i++){
//     if (ages[i]>30){
//         above30.push(ages[i])
//     }
// }
// console.log(above30)


//console.log("*******************************************")

// program 3

// let s=[11,22,33,44]
// let total=0

// for ( let i=0;i<s.length;i++){
//     total=total+s[i]
// }
// console.log(total)


// let s=[32,33,34,344,34]
// let total=0

// for (let i=0;i<s.length;i++){
//     total=total+s[i]
// }
// console.log(total)


// let s = [43, 54, 54, 65, 34]
// let total = 0

// for (let i = 0; i < s.length; i++) {
//     total = total + s[i]
// }
// console.log(total)

// console.log("********************************************")

// program 1 (map)


//let birthyear=["1989","1990","1991","1992"]
//let ages=[]
// for ( let i=0;i<birthyear.length;i++){
//     let a = 2022-(birthyear[i])
//     ages.push(a)
// }
// console.log(ages)

// map
// let birthyear=["1989","1990","1991","1992"]
// // let q1=birthyear.map(function(el,index,arr){
// // return 2022-el
// // })
// // console.log(q1)


//  let q1=birthyear.map(function(el,index,arr){
//     return 2022-el
// })
// console.log(q1)


// console.log("**********************************************")
// program 2 (filter)

// let ages=[12,34,54,66,23,43]
// let above30=[]
// for (let i=0;i<ages.length;i++){
//     if (ages[i]>30){
//         above30.push(ages[i])
//     }
// }
// console.log(above30)

// filter
//let ages = [12, 34, 54, 66, 23, 43]
// let q2 = ages.filter(function (el,index,arr) {
//     return el > 30
// })
// console.log(q2)


// let q2=ages.filter(function (el,index,arr){
//     return el>30
// })
// console.log(q2)


// let ages=[23,32,43,122,43,43]
// let q3=ages.filter(function(el,index,arr){
// return el>30
// })
// console.log(q3)


//console.log("***********************************************")
// program 3(reduce)

//let s = [43, 54, 54, 65, 34]
// let total = 0
// for (let i = 0; i < s.length; i++) {
//     total = total + s[i]
// }
// console.log(total)


// reduce()

//let s = [43, 54, 54, 65, 34]
// let q1 = s.reduce(function (acc, el, index, arr) {
//     return acc + el
// }, 0)
// console.log(q1)

// let q2 = s.reduce(function(acc, el, index, arr ) {
//     return acc + el
// }, 0)
// console.log(q2)


// let s = [22, 22, 12, 21, 32]
// let q1 = s.reduce(function (acc, el, index, arr) {
//     return acc + el
// }, 0)
// console.log(q1)

// for each()

let city3 =["mumbai","indore","pune","kalkata"]
city3.forEach(function(el,index, arr){
    console.log( 'Welcome'  +  el)
})

// find()

let numbers2=[12,23,32,44,32,11,43]
let e7=numbers2.find(function( el, index,arr){
    return el>30
})
console.log(e7)

// let arr5 = [33,44,51,33,44,55,222,444,555]
// let e8 = arr4.find(function(el){
//     return el > 100
// })
// console.log(e8)


// //find index()
let numbers1=[12,23,32,44,32,11,43]
let e6=numbers.findIndex(function( el, index,arr){
    return el>30
})
console.log(e6)

// let arr4 = [33,44,51,33,44,55,222,444,555]
// let e7 = arr4.findIndex(function(el){
//     return el > 100
// })
// console.log(e7)
 

// // some()

let numbers=[23,23,43,54,22,43,12,54]
let e5=numbers.some(function(el,index,arr){

    return el >30
})
console.log(e5)


// // let numbers=[23,23,43,54,22,43,12,54]
// let q1=numbers.some(function(el,index,arr){

//     return el >60
// })
// console.log(q1)


// every()
let num3=[21,23,21,43]
let e4=num3.every(function(el,index,arr){
    return el>30
})
console.log(e4)


// let num=[21,23,21,43]
// let q1=num.every(function(el,index,arr){
//     return el>20
// })
// console.log(q1)e 1


// concat()
let num1=[11,22,33]
let num2=[44,55,66,77]
let e3=num1.concat(num2)
console.log(e3)

// let num1=[11,22,33]
// let num2=[44,55,66,77]
// let q1=num2.concat(num1)
// console.log(q1)

// sort()
let countries=["India","Pakistan","Srilanka","America","london","@japan"]
let e2=countries.sort()
console.log(e2)

let num=[11,22,54,13,102,218,87]
let e1=num.sort()
console.log(e1)


let arr=[1,2,3]
let number=arr.reduce(function(acc,el,index,arr){
    return acc+el
},0)
console.log(number)