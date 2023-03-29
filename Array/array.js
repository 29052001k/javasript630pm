// map()

let  arr=[1,2,3,4,5,6,7,8,9]
let arr2=[]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]+10)
//    let q1= (arr[i]+10)
//    arr2.push(q1)
// }
// console.log(arr2)
let q1=arr.map(function(el,index,array){

    return el+10
})
console.log(q1)


let name="Kalyani"
rrev=""

for(let i=0;i<name.length;i++){
    //console.log(name[i])
    rrev=name[i]+rrev
}
console.log(rrev)

//har element ke sath operation
let arr1=[11,22,33,44,55]
let arr3=[]

// let qq1=arr1.map(function(el){
//     return el+2
// })
// console.log(qq1)

// for(let i=0;i<arr1.length;i++){
//     //console.log(2+arr1[i])
//     let q1=2+arr1[i]
//     arr3.push(q1)
// }
//console.log(arr3)

for(let i=0;i<arr1.length;i++){
    let k=200+arr1[i]
    arr3.push(k)
}
console.log(arr3)


//filter

let a=[11,22,33,44,55,66]
let a2=[]

// let qq2=a.filter(function(el){
//     return el<30
// })
// console.log(qq2)

// for(let i=0;i<a.length;i++){
//     if(a[i]>30)
//     a2.push(a[i]) 
// }
// console.log(a2)

for(let i=0;i<a.length;i++){
    if(a[i]<30)
    a2.push(a[i])
}
console.log(a2)


// reduce

let aa2=[11,22,33,44,55,66]
let total=0

// let k=aa2.reduce(function(acc,el){
//     return acc+el
// },0)
// console.log(k)

for(let i=0;i<aa2.length;i++){
    total=total+aa2[i]
}
console.log(total)