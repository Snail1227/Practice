const currencyConverter = (rate, ...amounts) => amounts.map((amount) => rate * amount);
const converted = currencyConverter(1.25, 5, 10, 23, 44, 87);

const teams = ['You', 'They', 'Jason', 'Nathan', 'Jared'];
const [capt, coCapt, ...team] = teams;

console.log(capt, coCapt, team);