const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item)=>{
  console.log(item);
  return item; // this won't work in forEach
})

  //for each dosen't return any value, but not always you want to just print something, you might have some more use cases for it

// 1.filter
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

let newNumbers = myNumbers.filter((num)=>{
  return num>4                            // scope is open, so we will have to write 'return' to return some value to newNumsf
})
console.log(newNumbers) // [5,6,7,8,9,10]

let userBooks = books.filter((bk) => bk.genre === 'History') //another example, and scope isn't here so it will automatically return to userBooks

//2. map

const myNum = [1,2,3,4,5,6,7,8,9,10]

let newNum = myNum.map((num)=>{return num+10}) 
console.log(newNum) //[11,12,13,14,15,16,17,18,19,20]

  // In filter, only the true case gets returned, but in map everything(like a whole array) returns

//3. chaining (myNums.map().map().filter())
const newNums = myNum
                .map((num)=>num*10)
                .map((num)=>num+1)       // [11,21,31,41,51,61,71,81,91,101]
                .filter((num)=>num>=40)  // [41,51,61,71,81,91,101]

console.log(newNums) 

//4. reduce ( .reduce(accu,current)=>accu(+-*/)current, initialVal)
const array1 = [1,2,3,4]
const initialValue = 0; // first value to the accumulator
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 
  initialValue
);

console.log(sumWithInitial) // 10

const sumWithInitials = array1.reduce((acc, curr) => acc+curr, initialValue); //sane code, but written in one line