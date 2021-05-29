// Find vs Filter

// Find always retuns the first matched element 

let numArray = [3,45,1,6,676,34]
//check the first element it doesnt matter wherever it find the result element wherther on right or left side of it 
// Otherwise then satisfied solution, it will return undefined
let newArray = numArray.find(
    (num) => {
    console.log(num)
    return num;
    }   
)

//return max than 45
let newArray2 = numArray.find(
    (num) => {
    // return num > 45;
    return num > 1;
    }   
)
console.log('return max than 45 - ',newArray2)

//return max than highest number 
let newArray3 = numArray.find(
    (num) => {
    // return num > 45;
    return num > 4567;
    }   
)
console.log('return max than highest number   - ', newArray3)

// To want the index number just replace find with findInde
//return max than highest number 
let newArray4 = numArray.findIndex(
    (num) => {
    // return num > 45;
    return num > 457;
    }   
)
console.log('return max than highest number - ', newArray4)



// -------------------- FILTER - It creates a new array with all elements that pass the requirement
//return with filter 
let newArray5 = numArray.filter(
    (num) => {
    // return num > 45;
    return num > 10;
    }   
)
console.log('filter value - ',newArray5)

// with element and index 
let newArra7     = numArray.filter(
    (num, index, arr) => {
        console.log(`${num}, the index is ${index}, aadn the array is  ${arr}`)
    // return num > 45;
    return num > 10;
    }   
)
console.log('filter value - ',newArra7)