/*
JavaScript Algorithms and Data Structures Masterclass
Merge Sort
*/

const mergeArray = (arr1, arr2) => {
  let array = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      array.push(arr1[i]);
      i++;
    } else {
      array.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length) {
    array.push(arr1[i]);
    i++;
  }
  while(j < arr2.length) {
    array.push(arr2[j]) 
    j++;
  }

  return array;
}

const mergeSort = (arr) => {
  if(arr.length <= 1) {
    return arr;
  }
  let firstHalf = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  console.log('here is firstHalf: ' + firstHalf);
  let secondHalf = mergeSort(arr.slice(Math.floor(arr.length / 2)));
  console.log('here is secondHalf: ' + secondHalf);

  return mergeArray(firstHalf, secondHalf); 
}