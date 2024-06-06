const number = 22; // Assign Value to variable name 'number'

// If - else Conditional Statement
// if (number % 2 == 0) {
//     console.log(number, " is Even Number");
//     console.log(`${number} is Even Number`);
// } else {
//     console.log(number, " is Odd Number");

// }


// Register a Function with Parameter
function findOddOrEven(number, likes) {
    console.log(likes);

    if (number % 2 == 0) {
        return `${number} is Even Number`
    } else {
        return `${number} is Odd Number`
    }

}


// Call a function and Pass Parameter
const answer = findOddOrEven(143, "Sujith");

console.log("answer ", answer);

