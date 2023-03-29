let ulLlist=document.querySelector('ul')
let inputText=document.querySelector('input')
let headOne=document.querySelector('h1')
let liList=document.querySelectorAll('li')

inputText.addEventListener('change',function(){
   let txt= inputText.value
   headOne.textContent=`Name:${txt}`
   inputText.value=""
})

ulLlist.addEventListener('click',function(){
liList.forEach((el) => {
el.style.color="green"
    })
})