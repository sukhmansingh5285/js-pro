// anotation
let myName: string = "jesse"
myName = 44           // not correct in ts, but correct in js

let num: number = 32
let bool: boolean = true



//inference  -> even if you don't provide anotation in ts, it's going to provide it a data type anyway

let tech = "TypeScript"
console.log(typeof tech)  // string
tech = 12     // not correct
console.log(tech)  //TypeScript



//any Type -> just makes ts code like js

let color: any = "green"
console.log(typeof color) //string
color = 32                // it's valid
console.log(typeof color) //number



//function parameter anotation

function addOnce(num: number){
  return num+1
}

const result = addOnce(3)
console.log(result)


const double = (x: number, y: number) => x*y
const res = double(2,10)
console.log(res)



//Default Params Value
function greet (person: string = "Anonymous"){
  return `Hello ${person}`
}

const res1 = greet()
console.log(res1)



//Function Return Annotations -> you can specify the return type also of a function

function double1 (x:number): number {
  return x*x
}

const res2 = double1(3)
console.log(res2)



//void in typescript

function printMessage (message: string): void {
  console.log(`This is my message: ${message}`)
  //return message -> will throw an ERROR
}

printMessage("Hello, How are you?")



//never -> function won't return aything, variable won't have a value








