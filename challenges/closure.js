// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// The nested function can access the Var "internal" because it is Inside of another function and the internal variable would be a global closure for that function

/* Task 2: Counter */
function summation(num) {
  let totalNum = 0;
  function counter() {
    for (let i = 0; i <= num; i++) {
      totalNum += i;
    }
  }
  counter();
  return totalNum;
};

console.log(summation(4));g
/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
