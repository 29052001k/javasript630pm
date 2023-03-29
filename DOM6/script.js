let ulElement=document.querySelector('ul')
let buttonE=document.querySelector('#addFruits')
let inputElement=document.querySelector('input')

buttonE.addEventListener('click',function(){
    let text=inputElement.value
    let liElement=document.createElement('li')
    liElement.textContent=text
    createButtons(liElement)
    ulElement.appendChild(liElement)
    inputElement.value=" "
})

ulElement.addEventListener('click',function(event){
// console.log(event.target)
// console.log(event.target.tagName)
// console.log(event.target.className)

if(event.target.tagName=='BUTTON'){
if(event.target.className=='remove'){
    let liElement= event.target.parentElement
    let ulElement=liElement.parentElement
    ulElement.removeChild(liElement)
}
else if(event.target.className=='up'){
    let liElement=event.target.parentElement
    let ulElement=liElement.parentElement
    let preEle=liElement.previousElementSibling
    if(preEle){
        ulElement.insertBefore(liElement,preEle)
    }
} else if(event.target.className=='down'){
    let liElement=event.target.parentElement
    let ulElement= liElement.parentElement
    let nextEle=liElement.nextElementSibling
    if(nextEle){
        ulElement.insertBefore(nextEle,liElement)
    }
}
}
})

function createButtons(li){
   let r= document.createElement('button')
   r.textContent="Remove"
   r.className="remove"
   li.appendChild(r)

   let u= document.createElement('button')
   u.textContent="Up"
   u.className="up"
   li.appendChild(u)

   let d= document.createElement('button')
   d.textContent="Down"
   d.className="down"
   li.appendChild(d)
}

//ulElement.addEventListener('click',function(event){
// if(event.target.tagName=='BUTTON'){
//     if(event.target.className=='remove'){
//         let liElement=event.target.parentElement
//         let ulElement= liElement.parentElement
//    ulElement.removeChild(liElement)
//     }else if(event.target.className=='up'){
//         let liElement=event.target.parentElement
//         let ulElement=liElement.parentElement
//         preEle=liElement.previousElementSibling
//         if(preEle){
//             ulElement.insertBefore(liElement,preEle)
//         }
//     }else if(event.target.className=='down'){
//         let liElement=event.target.parentElement
//         let ulElement=liElement.parentElement
//         let nextEle=liElement.nextElementSibling
//         if(nextEle){
//             ulElement.insertBefore(nextEle,liElement)
//         }
//     }
// }
//})

// ulElement.addEventListener('click',function(event){
//     if(event.target.tagName=='BUTTON'){
//         if(event.target.className=='remove'){
//             let liElement= event.target.parentElement
//            let ulElement= liElement.parentElement
//           ulElement.removeChild(liElement)
//         }
//     }else if(event.target.className=='up'){
//         let liElement= event.target.parentElement
//            let ulElement= liElement.parentElement
//            let preEle=liElement.previousElementSibling
//            if(preEle){
//             ulElement.insertBefore(liElement,preEle)
//            }
//     }else if(event.target.className=='down'){
//         let liElement= event.target.parentElement
//            let ulElement= liElement.parentElement
//     let nextEle=liElement.nextElementSibling
//     if(nextEle){
//         ulElement.insertBefore(liElement,nextEle)
//     }
//         }
// })






















