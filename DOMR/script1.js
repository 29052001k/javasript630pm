let ulElement = document.querySelector('ul')
let inputElement = document.querySelector('input')
let buttonE = document.querySelector('#fruits')

console.log(ulElement)
console.log(inputElement)
console.log(buttonE)

buttonE.addEventListener('click', function() {
    let text = inputElement.value
    let liElement = document.createElement('li')
    liElement.textContent = text
    createButtons(liElement)
    ulElement.appendChild(liElement)
    inputElement.value =""
})

function createButtons(li){
    let r=document.createElement('button')
    r.textContent="Remove"
    r.className="remove"
    li.appendChild(r)

    let u=document.createElement('button')
    u.textContent="Up"
    u.className="up"
    li.appendChild(u)

    let d=document.createElement('button')
    d.textContent="Down"
    d.className="down"
    li.appendChild(d)

}