//return the sum of the two largest numbers in an array

const sumLargestNumbers = function(array) {
  array.sort((a, b) => b - a);
  const sumTotal = array[0] + array[1];
  return sumTotal;
};

const arr = [1,4,46,3,6];

console.log(sumLargestNumbers(arr));