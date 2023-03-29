
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonText = document.querySelector('#addFruits')

ulList.addEventListener('click',(event)=>{
    if(event.target.tagName==="BUTTON"){
        if(event.target.className==="remove"){
let li=event.target.parentElement
let ul=li.parentElement
ul.removeChild(li)
}
        else if(event.target.className==="up"){
let li=event.target.parentElement
let ul=li.parentElement
let preEle=li.previousElementSibling
if(preEle){
    ul.insertBefore(li,preEle)
}
  }
        else if (event.target.className==="down"){
            let li=event.target.parentElement
            let ul=li.parentElement
            let nextEle=li.nextElementSibling
            if(nextEle){
                ul.insertBefore(nextEle,li)
            }
        }
    }
})



buttonText.addEventListener('click', () => {
    let Text = inputText.value
    let newLi = document.createElement('li')
    newLi.textContent = Text
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputText.value = " "
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