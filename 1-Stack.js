/*
            => Stack <=

    -   LIFO type of service

    -   Functions provided in stack:
        => push -> placing data onto a stack
        => pop -> removing the top element from a stack
        => peek -> displaying the top element of the stack
        => length/size -> determining how many elements are on the stack

    -   In JS, the array object, already has all the functions that we need in order to use it as a stack

    -   We can thus just use an array as a stack

    -   Will display how that is done using an array, then will create an actual stack class to see how that works too

    -   For the array stack, will use it to find words that are Palindromes -> spelled the same forwards and backwards
*/

// This is the array stack
let letters = [];

let word = "racecar";

let rword = "";

// Putting letters of word into stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// Popping off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome.`);
}

/*
    _______________________________________________________________________________________________________________
    _______________________________________________________________________________________________________________

    Below, I am implementing a stack in JS, just to see how it works, this is not used as we have arrays that act the same way with their methods

*/

// Creating a stack

var Stack = function () {
  this.count = 0;
  this.storage = {};

  // Adds a value onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;

    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  //   Returns the value at the end of the stack -> will not remove it
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

// Creating an instance of the stack
let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
