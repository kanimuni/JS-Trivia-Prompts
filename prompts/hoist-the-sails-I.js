function foo() {
  function bar() {
      return 3;
  }
  return bar();
  function bar() {
      return 8;
  }
}

console.log(foo());

// What will the above log (and why)? 
// returns 8, the iterpreter overwrites the first funciton bar when it reads it into the stack
// so when foor() is run bar() is run and the bar it has in his stack is the second funciton which returns 8.