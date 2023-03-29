//program 1

let pro = new Promise(function (resolve, reject) {
    let a = 23
    let b = 32

    if (a == b) {
        resolve("a and b are equal")
    } else {
        
        reject("a and b are not equal")
    }
})

pro.then(function (str) {
    console.log(str)
}, function (str) {
    console.log(str)
})

//program 2

let promise = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10

    if (a == b) {
        console.log("a and b are equal")
    } else {
        console.log("a and b are not equal")
    }
})

promise
    .then(function (str) {
        console.log(str)
    })
    .catch(function (str) {
        console.log(str)
    })


// program 3
let promise1 = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10

    if (a == b) {
        resolve("a and b are equal")
    } else {
        reject("a and b are not equal")
    }
})

promise1
    .then(function (str) {
        console.log(str)
    })
    .catch(function (str) {
        console.log(str)
    })
    .finally(function (str) {
        console.log("I will run any cases")
    })

//program 4
let promise2 = new Promise(function (resolve, reject) {
    let a = 100
    let b = 120

    if (a == b) {
        resolve("a and b are equal")
    } else {
        reject("a and b are not equal")
    }
})

promise2
    .then(function (str) {
        console.log(str)
    })
    .catch(function (str) {
        console.log(str)
    })
    .finally(function (str) {
        console.log("I will run any cases")
    })


// program 5
let promise3 = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10

    if (a == b) {
        resolve("a and b are equal")
    } else {
        reject("a and b are not equal")
    }
})

promise3
    .then(function (str) {
        console.log(str)   // a and b are equal
        return [11, 22, 33]
    })
    .then(function (p) {
        console.log(p)     //[11,22,33]
        console.log(p[1]) //22
    })
    .catch(function (str) {
        console.log(str)
    })
    .finally(function () {
        console.log("I will run any cases")
    })

// program 6
let promise5 = new Promise(function (resolve, reject) {
    let a = 30
    let b = 20

    if (a > b) {
        resolve("a is greater")
    } else {
        reject("b is greater")
    }
})

promise5
    .then(function (P) {
        console.log(P)
        return [11, 22, 33, 44]
    })
    .then(function (a) {
        console.log(a)
        console.log(a[1])
    })
    .catch(function (P) {
        console.log(P)
    })
    .finally(function () {
        console.log("I will run any cases")
    })

