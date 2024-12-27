# JavaScript Block Scope Confusion

This repository demonstrates a common source of confusion in JavaScript: block scope with the `let` keyword.

In JavaScript, variables declared with `let` (and `const`) have block scope.  This means the variable is only accessible within the block of code (defined by curly braces `{}`) in which it's declared.

The example in `bug.js` shows how this can lead to unexpected behavior if you are not aware of this scoping rule. The solution, `bugSolution.js`, offers a clearer way to manage variables to avoid confusion. 

## How to run the code:
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a text editor.
3. Open your browser's developer console or use Node.js to run the code.
