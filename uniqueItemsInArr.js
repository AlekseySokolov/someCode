
const uniqueItemsInArr = arr => arr.reduce((acc, value) => acc.includes(value) ? acc : acc.concat(value), []);

const arr = [1, 2, 3, 58, 2, 60, 3, 'test string', 'test string', 2];
uniqueItemsInArr(arr); // => [ 1, 2, 3, 58, 60, 'test string' ]
