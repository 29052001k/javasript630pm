//by Tagname

let tagName=document.querySelector('h1')
console.log(tagName)

let byGet=document.getElementsByTagName('li')
console.log(byGet)

//byid

let byId=document.getElementById('two')
console.log(byId)

//byClassName

let byClassName=document.getElementsByClassName('fruits')
console.log(byClassName)

//retrive
let headTwo=document.querySelector('h2')
let text=headTwo.className
console.log(text)
console.log(headTwo)

//adding

headTwo.classList.add('five')
headTwo.classList.add('four')
//remove

headTwo.classList.remove('four')

headTwo.classList='six'
//toggle

headTwo.classList.toggle('six')
headTwo.classList.toggle('six')

let haedthree=document.querySelector('h3')
console.log(haedthree)

//for h4
let headFour=document.querySelector('h4')
console.log(headFour)

headFour.classList.add('seven')
headFour.classList.remove('seven')

headFour.classList='Eight'
headFour.classList.remove('Eight')
headFour.classList.toggle('Nine')

//otherAttributes

let h4Att=document.querySelector('h4')
console.log(h4Att.getAttribute('id'))

h4Att.setAttribute('name',"K")






