// let numArr = [-2, -4, -10, 0, 20, 7, 8, 9, 0, 11];
// numArr.sort((a, b) => a - b);
// let positivArr = numArr.filter(num => num > 0);

// let numMin = Math.min(...numArr)

// let maxNum = Math.max(...numArr)

// let noDuplicates = numArr.filter((num, index, arr) => arr.indexOf(num) === index)

// let highestThreeNum = numArr[numArr.length - 1] + ", " + numArr[numArr.length - 2] + ", " + numArr[numArr.length - 3];

// console.log("1.) Zeige array mit positiven werten an")
// console.log("Positive array werte: [" + positivArr + "]")

// console.log("2.) Zeige die niedrigste zahl an");
// console.log("smalest num is: " + numMin);

// console.log("3.) zeige höchste zahl");
// console.log("Höchste zahl ist: " + maxNum);

// console.log("4.) zeige array aber ohne duplicate an");
// console.log("Hier ein Array ohne duplicate: [" + noDuplicates + "]");

// console.log("5.) zeige die summe der höchsten drei zahlen");

// console.log("höchsten drei zahlen sind: " + highestThreeNum);

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

// // Update header text
// document.querySelector("#header").innerHTML = numArr;

// Log to console
// console.log("Task 1 array sort");
// console.log("old Array was: [" + numArr + "]");
// console.log("positive array is: [" + posArr + "]");
// console.log("negative array is: [" + negArr + "]");
// console.log("zero array is: [" + zeroArr + "]");

// console.log("Task 2 array count total");
// console.log("old array has sum: " + sum);
// console.log("positive array has sum: " + sumPosArr);
// console.log("test")

// let originalTime = "07:05:45PM";
// let militaryTimeFormat = "";

// if ( originalTime.slice(-2) === "AM" ) {
//     return originalTime.slice(-2);
// } else if ( originalTime.slice(-2) === "PM" ) {
//     let hours = parseInt(originalTime.slice(0, 2));
//     hours = (hours % 12) + 12;
//     militaryTimeFormat = hours.toString() + originalTime.slice(2, -2);
//     return militaryTimeFormat;

// } else {
//     return "Invalide zeit";
// }

// Boolean yes no If last digits are AM return
// if last two are PM then add to first position 1 and to second position 2

// let numArray = [1,2,3,4,5,6];

// const evenNumbers = numArray.filter(isEven);

// function isEven(value) {
//     return value % 2 !== 0;
// }

// console.log(evenNumbers)

// let numArray = [1,2,10,4,5,6];
// console.log("Get the odd numbers of the array, to be shown in a arry");

// let oddNumbers = numArray.filter(isOdd);

// function isOdd(callback) {
//     return callback % 2 !== 0;
// }
// console.log(oddNumbers)

// console.log("Return the person who is 18 years or older")

// const people = [
//     {
//         name: "Florian",
//         age: 26
//     },
//     {
//         name: "Max",
//         age: 11
//     },
//     {
//         name: "Thomas",
//         age: 18
//     }
// ];
// let adult = people.filter(people => people.age > 17)
// console.log("Adults are the following: " + adult[0].name + " and " + adult[1].name);

// let child = people.filter(people => people.age < 17)
// console.log("Children are: " + child[0].name);

// const numbers = [1,2,3,2,1,3,3,5,4,6];

// console.log("Remove all duplicates");

// numbers.sort((a, b) => a - b)
// console.log(numbers);

// const noDuplicateNums = numbers.filter((value, index, array) => array.indexOf(value) === index)

// console.log("Here are no duplicates: " + noDuplicateNums);

// const testArray = [1,2,2,3,3,4,5,6,6];

// const uniqueNumbers = new Set(testArray);
// console.log(uniqueNumbers.)

// function findUniqueElements(arr) {
//   const countMap = new Map();

//   // Count occurrences of each element
//   for (const num of arr) {
//     if (countMap.has(num)) {
//       countMap.set(num, countMap.get(num) + 1);
//     } else {
//       countMap.set(num, 1);
//     }
//   }

//   // Find the unique elements
//   const uniqueElements = [];
//   for (const [num, count] of countMap.entries()) {
//     if (count === 1) {
//       uniqueElements.push(num);
//     }
//   }

//   return uniqueElements;
// }

// const array = [1, 2, 3, 4, 3, 2, 1, 4, 5, 6, 6, 7, 8, 7, 8, 100];
// const uniqueElements = findUniqueElements(array);
// console.log(uniqueElements);

// const arr = [1,2,3,4,3,2,1];

// function findUniqueElement(arr) {
//     let uniqueValue = 0;

//     for(let i = 0; i < arr.length; i++) {
//         uniqueValue ^= arr[i];
//     }
//     return uniqueValue;
// }
// const answerOfFunction = findUniqueElement(arr);
// console.log(answerOfFunction);^

// How to get unique number without numbers which are duplicates!!!! Using the XOR operator with ^
// const array = [1, 2, 3, 4, 3, 2, 1];

// function uniqueValues(array) {
//   let uniqueElements = 0;

//   for (let i = 0; i < array.length; i++) {
//     uniqueElements ^= array[i];
//   }
//   return uniqueElements;
// }
// const callFunctionUniqueValues = uniqueValues(array);
// console.log(callFunctionUniqueValues);

// let map = new Map();
// map.set("Thomas", "Java");
// map.set("Anne", "MySQL");
// map.set("Anthon", "ML");
// map.set("Thomas", "Something new" );

// console.log(map.get("Anne"));
// for(let [key, value] of map ){
//     console.log(key, ":" , value);
// }

// let autoMarken = [["Mercedes", "Audi", "Porsche"],
//            ["Tesla", "Ford", "Nissan"],
//            ["Hyundai", "Toyota", "Bugatti"]];

// // console.log(autoMarken[2][0]);

// for (let i = 0; i < autoMarken.length; i++) {

//   for( let j = 0; j < autoMarken[i].length; j++) {
//       console.log(autoMarken[i][j]);
//   }
// }
// let mat = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// function matrixDiagonalSum(mat) {
//    let length = mat.length - 1;
//    let sum = 0;

//    for (let i = 0; i < mat.length; i++) {
//     sum += mat[i][i] + mat[i][length-i]
//    }
//    if(length % 2 === 0) {
//     sum -= mat[length/2][length/2]
//     return sum
//    }
// };

// let answer = matrixDiagonalSum(mat);
// console.log("The sum is: " + answer)

// let mat = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log("Get the sum of the diagonal numbers");

// function diagonalMatrixSum(mat) {
//   let lengthMatrix = mat.length - 1;
//   let sum = 0;

//   for (let i = 0; i < mat.length; i++) {
//     sum += mat[i][i] + mat[i][lengthMatrix - 1];
//   }
//   if (lengthMatrix % 2 === 0) {
//     sum -= mat[lengthMatrix / 2][lengthMatrix / 2];
//     return sum;
//   }
// }

// let answer = diagonalMatrixSum(mat);
// console.log("Thes sum is: " + answer);
// function countingSort(arr) {
//   let frequencyArray = new Array(100).fill(0);
//   for(const x of arr){
//       frequencyArray[x]++;
//   }
//   return frequencyArray
// }
// console.log(frequencyArray)

// function findMultiples(integer, limit) {
//   let arrayOfInteger = [];
//   let length = Math.floor(limit / integer);

//   for (let i = 1; i <= length; i++) {
//     arrayOfInteger.push( integer * i );
// }

//   return arrayOfInteger;
// }
// console.log(findMultiples(1, 2));

// function removeChar(str){
//   let seperatedArray = str.split("");
//   // let popedArray = seperatedArray.pop();
//   // popedArray = seperatedArray.shift(popedArray);
//   // let answer = popedArray.join();
//   return seperatedArray;

// };
// console.log()

// let str = "hdjhdlkjkwq";
// let splitString = str.split("");
// console.log(splitString);
// splitString.pop();
// console.log(splitString);
// splitString.shift();
// console.log(splitString.join(""));

// return => 2 higest values of list
// let arr = [4, 10, 10, 9, 20, 20, 30];
// console.log("not sorted: " + arr)
// let sortedArr = arr.sort((a, b) => a - b);
// console.log("sorted: " + sortedArr)
// let lengthOfSortedArr = sortedArr.length;
// let answerArr = [];

// if (sortedArr[lengthOfSortedArr - 1].number === sortedArr[lengthOfSortedArr - 2].number) {
//   return sortedArr.push(sortedArr[lengthOfSortedArr - 1], sortedArr[lengthOfSortedArr - 3])
// }
// else {
//   return answerArr.push(sortedArr[lengthOfSortedArr - 1] , sortedArr[lengthOfSortedArr - 2])
// }

// let size = 6;
// let answerArr = [];
// for (let i = 0; i < size; i++) {
//   if (i % 2 === 0) {
//     answerArr.push("1")
//   } else if (i % 2 !== 0) {
//     answerArr.push("0")
//   }
//   return answerArr.join("").toString();
// }
// console.log(answerArr);
// let a = [1, 2, 1, 1, 3, 2];
// let result = [...new Set(a)];
// console.log(result)

// return new string => same sequence BUT first and last must be deleted
// return sequence but without , instead a space
// if string length is 2 or less return => NULL
// let values = "1,2,3,4,5";

// let splitValues = values.split("");

// const newArray = splitValues.filter((item) => item !== ",")

//  console.log(newArray)
let arr = ["abc:123", "cde:456"];
console.log("Original: " + arr);
let arrFirst = [...arr[0]];
let arrSecond = [...arr[1]];
console.log(arrFirst);
console.log(arrSecond);

let arrFirstCollumIndex = arrFirst.indexOf(":");
let arrSecondCollumIndex = arrSecond.indexOf(":");

// console.log(arrFirstCollumIndex);
// console.log(arrSecondCollumIndex);
let lengthArrSecond = arrSecond.length - 1;

let arrFirstFront = arrFirst.splice(0, arrFirstCollumIndex);
// console.log("arrayFirstFront: " + arrFirstFront);
let arrSecondBack = arrSecond
  .splice(arrSecondCollumIndex + 1, lengthArrSecond)
  .join("");

// console.log("arraySecondBack: " + arrSecondBack);
let oneTogether = [].concat(arrFirstFront, ":" + arrSecondBack);
console.log("first answer: " + oneTogether.join(""));

///////////////////////

let lengthArrFirst = arrFirst.length - 1;

let arrSecondFront = arrSecond.splice(0, arrSecondCollumIndex);
// console.log("arraySecondFront: " + arrSecondFront);
let arrFirstBack = arrFirst.join("");
// console.log(arrFirstBack)
let twoTogether = [].concat(arrSecondFront, arrFirstBack);
console.log("second answer: " + twoTogether.join(""));

////////////////////////////

let database = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};
console.log(`"${database.finnish}"`);

let str = "apple ban apple bann";

let answer = [];
let splittedStr = str.split(" ");
for (let i = 0; i < splittedStr.length; i++) {
  answer.push(splittedStr[i] + " " + splittedStr[i].length);
}
console.log(answer);
