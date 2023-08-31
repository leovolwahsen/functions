let numArr = [-2, -4, -10, 0, 20, 7, 8, 9, 0, 11];
numArr.sort((a, b) => a - b);
let positivArr = numArr.filter(num => num > 0);

let numMin = Math.min(...numArr)

let maxNum = Math.max(...numArr)

let noDuplicates = numArr.filter((num, index, arr) => arr.indexOf(num) === index)

let highestThreeNum = numArr[numArr.length - 1] + ", " + numArr[numArr.length - 2] + ", " + numArr[numArr.length - 3]; 

console.log("1.) Zeige array mit positiven werten an")
console.log("Positive array werte: [" + positivArr + "]")

console.log("2.) Zeige die niedrigste zahl an");
console.log("smalest num is: " + numMin);

console.log("3.) zeige höchste zahl");
console.log("Höchste zahl ist: " + maxNum);

console.log("4.) zeige array aber ohne duplicate an");
console.log("Hier ein Array ohne duplicate: [" + noDuplicates + "]");

console.log("5.) zeige die summe der höchsten drei zahlen");

console.log("höchsten drei zahlen sind: " + highestThreeNum);





// let posArr = numArr.filter((num) => num > 0);
// let negArr = numArr.filter((num) => num < 0);
// let zeroArr = numArr.filter((num) => num == 0);

// let sum = 0;
// for (let i = 0; i < numArr.length; i++) {
//   sum += numArr[i];
// }

// let sumPosArr = 0;
// for (let i = 0; i < posArr.length; i++) {
//     sumPosArr += posArr[i];
// }

// Update header text
document.querySelector("#header").innerHTML = numArr;

// Log to console
// console.log("Task 1 array sort");
// console.log("old Array was: [" + numArr + "]");
// console.log("positive array is: [" + posArr + "]");
// console.log("negative array is: [" + negArr + "]");
// console.log("zero array is: [" + zeroArr + "]");

// console.log("Task 2 array count total");
// console.log("old array has sum: " + sum);
// console.log("positive array has sum: " + sumPosArr);
console.log("test")


let originalTime = "07:05:45PM";
let militaryTimeFormat = "";

if ( originalTime.slice(-2) === "AM" ) {
    return originalTime.slice(-2);
} else if ( originalTime.slice(-2) === "PM" ) {
    let hours = parseInt(originalTime.slice(0, 2));
    hours = (hours % 12) + 12;
    militaryTimeFormat = hours.toString() + originalTime.slice(2, -2);
    return militaryTimeFormat;

} else {
    return "Invalide zeit";
}

// Boolean yes no If last digits are AM return 
// if last two are PM then add to first position 1 and to second position 2 