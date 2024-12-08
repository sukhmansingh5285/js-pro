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

// join
console.log("After joining the array" , array.join(":::"))  // returns a string with all elements of array joined

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
console.log(`The keys: ${keys}`)         // returns an array of keys

// Object.values
const values = Object.values(obj)
console.log(`The value are: ${values }`)  //returns an array of values

// Object.entries
const entries = Object.entries(obj);
console.log(`The entries are ${entries}`)  // returns an array of key-value pair

// Object.freeze
const obj1 = {prop:32}
Object.freeze(obj1)                        // freezes the object
obj1.prop = 42
console.log("After changing a freezed Object property's value(42) = " + obj1.prop)                     // can't add, delete or change anything

// Object.seal
const obj2 = {prop: 10}
Object.seal(obj2)                         // can modify the object's property but can't add a new property
obj2.prop = 32;
obj2.newProp = 21;
console.log(`Property's value of a sealed Object is ${obj2.prop} and, New property's value i am trying to add is: ${obj2.newProp}`)

// Object.assign 
const targetObj = {a:10, b:11, c:12, d:13, e:14, f:15}
const returnedTarget = Object.assign(targetObj, obj)                            // asigns the value to one targetObject from the array of many Source objects
console.log(`The new assigned object is :` + JSON.stringify(returnedTarget))

// Object.getOwnPropertyDescriptor
const obj3 = { a: 1 };
const descriptor = Object.getOwnPropertyDescriptor(obj3, 'a');
console.log(descriptor);
// Output:
// {
//   value: 1,                          value: The value of the property.
//   writable: true,                    writable: If true, the property's value can be changed.
//   enumerable: true,                  enumerable: If true, the property will be included during enumeration of the object's properties (e.g., using for...in loop or Object.keys).
//   configurable: true                 configurable: If true, the property can be deleted and its attributes (value, writable, enumerable, configurable) can be modified.
// }

//////////////////////////////////////////////////////////////////////////Conversion///////////////////////////////////////////////////////////////////////////////////////////////

JSON.parse() // string to JSON
JSON.stringify() // Object to JSON string
toString()   // anything to string
parseInt()   // string to integer
parseFloat() // string to float
const date = new Date();
const dateString = date.toString();
console.log(dateString);  // use date constructor to convert date to string





///////////////////////////////////////////////////////////////Most Important Ones at once///////////////////////////////////////////////////////////////////////////////////////
// Global Functions:
// eval(): Evaluates JavaScript code represented as a string.
// parseInt(): Parses a string argument and returns an integer of the specified radix (base).
// parseFloat(): Parses a string argument and returns a floating-point number.
// isNaN(): Checks if a value is NaN (Not-a-Number).
// isFinite(): Checks if a value is a finite number.
// encodeURI(): Encodes a URI into a string.
// decodeURI(): Decodes a URI from a string.
// encodeURIComponent(): Encodes a URI component into a string.
// decodeURIComponent(): Decodes a URI component from a string.

// Object Related Functions:
// Object.keys(): Returns an array of a given object's own property names.
// Object.values(): Returns an array of a given object's own enumerable property values.
// Object.entries(): Returns an array of a given object's own string-keyed property [key, value] pairs.
// Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.

// Array Methods:
// push(): Adds one or more elements to the end of an array.
// pop(): Removes the last element from an array.
// shift(): Removes the first element from an array.
// unshift(): Adds one or more elements to the beginning of an array.
// concat(): Merges two or more arrays.
// slice(): Extracts a section of an array and returns a new array.
// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// join(): Joins all elements of an array into a string.
// indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present.
// forEach(): Executes a provided function once for each array element.
// map(): Creates a new array with the results of calling a provided function on every element in the array.
// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
// reduce(): Applies a function against an accumulator and each value in the array (from left-to-right) to reduce it to a single value.
// sort(): Sorts the elements of an array in place and returns the sorted array.

// String Methods:
// charAt(): Returns the character at a specified index.
// charCodeAt(): Returns the Unicode value of the character at a specified index.
// concat(): Concatenates two or more strings.
// indexOf(): Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.
// lastIndexOf(): Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.
// slice(): Extracts a section of a string and returns a new string.
// split(): Splits a string into an array of substrings.
// substring(): Returns the part of the string between the start and end indexes, or to the end of the string.
// toLowerCase(): Converts the string to lowercase letters.
// toUpperCase(): Converts the string to uppercase letters.
// trim(): Removes whitespace from both ends of a string.

// Math Object:
// Math.random(): Returns a random number between 0 (inclusive) and 1 (exclusive).
// Math.max(): Returns the largest of zero or more numbers.
// Math.min(): Returns the smallest of zero or more numbers.
// Math.round(): Rounds a number to the nearest integer.
// Math.floor(): Rounds a number down to the nearest integer.
// Math.ceil(): Rounds a number up to the nearest integer.
// Date Object:
// Date.now(): Returns the number of milliseconds since January 1, 1970.
// new Date(): Creates a new Date object.