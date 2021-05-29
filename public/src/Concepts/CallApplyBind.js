let name = {
    firstname: "Abhishek",
    lastname: "Chaturvedi",
    
}

let printFullName = function(hometown){
        console.log('My name is ',this.firstname + ' ', this.lastname, ' and I am from ', hometown)
    }

printFullName.call(name, "Raipur(from call)")


let name2 = {
    firstname: "Rocky",
    lastname: "Star",
}

//Call
printFullName.call(name2, "London(from call)")

//Apply
printFullName.apply(name2, ["London(from apply)"])

//Bind
let newName = printFullName.bind(name2, "London(from bind)")
console.log(newName)
newName()