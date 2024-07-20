console.log(`-------------------------- 
    Question 1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.`)

/*
* Step 1: Programmatically subtract the value of the first element in the array from the value in the last element of the      array.
*       Do not use numbers to reference the last element, find it programmatically.
        ages[7] - ages[0] is not allowed!
* Step 2: Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
* Step 3: Use a loop to iterate through the array and calculate the average age. 

* ↓ YOUR CODE HERE ↓ **/

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

ages.push(102);
console.log(ages);

function average (ages) {
    let sum = 0;
    let count = ages.length;
    for (let i = 0; i < count; i++) {
        sum += ages[i]
    }
    return sum/count;
}
console.log(average(ages));


console.log(`-------------------------- 
    Question 2: Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.`)

/*
* Step 1: Use a loop to iterate through the array and calculate the average number of letters per name.
* Step 2: Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
 
* ↓ YOUR CODE HERE ↓ **/

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

let totalLetters = 0
    for (let i = 0; i < names.length; i++) {
        totalLetters += names[i].length;
    }
console.log(`Step 1: The average number of letters per name is ${totalLetters/names.length}`);

for (let i = 0; i < names.length; i++) {
    console.log(`Step 2: ${names.join(" ")}`);
}

console.log(`-------------------------- 
    Question 3: How do you access the last element of any array?`)

/* ↓ YOUR CODE HERE ↓ **/
console.log(`To access the last element on an array, you print the array with the array name.length -1 in the brackets i.e. console.log(names [names.length -1]). Since the length of an array starts counting at 0, you have to subtract 1 to get the last element.`)
console.log(`The last name in the array from question 2 is ${names[names.length - 1]}.`);


console.log(`-------------------------- 
    Question 4: How do you access the first element of any array?`)

/* ↓ YOUR CODE HERE ↓ **/
console.log(`To access the first element on an array, you print the array with 0 in the brackets since an array count starts with 0. i.e. console.log(names [0])`)
console.log(`The first name in the array from question 2 is ${names[0]}.`);


console.log(`-------------------------- 
    Question 5: Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.`)

/* For example:
let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array

* ↓ YOUR CODE HERE ↓ **/

let nameLengths = []
    for(i=0; i<names.length; i++){
        nameLengths.push(names[i].length);
    }
    console.log(nameLengths);


console.log(`-------------------------- 
    Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`)

/* ↓ YOUR CODE HERE ↓ **/
    
let lengthSum = 0;

    for (let i = 0; i < nameLengths.length; i++) {
        lengthSum += nameLengths[i];
    }
    console.log(`The sum of the array nameLengths is ${lengthSum}.`);


console.log(`-------------------------- 
    Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.`)

/* (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

/* ↓ YOUR CODE HERE ↓ **/

let someFunction = (word,n) => {
    let result = "";
    for (i = 0; i < n; i++){
        result += word;
    }
    return result;
}
console.log(someFunction("Hello", 5))


console.log(`-------------------------- 
    Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.`)

/* ↓ YOUR CODE HERE ↓ **/

let createFullName = (firstName, lastName) => `${firstName}  ${lastName}`;

console.log(createFullName("Christian", "King"));

console.log(`-------------------------- 
    Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`)

/* ↓ YOUR CODE HERE ↓ **/

let array = [70, 24, 43]
let arraySum = 0
function greaterThan (){
    for (let i = 0; i < array.length; i++) {
        arraySum += array[i];
        if(arraySum > 100) {
            return true;
        } 
    }
    return false
}
console.log(greaterThan(arraySum))
// console.log(arraySum)


console.log(`-------------------------- 
    Question 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.`)

/* ↓ YOUR CODE HERE ↓ **/

function averageOfArray () {
    let sumOfArray = 0;
    let countOfArray = array.length;
    for (let i = 0; i < countOfArray; i++){
        sumOfArray += array[i];
    }
    return sumOfArray/countOfArray;
}
console.log(averageOfArray(array))

console.log(`-------------------------- 
    Question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`)

/* ↓ YOUR CODE HERE ↓ **/

let group1 = [1, 3, 15, 7, 9]
let group2 = [2, 4, 6, 8, 10]
let g1Sum = 0
let g2Sum = 0

function greaterAvg (g1, g2){
    for(i = 0; i < group1.length; i++){
        g1Sum += group1[i];
    }
    for(i = 0; i < group2.length; i++){
        g2Sum += group2[i];
    }
    if((g1Sum/group1.length) > (g2Sum/group2.length)) {
        return true;
    }else {
        return false
    }
}
console.log(greaterAvg())
// console.log(g1Sum/group1.length)
// console.log(g2Sum/group2.length)


console.log(`-------------------------- 
    Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`)

/* ↓ YOUR CODE HERE ↓ **/

let isHotOutside = true
let moneyInPocket = 17
function willBuyDrink () {
    if(isHotOutside === true && moneyInPocket > 10.50) {
        return true
    } else {
        return false
    }
}
console.log(willBuyDrink())


console.log(`-------------------------- 
    Question 13: Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`)

/* ↓ YOUR CODE HERE ↓ **/

// Quick Math "Area" CheatSheet

let base = 5
let height = 6

const areaOfTriangle = (base,height) => ((base * height)/2);

console.log(`Area of a Triangle = A = (h*b)/2 = ${areaOfTriangle(base,height)}`);

let side = 5

const areaOfSquare = (side) => {
    let total = Math.pow(side, 2);
    return total;
 }

console.log(`Area of a Square = A = side^2 = ${areaOfSquare(side)}`);

let length = 5
let width = 8

const areaOfRectangle = (length, width) => (2*(length + width));

console.log(`Area of a Rectangle = A = 2(length + width) = ${areaOfRectangle(length,width)}`);

let radius = 7;
let pi = Math.PI;

const areaOfCircle = (radius,pi) => (pi*radius*radius)

console.log(`Area of a Circle = A = pi*r^2 = ${areaOfCircle(radius,pi)}`);


