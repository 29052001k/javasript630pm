let Kalyani={
    FullName:"Kalyani",
    age:23,
    rollno:10,
    Skills:["JavaScript","CSS","Python"]
}
console.log(Kalyani)

class person1{
    FullName=undefined
    rollno=undefined
    age=undefined
    skills=undefined
}
let vaish=new person1()
console.log(vaish)
vaish.FullName="vaish"
vaish.rollno=12
vaish.age=34
vaish.skills=["Python","Javascript","Css"]
console.log(vaish)


// template
// program1

class person {
constructor(FullName,age,rollno,Skills){
this.FullName=FullName
this.age=age
this.rollno=rollno
this.Skills=Skills
}
}
let kalyani=new person("kalyani hadole",23,10,["Python","Javascript","CSS"])
console.log(kalyani)
let aryan=new person("aryan pawar",10,23,["Java","Python","Javascript"])
console.log(aryan)

//program2
class person3{
    constructor(FullName,age,rollno,skills){
        this.FullName=FullName
        this.age=age
        this.rollno=rollno
        this.skills=skills
    }
}
let vaishnavi=new person("Vaishanvi Kumavat",15,21,["Python","Singing","Learning"])
console.log(vaishnavi)
let shreya=new person("shreya shinde",16,11,["CSS","dancing","Singing"])
console.log(shreya)


// MORNING CLASS
//object
// object syntax
// let variablename{
    // property:Value
//}
// statement

// object literal
let student={
    firstName:"Kalyani",
    rollNo:10,
    age:23,
    skills:['python',"javascript","SQL"]
}
console.log(student)

// By creating instance on object
let newObject=new Object()
console.log(newObject)
console.log(typeof(newObject)) // object

// by using object constructor 

class student1{
constructor(FullName,Age,rollNo,skills){
    this.FullName=FullName
    this.Age=Age
    this.rollNo=rollNo
    this.skills=skills
}
}
let dhanvi=new person("Dhanvi",12,23,["Python","Javascript"])
console.log(dhanvi)



// U - Updating object(Insert/Update property)

// We have 3 way to insert properties in object ==>
// Def adding property - when going to add new property in object
// Def updating property - prev existing properties value can be update


// 1. Ouside the class -->

let obj = new Object()
console.log(obj)

obj.fname = "Kalyani"   // adding property
console.log(obj)
obj.fname = "Dhanvi"
console.log(obj)     // updating property

// Retrive property
// ObjectName.PropertyName  
// ObjectName.PropertyName = value

//2. Using function 

class studentF{
    firstName=null;
    Age=null

    setFname(fname){
this.firstName=fname
    }
    setAge(age){
this.Age=age
    }
}
let Ram=new studentF()
console.log(Ram)
Ram.setFname("Nilesh")
console.log(Ram)
Ram.setAge(23)
console.log(Ram)

//3 Using constructor

class studentF1{
    constructor(fname,age){
        this.fname=fname
        this.age=age

    }
}
let shweta=new studentF1("shweta",23)
console.log(shweta)
studentF1.mobNo="12345"
console.log(studentF1)

// Inbuild methods of object --->
// Syntax ==> Object.methodName(ObjName)

// 1. keys()
// 2. values()
// 3. entries()
// 4. hasOwnProperty(Arug)

let stu={
    firstName:"Ganesh",
age:12
}
//1keys
console.log(Object.keys(stu))
//2 values
console.log(Object.values(stu))
//3 entries
console.log(Object.entries(stu))
//4 hasownproperty
console.log(stu.hasOwnProperty("firstName"))  //true
console.log(stu.hasOwnProperty("Age"))  //false
console.log(stu.hasOwnProperty("age")) //true
