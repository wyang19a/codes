// Given array of distinct integers, print all permutations of the array.
// For example :
// array : [10, 20, 30]

// Permutations are :

// [10, 20, 30]
// [10, 30, 20]
// [20, 10, 30]
// [20, 30, 10]
// [30, 10, 20]
// [30, 20, 10]

// Pick up an array of your choice and write the code that will print all the permutations.

let myArr = [10, 20, 30];

// https://stackoverflow.com/a/37580979/12508499

const permute = (arr) => {
    let length = arr.length
    let result = [arr.slice()]
    let c = new Array(length).fill(0)
    let i = 1, k, p;
    while (i < length) {
        if (c[i] < i) {
          k = i % 2 && c[i];
          p = arr[i];
          arr[i] = arr[k];
          arr[k] = p;
          ++c[i];
          i = 1;
          result.push(arr.slice());
        } else {
          c[i] = 0;
          ++i;
        }
    }
    return result
}

console.log(permute(myArr))