// CRUD in Arrays via only one method

//let associates = ["Ram", "Shyam"]

//Questions
// 1- C -> Add Gopal at the end
// 2- R -> Whats the output of splice method
// 2- U -> Update Shyam to Shayam
// 2- D -> Delete Shayam

// 1- C->
let associates = ["Ram", "Shyam"]
let newAssociates = associates.splice(2,0,"Gopal")
console.log("New array of associates: ", associates)

//2- R
console.log("Reading splice method- ", newAssociates)

//3- U
let newAssociates2 = associates.splice(1,1,"Shayam")
console.log("New array of associates: ", associates)

//4- D
let newAssociates3 = associates.splice(1,1)
console.log("New array of associates: ", associates)