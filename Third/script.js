function  createUser(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("user created")
        },3000);
    })
}

function getId(){
   return new Promise(function(resolve,reject){
setTimeout(()=>{
    resolve("get Id")
},2000)
    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("get Info")
        },1000);
    })
}

// async function getUserId(){
//    let res= await createUsers()
//    console.log(res)
//    let res1= await getId()
//    console.log(res1)
//    let res2= await getInfo()
// console.log(res2)
// }
// getUserId()

async function getUserID(){
   let funGet= await Promise.all([
    createUser(),
    getInfo(),
    getId()
])
    console.log(funGet)   
}
getUserID()

// parallel excecution of promise

//Promise.all()
//Promise.any()
//Promise.race()
//Promise.allSettled()

