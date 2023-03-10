const make = 'Dodge';
const model = 'Challenger';
const theYear = 2021;

const vehicle = {
    make,
    model,
    year: theYear,
};

const makeVehicle = (make, model, year) => ({
    make,
    model,
    year
});

const SUV = makeVehicle('Mercedes', 'AMG G 63', 2021);

const key = 'lastName';
const value = 'Brewer';

const reverseString = (str) => (!str.length) ? '' : reverseString(str.substr(1)) + str.charAt(0);

const obj = {
    [key]: value,
    [`${key}Reverse`]: reverseString(value),
};

console.log(obj);