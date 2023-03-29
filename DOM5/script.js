let ulElement=document.querySelector('ul')
let buttonA=document.querySelector('#addbutton')
let inputElement=document.querySelector('input')

buttonA.addEventListener('click',function(){
    let text=inputElement.value
    let liElement=document.createElement('li')
    liElement.textContent=text
    createButtons(liElement)
    ulElement.appendChild(liElement)
    inputElement.value=" "
})

// ulElement.addEventListener('click',function(event){
//     // console.log(event.target)
//     // console.log(event.target.tagName)
//     // console.log(event.target.className)

//     if(event.target.tagName=='BUTTON'){
//         if(event.target.className=='remove'){
//             let liElement=event.target.parentElement
//             let ulElement=liElement.parentElement
//             ulElement.removeChild(liElement)

//         }
//         else if(event.target.className=='up'){
//            let liElement= event.target.parentElement
//            let ulElement=liElement.parentElement
//     let preEle=liElement.previousElementSibling
//     if(preEle){
//      ulElement.insertBefore(liElement,preEle)
//     }
//  }
//         else if(event.target.className=='down'){
//            let liElement= event.target.parentElement
//            let ulElement=liElement.parentElement
//            let nextLis=liElement.nextElementSibling
//            if(nextLis){
//             ulElement.insertBefore(nextLis,liElement)
//            }
//         }
//     }
// })

function createButtons(li){
let remove=document.createElement('button')
remove.textContent="Remove"
remove.className="remove"
li.appendChild(remove)

let up=document.createElement('button')
up.textContent="Up"
up.className="up"
li.appendChild(up)

let down=document.createElement('button')
down.textContent="Down"
down.className="down"
li.appendChild(down)

}