// Sets- set does not store the value by index

let setA = new Set()
console.log(setA.size)
console.log(setA)

// add
setA.add("Kalyani")
setA.add("Aryan")
setA.add("Kalyani") // does not store dublicate value
console.log(setA)

//has (check the particular element is available or not)
let q1 = setA.has("Kalyani")
console.log(q1)
let q2 = setA.has("Amruta")
console.log(q2)

// delete
setA.delete("Aryan")
console.log(setA)

//clear(clear the datatype)

setA.clear()
console.log(setA)

// 2nd way to define set 

let setB = new Set(["Apple", "Mango", "Banana", "Mango"]) // does not store dublicate value
console.log(setB)

// foreach()
setB.forEach(function (el) {
    console.log(el)
})

// object

let info = {
    FirstName: "Kalyani",
    LastName: "Hadole",
    Age: 23,
    RollNo: 10
}

// for key
for (let key of Object.keys(info)) {
    console.log(key)
}

//for value
for (let val of Object.values(info)) {
    console.log(val)
}

// both key and value

for (let keyval of Object.entries(info)) {
    console.log(keyval)
}

setC = new Set([{ FirstName: "Aryan" }, { LastName: "Pawar" }, { Age: 12 }, { RollNo: 20 }])
console.log(setC)
for (let { FirstName } of setC.keys()) {
    console.log(FirstName)
}

setD = new Set(["apple", "mango", "apple", "cherry"])
console.log(setD)
for (let key of setD.keys()) {
    console.log(key)
}


let setE = new Set(
    [
        {
            FirstName: "Kalyani",
            LastName: "Hadole"
        },
        {
            FirstName: "Amruta",
            LastName: "Pawar"
        }
    ]
)
console.log(setE)

for (let { FirstName, LastName } of setE.keys()) {
    console.log(FirstName, LastName)
}

// for (let val of setE.values()){
//     console.log(val)
// }


let setF = new Set([{ firstName: "kalyani" }, { firstName: "aryan" }, { firstName: "ram" }, { firstName: "ram" }])
console.log(setF)


for (let { firstName } of setF.keys()) {
    console.log(firstName)
}


// Map

// program 1
let map = new Map()
console.log(map)

//set
map.set(2, "Kalyani")
map.set(4, "Kalyan")
map.set(5, "Idea")
map.set(6, "Evening")
map.set(7, "Teacher")
console.log(map)
console.log(map.size)

//get
let q3 = map.get(4)
console.log(q3)
let q4 = map.get(7)
console.log(q4)

//delete
map.delete(2)
console.log(map)
map.delete(6)
console.log(map)

//has
map.has(2)
console.log(map)
map.has(7)
console.log(map)


//clear
map.clear()
console.log(map)

let info2 = new Map([
    ["A", "Apple"],
    ["B", "Ball"],
    ["C", "Cat"]
])
console.log(info2)

//foreach
info2.forEach(function (el) {
    console.log(el)
})

for (let key of info2.keys()) {
    console.log(key)
}

for (let val of info2.values()) {
    console.log(val)
}

for (let keyval of info2.entries()) {
    console.log(keyval)
}


console.log("*********************************")
//quiz exapmple
// let quiz=new Map([
//     ["questions","answer"],
//     ["capital of MH","Mumbai"],
//     ["capital of MP","Bhopal"],
//     ["capital of RJ","Jaipur"]
// ])

// count=0
// for(let [k,v] of quiz.entries()){
//     //console.log(k,v)
//     if (k.startsWith('c')){
//        let UserInput=prompt(k)
//        if( UserInput===v)
//         {
//             count=count+1
//         }
//         }
//     }
    
// if(count===3){
//     console.log("Gold")
// }else if(count===2){
//     console.log("Silver")
// }else if(count===1){
//     console.log("Broze")
// }else{
//     console.log("please try again")
// }


// let quiz=new Map([
//     ["question","answer"],
//     ["capital of MH","Mumbai"],
//     ["capital of Rj","Jaipur"],
//     ["capital of MP","Bhopal"]
// ])

// count=0
// for(let[k,v] of quiz.entries()){
//     if(k.startsWith('c')){
// let UserInput=prompt('k')
// if(UserInput===v){
//     count=count+1
// }
//     }
// }


 count=0
 for(let[k,v] of quiz.entries()){
 if(k.startsWith('c')){
    let UserInput=prompt('k')
    if(UserInput===v){
        count=count+1
    }
 }
 
}

 for(let [k,v] of quiz.entries()){
    if(k.startsWith('c')){
        UserInput=prompt('k')
        if(UserInput===v){
            count=count+1
        }
    }
 }
// if(count===3){
//     console.log("Golden")
// }else if (count==2){
//     console.log("silver")
// }else if(count===1){
//     console.log("broze")
// }else{
//     console.log("please try again")
// }

 let array1=[4,4,4,4,56,45,34,54,45,56,87,87,67,90]
// let Array=[]
 let e1=new Set(array1)
console.log(e1)
let e2=Array.from(e1)
console.log(e2)


// let duplicate = ["amol","raj","amol","ninad","vijeet"]
// let q7 = new Set(duplicate)
// console.log(q7)
// let w1 = Array.from(q7)
// console.log(w1)

let values=["Ram","sham","Ram","Dev"]
let e3=new Set(values)
console.log(e3)
let e4=Array.from(e3)
console.log(e4)

// let quiz=([
//     ["question","answer"],
//     ["capital of MH","Mumbai"],
//     ["capital of MP","Bhopal"],
//     ["capital of Rj","Japur"]
// ]
// )

// let count=0
// for(let [k,v] of quiz.entries()){
//     if(k.startWith('c')){
//         let UserInput=prompt('k')
//         if(UserInput===v){
//             count=count+1
//         }
//     }
// }

// if(count===3){
//     console.log("Golden")
// }else if(count===2){
//     console.log("silver")
// }else if (count===1){
//     console.log("broze")
// }else{
//     console.log("please try again")
// }

let total=[12,32,21,32,11,45,45,65,65,55,44]
let e5=new Set(total)
console.log(e5)
let e6=Array.from(e5)
console.log(e6)

