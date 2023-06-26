// let ulElement = document.querySelector('ul')
// let inputText = document.querySelector('input')
// let buttonE = document.querySelector('#addfruits')

// console.log(ulElement)
// console.log(inputText)
// console.log(buttonE)


// ulElement.addEventListener('click', function (event) {
//    if (event.target.tagName =='BUTTON') {
//       if (event.target.className == 'remove') {
//          let liEle = event.target.parentElement
//          let ulElement = liEle.parentElement
//          ulElement.removeChild(liEle)

//       }
//       else if (event.target.className == 'up') {
//          let liEle = event.target.parentElement
//          let ulElement = liEle.parentElement
//          let preEle = liEle.previousElementSibling
//          if (preEle) {
//             ulElement.insertBefore(liEle, preEle)
//          }

//       }
//       else if (event.target.className == 'down') {
//          let liEle = event.target.parentElement
//          let ulElement = liEle.parentElement
//          let nextEle = liEle.nextElementSibling
//          if (nextEle) {
//             ulElement.insertBefore(nextEle, liEle)
//          }
//       }
//    }
// })
   

// buttonE.addEventListener('click', function () {
//    let text = inputText.value
//    let liElement = document.createElement('li')
//    liElement.textContent = text
//    createButtons(liElement)
//    ulElement.appendChild(liElement)
//    inputText.value = " "
// })

// function createButtons(li) {
//    let r = document.createElement('button')
//    r.textContent = "Remove"
//    r.className = "remove"
//    li.appendChild(r)

//    let u = document.createElement('button')
//    u.textContent = "Up"
//    u.className = "up"
//    li.appendChild(u)

//    let d = document.createElement('button')
//    d.textContent = "Down"
//    d.className = "down"
//    li.appendChild(d)
// }



let ulElement = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonE = document.querySelector('#addfruits')

buttonE.addEventListener('click',function(){
   let text=inputText.value
 let liElement=  document.createElement('li')
 liElement.textContent=text
 createButtons(liElement)
 ulElement.appendChild(liElement)
 inputText.value=""
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

ulElement.addEventListener('click',function(event){
   if(event.target.tagName=="BUTTON"){
      if(event.target.className=='remove'){
        let liEle= event.target.parentElement
      let ulList=  liEle.parentElement
      ulList.removeChild(liEle)
      }

      else if(event.target.className=='up'){
         let liEle= event.target.parentElement
         let ulList=  liEle.parentElement
        let preEle= liEle.previousElementSibling
        if(preEle){
         ulList.insertBefore(liEle,preEle)
        }
      }
      else if (event.target.className=='down'){
         let liEle= event.target.parentElement
        let ulList= liEle.parentElement
      let newLi=  liEle.nextElementSibling
      if(newLi){
         ulList.insertBefore(newLi,liEle)
      }
      }
   }
})
