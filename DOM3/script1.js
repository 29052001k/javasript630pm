// let lielement = document.querySelectorAll('li')
// let buttonA = document.querySelector('button')
// console.log(lielement)

// buttonA.addEventListener('click', function () {
//     for (let i = 0; i < lielement.length ; i++) {
//         console.log(lielement[i].textContent)
//         lielement[i].style.color = "Green"
//     }
// })

let lielement=document.querySelectorAll('li')
let buttonA=document.querySelector('button')

buttonA.addEventListener('click',function(){
    for(let i=0;i<lielement.length;i++){
    console.log(lielement[i].textContent)
    lielement[i].style.color="Purple"
   
    }
})