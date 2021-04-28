const person = {
    firstName: 'John',
    lastName: 'Doe'
};

const copiedperson = {
  ...person,
  firstName: 'Mat'
};

console.log(copiedperson);
