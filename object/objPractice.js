let students = [
    {
        FirstName: "Kalyani",
        city: "Mumbai",
        age: 22,
        skills: ["python", "java", "css", "js"],
        marks: 90
    }
    ,
    {
        FirstName: "Amruta",
        city: "Pune",
        age: 28,
        skills: ["python1", "java1", "css1", "js1"],
        marks: 90
    }
    ,
    {
        FirstName: "Aryan",
        city: "Kalkata",
        age: 12,
        skills: ["python2", "java2", "css2", "js2"],
        marks: 90
    }

]


students.forEach(function (el) {
   console.log(el.FirstName+":"+ el.skills.length)
 })
// students.forEach(function (el) {
//     console.log(el.FirstName+":" + el .skills.length)
// })

students.forEach(function(el){
console.log(el.skills.length)
})
console.log(students)

students.forEach(function(el){
    console.log(el.skills)
    el.skills.push('jira')
})
console.log(students)

let q1=students.filter(function(el){
return el.skills.includes("python")

})
console.log(students)

students.forEach(function(el){
    console.log(el.FirstName)
})
//console.log(students)

students.forEach(function(el){
    console.log(el.FirstName , el.skills.length)
})

students.forEach(function(el){
    return el.FirstName +":"+ el.skills.length
})
console.log(students)
// program 1
 students.forEach(function(el){
    el.skills.push("jira1")
 })
 console.log(students)

 let e1=students.filter(function(el){
    return el.skills.includes('python2')
 })
 console.log(e1)

 students.forEach(function(el){
    console.log(el.FirstName)
 })
 
 students.forEach(function(el){
    if(el.skills.includes('python')){
    console.log(el.skills)
    }
 })

 let e2=students.filter(function(el){
    return el.city=='Pune'
 })
 console.log(e2)

 e2.forEach(function(el){
    console.log(el.FirstName)
 })

 students.forEach(function(el){
    if(el.city=='Kalkata'){
        console.log(el.FirstName)
    }
 })

let e3= students.filter(function(el){
    return el.city=='Pune'&& el.skills.includes('python1')
 })
 console.log(e3)

 e3.forEach(function(el){
    console.log(el.FirstName)
 })


 students.forEach(function(el){
    if(el.city=='Pune'&& el.skills.includes('python1')){
        console.log(el.FirstName)
    }
 })

 let e4=students.reduce(function(acc,el){
    return acc+el.age
 },0)
 console.log(e4/students.length)