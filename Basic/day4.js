// function declaration 
//1 function without parameter and without return type
function add(){
    console.log(10+20)
}
add()


// 2 function with parameter and without return type
function addB(x,y){
console.log(x+y)
}
addB(30,65)

//3 function with parameter and with return type 

function add(x,y){
    return x+y
}
let cc=add(23,32)
console.log(cc)

// 4 function without parameter and with return type

function pi(){
    return 3.14
}
console.log(pi())


//2 function expression
//1 function without parameter and without return type

let add=function(){
   console.log(10+20)
}
add()

//2 function with parameter and without return type 

let addB=function(x,y){
    console.log(x+y)
}
addB(32,12)

// 3 function with parameter and with return type

let addC=function (a,b){
    return a+b
}
let ccc=addC(43,11)
console.log(ccc)

//4 function without parameter and with return type
let addD= function ()
{
   return 12
 }
 let bbbb=addD()
 console.log(bbbb)


//3 arrow function
//1 function without parameter and without return  type

let sum=()=>{
    console.log(21+11)
}
sum()

// 2 function with parameter and without return type

let sum2=(aa,bb)=>{
   console.log(aa+bb)
}
sum2(23,12)

//3 function with parameter and with return type

let sum3 =(x1,y1)=>{
    return x1+y1
}
let total=sum3(56,43)
console.log(total)

// 4 function without parameter and with return type 

let sum4=()=>{
    return 12
}
let bbb=sum4()
console.log(bbb)
















