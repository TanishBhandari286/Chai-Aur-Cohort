const person = {
  x: 10,
  fname: 'tanish',
  lname: 'bhandari',
  hobbies: ['coding', 'table - tennis'],
  isMarried: false,
  hasGF: false,
  hadGF: false,
  hadCrush: Infinity,
  getfullname: function () {
    return 'Tanish B';
  },
  address: {
    hno: 1,
    street: 1,
    countrycode: 91,
    state: 'delhi',
  },
};

console.log(person.getfullname());
