//////////////////////////////////////////////////////////////*************categories of variables***************** */////////////////////////////////////////

// 1. Global variables
// 1.a.Explicit Global Variables
var explicitGlobal = "i am explicit global"
// 1.b.Implicit Global Variables
function createImplicitGlobal() {
  implicitGlobal = "I'm an implicit global variable";
}

//2. Local variables
//2.a.Function Scope, declared using 'var' in a function, accessible only within that function
function myFunction() {
  var functionScoped = "I'm function scoped";
  console.log(functionScoped); // Accessible within the function
}

//2.b.Block Scope
// let, const are block scoped'{}' (only accessible in that block only) , and var is function scoped (only accessible within the function it is declared in)
function testScope() { 
  if (true) {
    var varScoped = "I'm function scoped";
    let letScoped = "I'm block scoped";
    const constScoped = "I'm also block scoped";
  }                                                //In this example, varScoped is accessible outside the if block, but letScoped and constScoped are not.
  console.log(varScoped); // Accessible
  console.log(letScoped); // ReferenceError
  console.log(constScoped); // ReferenceError
}

testScope();

//3.Special Variable
//3.a.Lexical Scope (property named closure, where a function access variables from the outer function even after outer function has finished executing)

function outerFunction() {
  let outerVar = "I'm outer scoped";

  function innerFunction() {
    console.log(outerVar); // Accessible due to lexical scope
  }
  return innerFunction();
}

const lexifunc = outerFunction;
lexifunc();

//3.b.Catch Scope, Variables declared in a 'catch'block are scoped to that block.

try {
  throw new Error('Oops');
} catch (error) {
  console.log(error.message); // Accessible within catch block
}
// console.log(error); // Error: error is not defined


//////////////////////////////////////////////////////////////***********Hoisting******************* *//////////////////////////////////////////////////////
/*
Variable declarations (using var, let, and const) are hoisted to the top of their scope.
Only the declarations are hoisted, not the initializations.
Variables declared with var are hoisted and initialized with undefined.
Variables declared with let and const are hoisted but not initialized.
*/


console.log(a); // undefined
var a = 10;
console.log(a); // 10
var a = 12;     // var can be re-declared 


console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // 20
//let b = 30;     let can't be re-declared either