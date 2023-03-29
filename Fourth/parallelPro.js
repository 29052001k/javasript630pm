function createUser() {
    setTimeout(() => {
        console.log("User Created")
    }, 3000)
}

function getId() {
    setTimeout(() => {
        console.log("Get Id")
    }, 2000)
}

function getInfo() {
    setTimeout(() => {
        console.log("got Info")
    }, 1000)
}

// createUser()
// getId()
// getInfo()

function createUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User Created")
        }, 3000);
    })
}

function getId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Get Id")
        }, 2000);
    })
}

function getInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("got Info")
        }, 1000)
    })
}

// createUser()
// .then(function(res){
//     console.log(res)
//     return getId()
// })
// .then(function(res){
//     console.log(res)
//     return getInfo()
// })
// .then(function(res){
//     console.log(res)
// })



async function getUser(){
   let a= await createUser()
   console.log(a)
   let b=await getId()
   console.log(b)
   let c=await getInfo()
   console.log(c)
}
getUser()


// promise combinators
// 1 promise.all()
// 2 promise.any()
// 3 promise.race()
// 4 promise.allsettled()

// 1 promise.all()

async function getUser() {
    let res1 = await Promise.all([
        createUser(),
        getId(),
        getInfo()
    ])
    console.log(res1)
}

getUser()


async function getUser1() {
    let k = await Promise.all([
        Promise.resolve("Hii"),
        Promise.resolve("it's"),
        Promise.reject("Kalyani") 
    ])
    console.log(k)
}
getUser1()

// 2 promise.allsettled()
async function getUser2(){
    let k1=await Promise.allSettled([
        Promise.resolve("Hii"),
        Promise.resolve("it's"),
        Promise.reject("Kalyani")
    ])
    console.log(k1)
}
getUser2()

// 3 promise.race()

async function getUser3() {
    let k3 = await Promise.race([
        new Promise(function (resolve, reject) {
            reject("Hii")
        }, 5000)
            .then(function (res) {
                console.log(res)
            }, function (res) {
                console.log(res)
            }),
        new Promise(function (resolve, reject) {
            resolve("Kalyani")
        }, 7000)
    ])
    console.log(k3)
}
getUser3()


async function getUser4() {
    let o = await Promise.race([
        new Promise(function (resolve, reject) {
            reject('Bye')
        }, 6000).then(function(res){
            console.log(res)
        },function(res){
            console.log(res)
        }),

        new Promise(function (resolve, reject) {
            resolve('Hi')
        }, 2000)

    ])

    console.log(o)
}

getUser4()


