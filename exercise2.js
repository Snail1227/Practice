//Exercise1
const cars = ['Honda', 'Acura', 'Mercedes'];
const pc = ['Dell', 'HP', 'lenovo'];
const newArray = [...cars, ...pc];
console.log(newArray);

//Exercise2

const numbs = [4, 7, 3, 2, 10];
let newNumbers = 0;

for (var i = 0; i < numbs.length; i += 2) {
    newNumbers += numbs[i];
}

console.log(newNumbers);

let needNumber = [];

function addEveryOther(numbs) {
    let sumOfNumbers = 0;
    for (var i = 0; i < numbs.length; i += 2) {
        sumOfNumbers = [...numbs.slice(numbs.indexOf(i), numbs.indexOf(i + 1))];
    }
    return sumOfNumbers;
}

console.log(addEveryOther(numbs));