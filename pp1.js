const oddArray = [1, 3, 5, 7, 9];
// let evenArray = []

// for(let i = 0; i<oddArray.length; i++){
//     evenArray.push(oddArray[i] + 1)
// }
// console.log(evenArray);

const evenArray = oddArray.map(number => number + 1);
console.log(evenArray);