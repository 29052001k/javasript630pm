// if statement 

let a = 10
let b = 20
if (a > b) {
console.log(" a is greater")
} else {
console.log("b is greater")
}

//switch case
let city = "indore"
switch (city) {
case "pune":
console.log("MH")
break;
case "indore":
console.log("MP")
break;
case "jaipur":
console.log("RJ")
break;
default:
console.log("incorrect city name")
}

let a1 = 10
let b1 = 20
let c1 = 30
if (a1 > b1&& a1 > c1) {
  console.log("a1 is greater")
}
else if (b1 > a1 && b1 > c1) {
   console.log("b1 is greater")

}

else if (c1 > a1 && c1 > a1) {
  console.log("c1 is greater")
}


let marks = 65
if (marks>90){
console.log("Grade A")
}else if(marks >75){
console.log("Grade B")
}else if (marks>60 ){
console.log("Grade C")}


let marks1=45
if (marks1 > 90) {
console.log("Grade A")
} else if (marks1 > 75) {
  console.log("Grade B")
} else if (marks1 < 60) {
console.log("Grade C")
}



//MORNING CLASS 9 NOV



//variable declaration in  js = let , var , const

let a2=10
console.log(a2)
a=23
console.log(a)  // we can update the variable

var a3 = 12
console.log(a3)
var a4=32
console.log(a4)    // we can reusable the value

const a5=10
console.log(a5)
a=12              // we can not update the value
console.log(a)    //TypeError: Assignment to constant variable.

//Datatype in js 

// 1 Number
// 2 String
// 3 Null
// 4 Undefined
// 5 Array 
// 6 Oject 
// 7 Boolean



// function in js
//1 function declaration 
 function add(x,y){
    return x+y
 }
 let cc=add(23,43)
 console.log(cc)


//2 function expresssion 

let add= function(x,y){
   return x+y
}
let cc1= add(78,66)
console.log(cc1)

//3 arrow function 
let add= (x,y)=>{
   return x+y
}
let cc2=add(21,11)
console.log(cc2) 

// ADVANTAGES OF FUNCTION   //1 avoid the repetation of code
//2 use code is reusable
//3 increase the flexibilty of code

// ARITHEMSTIC OPREATION
// +,-,*,%,/
// ++ --> increment
// -- --> decrement

// ++ increment
let aa= 5
a++
console.log(aa)

// -- decrement 
let aa1=5
aa1--
console.log(aa1)


// TRUTHY AND FALSY VALUE
// true value= number, string , special symbole
// false vvalue= null, undefined, zero, empty string


// check the true and false value in js

if(1){
    console.log("true")
}else{
    console.log("false")
}


// ternery operator

1 ? console.log("true") : console.log("false")
 - 1 ? console.log("true") : console.log("false")
"kalyani" ? console.log("true") : console.log("false")
"" ? console.log("true") : console.log("false")
0 ? console.log("true") : console.log("false")
"@" ? console.log("true") : console.log("false")
undefined ? console.log("true") : console.log("false")
null ? console.log("true") : console.log("false")























































