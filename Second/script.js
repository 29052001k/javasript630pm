// program 1
// function renderHtml(el) {
//     document.write(`<h1>${el.id}</h1>`)
//     document.write(`<p>${el.first_name}</p>`)
//     document.write(`<p>${el.last_name}</>`)
//     document.write(`<p>${el.email}</p>`)
//     document.write(`img scr=${el.avatar}`)
// } 

// function getUserPage(pageNumber) {
//     return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
//         .then(function(response) {
//             return response.json()
//         })
// }

// function getUserId(id) {
//    return fetch(`https://reqres.in/api/users/${id}`)
//         .then(function(response){
//             return response.json()
//         })
// }

// getUserPage(2)
//     .then(function (res) {
//         //console.log(res.data[0].id)
//         return res.data[0].id
//     })
//     .then(function (id) {
//         return getUserId(id)
//     })
//     .then(function (res) {
//         console.log(res)
//         renderHtml(res.data)
//     })

// console.log('*******************************************************************************)   
function renderHtml(el) {
    document.write(`<h1>${el.id}</h1>`)
    document.write(`<h2>${el.first_name}</h2>`)
    document.write(`<h2>${el.last_name}</h2>`)
    document.write(`<p>${el.email}</p>`)
    document.write(`img scr=${el.avatar}`)
}

function getUserId(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (response) {
            return response.json()
        })
}

function getUserInfo(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
}

// getUserId(1)
// .then(function(res){
//     return res.data[0].id
// })
// .then(function(id){
//  return getUserInfo(id)
// })
// .then(function(res){
//     renderHtml(res.data)
// })

// console.log('***********************************************************************')
// Using async Await

// async function getUserId1(pageNumber){
//    let res = await getUserId(pageNumber)
// let id=res.data[0].id

// let res1=await getUserInfo(id)
// renderHtml(res1.data)
// }
// getUserId1(1)

// async function getUserId1(pageNumber){
//     let res=await getUserId(pageNumber)
//     let id=res.data[0].id
//    let id1= await getUserInfo(id)
//    renderHtml(id1.data)
// }
// getUserId1(1)

// async function getUserId1(pageNumber){
//     let res=await getUserId(pageNumber)
//    let id= res.data[0].id
//    let res2 = await getUserInfo(id)
//    renderHtml(res2.data)
// }
// getUserId1(2)

async function getUserID(pageNumber) {
    let res = await getUserId(pageNumber)
    let id = res.data[0].id
    let res2 = await getUserInfo(id)
    renderHtml(res2.data)
}
getUserID(1)

async function getInfo(){
   let res= await getUserId(pageNumber)
   let id=res.data[0].id
   let res2=await getUserInfo(id)
   renderHtml(res2.data)
}
getInfo(2)













