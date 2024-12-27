function myFunction() {
  let x = 10;
  if (true) {
    // Avoid redeclaring x. Use a different variable name.
    let y = 20; 
    console.log(y); // Output: 20
  }
  console.log(x); // Output: 10
} 