let ulelement = document.querySelector('ul')
let buttonA = document.querySelector('#addfruits')
let inputElement = document.querySelector('input')

buttonA.addEventListener('click', function () {
    let text = inputElement.value
    let lielement = document.createElement('li')
    lielement.textContent = text
    createButtons(lielement)
   // ulelement.appendChild(lielement)
   ulelement.prepend(lielement)
    inputElement.value = " "
})

function createButtons(li) {
    let r = document.createElement('button')
    r.textContent = "Remove"
    r.className = "remove"
    li.appendChild(r)

    let u = document.createElement('button')
    u.textContent = "Up"
    u.className = "up"
    li.appendChild(u)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.className = "down"
    li.appendChild(d)



}