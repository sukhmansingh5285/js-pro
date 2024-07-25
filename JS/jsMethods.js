const array = [1, 2, 3, 4, 5];
const array1 = [1, 2, 3, 4, 5];

//map
const mapArr = array.map((num) => num * 2); // takes 3 args = each element, index, array
console.log("mapArr is = " + mapArr); // returns an array

//forEach
array.forEach((number, index, array) => {
  // takes 3 args = each element, index, array
  console.log(`Index ${index}: ${number}`);
  index < 1 ? console.log(array) : null; //dosen't returns an array unlike map, just here to perform some operation
});

//filter
const filterArr = array.filter((num) => num > 2);
console.log(`filterArr is ` + filterArr); // returns an array

//reduce
const reduceArr = array.reduce((accu, num) => accu + num, 0);
console.log(`reduceArr is ${reduceArr}`); //returns a number

// slice
const sliceArr = array.slice(1, 3);
console.log("Value of sliceArr = " + sliceArr); //returns an array
console.log(`Original array after slice = ${array}`);

// splice
const spliceArr = array1.splice(1, 2);
console.log(`New splice array = ` + spliceArr); // returns an array, but also makes changes to the original array
console.log(`Original array1 array = ${array1}`);

// find
const found = array.find((num) => {
  return num > 3;
});
console.log(`We found: ${found}`); //

// findIndex
const index = array.findIndex((num) => num > 3);
console.log(`We found Index: ${index}`); // returns int (the index)

// some
const some = array.some((num) => num > 4);
console.log(`There's a num in array bigger than 3: ${some}`); // returns bool

// every
const every = array.every((num) => {
  return num > 3;
});
console.log(`All the nums in array bigger than 3: ${every}`); // return bool

//////////////////////////////////////////////////////////////////////////OBJECTS///////////////////////////////////////////////////////////////////////////////////////////////

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

// Object.keys
const keys = Object.keys(obj)
console.log(`The keys: ${keys}`)

// Objext.values
const values = Object.values(obj)
console.log(`The value are: ${values }`)