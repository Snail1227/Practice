const dogs = ['German Shepherd', 'Bulldog', 'Poodle'];
const moreDogs = ['labrador', 'Golden Retriever', 'Great Dane'];

dogs.push(...moreDogs);

const greeting = (first, last) => console.log(`Hello ${first} ${last}`);

const name = ['John', 'Doe'];
greeting(...name);