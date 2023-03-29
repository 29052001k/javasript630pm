// function createUsers(){
//     return new Promise (function(resolve){
//         setTimeout(() => {
//             resolve("create Users")
//         },3000)
//     });
// }

// function getId(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("get id")
//         },2000)
//     })
// }

// function getInfo(){
//     return new Promise(function (resolve){
//         setTimeout(function(){
//             resolve("got info")
//         },1000)
//     })
// }

// createUsers()
// .then(function(res){
//     console.log(res)
//     return getId()
// })
// .then(function(res){
//     console.log(res)
//     return  getInfo()
// })
// .then(function(res){
//     console.log(res)
// })


// program 2

// function createUsers() {
//     return new Promise(function (resolve) {
//         setTimeout((response) => {
//             resolve("user created")
//         }, 3000);
//     })
// }

// function getId() {
//     return new Promise(function (resolve) {
//         setTimeout((response) => {
//             resolve("ID created")
//         }, 2000)
//     })

// }

// function getInfo() {
//     return new Promise(function (resolve) {
//         setTimeout((response) => {
//             resolve("Got Info")
//         }, 1000)
//     })

// }
// createUsers()
// .then(function(response){
//     console.log(response)
//     return getId()
// })
// .then(function(response){
//     console.log(response)
//     return getInfo()
// })
// .then(function(response){
//     console.log(response)
// })

// function createUsers(){
//    return new Promise(function(resolve,reject){
//     setTimeout(function(res){
//     resolve("userName Created")
//     },3000)
//    })
// }

// function getID(){
//    return new Promise((resolve,reject)=>{
//         setTimeout((res)=>{
//             resolve("got Id")
//     },2000)
//     } )
// }

// function getInfo(){
//    return new Promise((resolve,reject)=>{
//         setTimeout((res)=>{
//             resolve("Got Info")
//         },1000)
//     })
// }

// createUsers()
// .then(function(res){
//     console.log(res)
//     return getID()
// })
// .then(function(res){
// console.log(res)
// return getInfo()
// })
// .then(function(res){
//     console.log(res)
// })


// function createUsers() {
//     return new Promise(function (resolve, reject) {
//         setTimeout((res) => {
//             resolve("user Name created")
//         }, 3000);
//     })
// }

// function getId() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve("Get Id")
//         }, 2000);
//     })
// }

// function getInfo() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve("get Info")
//         }, 2000);
//     })
// }
// createUsers()
//     .then(function (res) {
//         console.log(res)
//         return getId()
//     })
//     .then(function (res) {
//         console.log(res)
//         return getInfo()
//     })
//     .then(function (res) {
//         console.log(res)
//     })


function createUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve("User Created")
        }, 3000)
    })
}

function getId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve("Get Id")
        }, 2000)
    })
}

function getInfo() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
       resolve("got Info")
    }, 1000)
  })
}

createUser()
.then(function(res){
    console.log(res)
    return getId()
})
.then(function(res){
    console.log(res)
    return getInfo()
})
.then(function(res){
    console.log(res)
})
