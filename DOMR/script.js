let headingOne=document.querySelector('h1')
let ulList=document.querySelector('ul')
let inputText=document.querySelector('input')
let buttonId=document.querySelector('#addFruits')

buttonId.addEventListener('click',function(){
    let text=inputText.value
    let newLi=document.createElement('li')
    newLi.textContent=text
    createButtons(newLi)
    ulList.appendChild(newLi)
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