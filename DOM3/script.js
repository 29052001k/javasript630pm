// let ulelement = document.querySelector('ul')
// let buttonA = document.querySelector('button')
// let inputtext = document.querySelector('input')

// buttonA.addEventListener('click', function () {
//     let text = inputtext.value
//     let elementli = document.createElement('li')
//     elementli.textContent = text
//     ulelement.appendChild(elementli)
//     inputtext.value = " "
// })


let ulelement=document.querySelector('ul')
let buttonA=document.querySelector('button')
let inputtext=document.querySelector('input')

buttonA.addEventListener('click',function(){
   let text= inputtext.value
   let lielement=document.createElement('li')
   lielement.textContent=text
   //ulelement.appendChild(lielement)
   ulelement.prepend(lielement)
   inputtext.value=" "
})















