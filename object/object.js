// program1
let arr = ["Kalyani", "Hadole", 22, 12]

let info = {
    FirstName: "Kalyani",
    LastName: "Hadole",
    Age: 22,
    RollNo: 12,

}
console.log(info)

// program2
let info2 = ["Kalyani", "Hadole", 22, 12]
// retrive
console.log(info2[1])
//update
info2[0] = "Nilesh"
console.log(info2)
// add
info2.push("Hindi")
info2.unshift("Mr")
console.log(info2)
// delete
info2.pop()
info2.shift()
info2.splice(2, 1)

// program 3
let arr2 = ["Kalyani", "Hadole", 22, 12]
let info3 = {
    FirstName: "Kalyani",
    LastName: "Hadole",
    Age: 22,
    RollNo: 12,
}

// retrive
console.log(info3.FirstName)
console.log(info3.LastName)

// update
info3.FirstName = "Nilesh"
info3.RollNo = 23
info3['LastName'] = "Pawar"
console.log(info3)

// add
info3.FirstName = "Nilesh"
info3.LastName = "Pawar"
console.log(info3)


// program4
let vehical = {
color: "red",
modelNo: 123,
type: "suzuki",
wheels: 4
}

// retrive
console.log(vehical.modelNo)
console.log(vehical['modelNo'])

// update
vehical.color = "Black"
console.log(vehical.color)
vehical['color'] = "blue"

// add
vehical.regNo = 8766
console.log(vehical.regNo)
vehical['city'] = "aurangabad"

// delete
delete vehical.modelNo
//console.log(vehical)
delete vehical['city']
console.log(vehical)


// program 5

let Bank = {
BankName: "SBI",
AccNo: 1002342,
Branch: "Vaijapur",
HolderName: "Kalyani"
}

// retrive
console.log(Bank.BankName)
console.log(Bank['Branch'])

// update
Bank.Branch = "Shrirampur"
console.log(Bank.Branch)
Bank['BankName'] = "Baroda"

// add
Bank.IFSCcode = 4321
console.log(Bank.IFSCcode)
Bank['Nomenee'] = "Nilesh"

// delete
delete Bank.Nomenee
console.log(Bank)

// program6

let Info4 = {
Name: "Kalyani",
LastName: "Hadole",
Color: "Gora",
age: 22
}
// retrive
console.log(Info4.Name)
console.log(Info4.Color)
// update
Info4.LastName = "Pawar"
console.log(Info4.LastName)
Info4['age'] = 23
// add
Info4.FatherName = "Navanth"
console.log(Info4.FatherName)
Info4['Gender'] = "Female"
// delete
delete Info4.LastName
console.log(Info4)
delete Info4['age']
console.log(Info4)


let info5 = {
Firstname: "kalyani",
LastName: "hadole",
RollNo: 10,
age: 22
}
for (let property in info5) {
console.log(property, info5[property])
}

console.log("*************************")
let vehicle = {
color: "black",
city: "pune",
type: "bolero"
}
for (let property in vehicle) {
console.log(property, vehicle[property])
}
console.log(vehicle)


console.log("**********************")

let students = [
{
FirstName: "Kalyani",
city: "Mumbai",
Age: 22,
Skills: ["Python", "javascript", "css", "java"],
Marks: 90
}
,
{
FirstName: "Aryan",
city: "Pune",
Age: 13,
Skills: ["Python1", "javascript1", "css1", "java1"],
Marks: 90
}
,
{
FirstName: "Amruta",
city: "Indore",
Age: 28,
Skills: ["Python", "javascript2", "css2", "java2"],
Marks: 90
}
]

// students.forEach(function (el) {
//     console.log(el.FirstName+":" + el.Skills.length)
// })

students.forEach(function (el) {
console.log(el.FirstName + ":" + el.Skills.length)
})


students.forEach(function (el) {
console.log(el.Skills)
el.Skills.push('Jira')
})
console.log(students)

students.forEach(function (el) {
console.log(el.Skills)
el.Skills.push('django')
})
console.log(students)

let q1 = students.filter(function (el) {
return el.Skills.includes("python")
})
// console.log(q1)

students.forEach(function (el) {
console.log(el.FirstName)
})

