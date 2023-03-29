//<h1 class="heading" id="one" name="Nm"> FruitsHeading</h1>

let tagname=document.querySelector('h1')
let byId=document.querySelector('#one')
let byClass=document.querySelector('.heading')
let byC=document.querySelector('h1[name="Nm"]')


//getElementById()
 let byId1=document.getElementById('one')
 console.log(byId1)

 //html Element
let htmlEle=document.getElementsByClassName('Fruits')
console.log(htmlEle)
console.log(htmlEle.length)

// // html collection
// let byClassName  = document.getElementsByClassName('fruits')
// console.log(byClassName)
// console.log(byClassName.length)


// // node list
// let byCss = document.querySelectorAll('.fruits')
// console.log(byCss)
// console.log(byCss.length)

let byCss=document.querySelectorAll('Fruits')
console.log(byCss)

// // tagName
 let byTag=document.querySelector('li')
 console.log(byTag)

let tagName=document.getElementsByTagName('li')
console.log(tagName)

//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByName()

// // class
let headingTwoEle = document.querySelector('h2')
console.log(headingTwoEle.className)

headingTwoEle.classList.add('HeadingTwo')
console.log(headingTwoEle)

headingTwoEle.classList.remove('headTwob')
console.log(headingTwoEle)

headingTwoEle.className = "new"
console.log(headingTwoEle)


