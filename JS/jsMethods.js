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
console.log(eval('1+3'))
console.log(parseInt('22343'))
console.log(parseFloat('2332.23424'))
console.log(isNaN('asf'))
console.log(encodeURI('https:youtube.com'))
console.log(decodeURI('https%3A%2F%2Fyoutube.com'))
console.log(encodeURIComponent('https://youtube.com')); // 'https%3A%2F%2Fyoutube.com'
console.log(decodeURIComponent('https%3A%2F%2Fyoutube.com')); // 'https://youtube.com'


const obj10 = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj10))
console.log(Object.values(obj10))
console.log(Object.entries(obj10))
const target = {a:1}
const src1 = {b:2, c:3}; const src2 = {d:4, e:5};
Object.assign(target, src1, src2)
console.log(target)