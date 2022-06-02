// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


//TODO --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci sequence.


//TODO a) Create a test with expect statements for each of the variables provided.

describe("fibArray", () => {
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
        const fibLength1 = 6
        // Expected output: [1, 1, 2, 3, 5, 8]
        const fibLength2 = 10
        // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
        expect(fibArray(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibArray(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

//* Great the test failed because the function was not defined.
//* ReferenceError: fibArray is not defined

//TODO b) Create the function that makes the test pass.

// Start by declaring the function that takes in a number which will determine the length of the fibonacci array

// const fibArray = (length) => {
//     // The question specified that the length must be greater than 2 and so we know that the array will start with [1,1]
//     let newArray = [1,1]
//     // We need an if statement to catch if there is an input less than or equal to 2
//     if( length <= 2) {
//         return "Specified array length is too short"
//     } else {
//         // We start at index 2 because the first two elements are already determined
//         for (let i = 2; i < length; i++ ) {
//             // We look at 2 elements behind the current index and add it to the element 1 behind the current index to get the value we need at the current index. This way we can look backwards.
//             newArray.push(newArray[i-2] + newArray[i-1])
//         }
//     }
//     return newArray
// }
//* We run the function through our test and we pass!
// PASS  ./code-challenges.test.js
// fibArray
//   ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)

//TODO We can try to refactor now.
// The only way i can refactor this at this time is to just get rid of the unnecessary parentheses around the parameter
const fibArray = length => {
    let newArray = [1,1]
    if ( length <= 2){
        return "Specified array length is too short"
    } else {
        for (let i = 2; i < length; i++ ) {
            newArray.push(newArray[i-2]+newArray[i-1])
        }
    }
    return newArray
}


//TODO --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.


//TODO a) Create a test with expect statements for each of the variables provided.

describe("onlyOddSort", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        // Expected output: [-9, 7, 9, 199]
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        // Expected output: [-823, 7, 23]
        expect(onlyOddSort(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyOddSort(fullArr2)).toEqual([-823, 7, 23])
    })
})

//* Great! the test failed because the function onlyOddSort was not defined.
//*  FAIL  ./code-challenges.test.js
//*   fibArray
//*   ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)
//* onlyOddSort
//*   ✕ takes in an array and returns a new array of only odd numbers sorted from least to greatest

//TODO b) Create the function that makes the test pass.

// // First we declare our function onlyOddSort, that takes in an array
// const onlyOddSort = (array) => {
//     //First I want to iterate through the array and filter out the numbers into an array
//     let numArray = array.filter(value => {
//         // We can use the type of built in method to check the data type of the value in the element
//         return typeof value === "number"
//     }) 
//     //We then filter the numArray for only odd numbers.
//     let oddArray = numArray.filter(value => {
//         return value % 2 !== 0
//     })
//     // We then return oddArray after sorting. We need another callback function for the sort method, because the way it works is that it converts the elements into a string and was returning an array that looked like [-9, 199, 7, 9]
//     return oddArray.sort((a, b) => a-b)
// }

//* The test passes!
//* PASS  ./code-challenges.test.js
//* fibArray
//*   ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (2 ms)
//* onlyOddSort
//*   ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest (1 ms)

//TODO Now we can try to refactor

// I wanted to see if i could refactor by chaining everything together, this will also allow us to get rid of a lot of brackets and parentheses
//  We can skip all the variable declarations and attempt to chain them all together. We can also remove a lot of brackets within the array methods as well, given that they only take a single value and there is only a single line for the return
const onlyOddSort = array => array.filter(value => typeof value === "number").filter(value => value % 2 !== 0).sort((a, b) => a - b)

//* Pass
//* PASS  ./code-challenges.test.js
//* fibArray
//*   ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)
//* onlyOddSort
//*   ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest
//* sumArray
//*   ✓ takes in an array and returns an array of the accumulating sum (empty array returns an empty array) (1 ms)



//TODO --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

//TODO a) Create a test with expect statements for each of the variables provided.



describe("sumArray", () => {
    it("takes in an array and returns an array of the accumulating sum (empty array returns an empty array)", () => {
        const numbersToAdd1 = [2, 4, 45, 9]
        // Expected output: [2, 6, 51, 60]
        const numbersToAdd2 = [0, 7, -8, 12]
        // Expected output: [0, 7, -1, 11]
        const numbersToAdd3 = []
        // Expected output: []
        expect(sumArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(sumArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(sumArray(numbersToAdd3)).toEqual([])
    })
})


//TODO b) Create the function that makes the test pass.


// // We start by declaring a function called sumArray that takes in an array as an argument/
// const sumArray = (array) => {
//     // We declare sumSeqArray to store an empty array to store the new sequentially added array
//     let sumSeqArray = []
//     // We declare a variable to store the previous number needed to continue summing
//     let prevNum = 0
//     //We want to return the original array if the array is empty.
//     if (array === sumSeqArray) {
//         return array
//     } else {
//         //This loop will start at the zero index and continue to loop the length of the array
//         for (let i = 0; i < array.length; i++){
//             //I wanted a way to keep track of all the previous numbers added up and would push the sums of sequential array elements into sumSeqArray.
//             prevNum = prevNum + array[i]
//             sumSeqArray.push((prevNum))
//         }
//     }
//     return sumSeqArray
// }
//* Run the test and we are good!
//* PASS  ./code-challenges.test.js
//* fibArray
//*   ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)
//* onlyOddSort
//*   ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest (1 ms)
//* sumArray
//*   ✓ takes in an array and returns an array of the accumulating sum (empty array returns an empty array)


//TODO Refactor
// We start our refactor by getting rid of some parentheses
const sumArray = array => {
    let sumSeqArray = []
    // We can write the if statement and return on one line for single returns
    if(array === sumSeqArray) array;
    //we can go straight into the for loop
    for (let i = 0, prevNum = 0; i < array.length; i++){
        //We can declare prevNum inside the for statement because we only need prevNum within the scope of the loop
        prevNum = prevNum + array[i]
        sumSeqArray.push((prevNum))
        }
        return sumSeqArray
    }

    //* Still works
    //* PASS  ./code-challenges.test.js
    //* fibArray
    //*   ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)
    //* onlyOddSort
    //*   ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest
    //* sumArray
    //*   ✓ takes in an array and returns an array of the accumulating sum (empty array returns an empty array) (1 ms)
