let a1=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("Hello")
    },2000);
})

let a2=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve ("Kalyani")
    },1000);
})

let a3=new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject("Hii")
    },4000);
})

let a4=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("Bye")
    }, 3000);
})

// Promise.all()

async function proAll(){
    let e1=await Promise.all([
        a1,a2,a3,a4
    ])
    console.log(e1)
}
//proAll()

// promise.allSettled()

async function proAllSettled(){
  let e2=  await Promise.allSettled([
a1,a2,a3,a4
    ])
    console.log(e2)
}
//proAllSettled()

//promise.race()

async function Race(){
let e3=await Promise.race([
    a1,a2,a3,a4  // a1(Kalyani-1000)
])
console.log(e3)
}
//Race()

// promise.any()
async function proAny(){
let e4=await Promise.any([
a1,
a2,
a3,
a4
])
    console.log(e4)
}
proAny()

















