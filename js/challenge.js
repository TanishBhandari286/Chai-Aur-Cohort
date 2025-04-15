// create an array containing different types of teas
//
let teaArray = [
  'Green tea',
  'Black tea',
  'oolong tea',
  'white tea',
  'herbal tea',
];
console.log(teaArray);

// add chamomile tea to the existing llist of teas

teaArray.push('chamomile tea');
console.log(teaArray);

// remove oolong tea from the list of teas
const index = teaArray.indexOf('oolong tea');
if (index > -1) {
  //  if element doesnt exist it returns -1
  teaArray.splice(index, 1); // ye kyoon likha bhai?
  // pehle index ka matlab hai starting index and ,1 ka matlab hai kitni values delete krni hain
}

// filter the list to only include teas that are caffeinated
const caffeinated = teaArray.filter((tea) => tea !== 'herbal tea');
console.log(caffeinated);

// sort the teas in alphabatical order
teaArray.sort();
console.log(teaArray);

// use a for loop to print each type of tea in array
for (let i = 0; i < teaArray.length; i++) {
  console.log(`the tea at ${i} index is : ${teaArray[i]}`);
}

// use a loop to count how many teas are caffeinated

let teacount = 0;
for (let i = 0; i < teaArray.length; i++) {
  if (teaArray[i] === 'herbal tea') {
    continue;
  }
  teacount += 1;
}
console.log(teacount);

// use a for loop to creat e a new array with all tea names uppercased
//
const uptea = [];
for (let i = 0; i < teaArray.length; i++) {
  uptea.push(teaArray[i].toUpperCase());
}

console.log(uptea);

// use a for loop to find the name with the most characters

// use a for loop to reverse the order of teas int he array
//
teaArray.reverse();
console.log(teaArray);
