function SumofArray(myArray) {
  let sum = 0;
  for (let i = 0; i < myArray.length; i++) {
    sum = sum + myArray[i];
  }
  return sum;
}

let myArray = [1, 4, 2, 3, 5, 6];
console.log(SumofArray(myArray));
