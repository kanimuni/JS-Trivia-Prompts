var foo = 1;

function bar() {
  if (!foo) {
    var foo = 10;
  }
  console.log(foo);
}

bar();

// What will the above log (and why)?
// 10, even though the function is checking the outer var foo for its truth test the action creates a local variable with the same name foo.
// So when the function console.logs foo it takes the internal variable and returs it as it finds it there.
