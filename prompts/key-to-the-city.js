var a = {};
var b = {prop: 'b'};
var c = {prop: 'c'};
var d = {prop: 'd'};


a[b] = 'foo';
a[c] = 'bar';
a[d] = 'baz';

console.log(a[c]);
// console.log(a);

// What will the above log (and why)?
// Will log baz as you cant have objects as keys in an object. 
// So each time a is given a key/value pair where the key is an object 
// it will overwrite the premious one as the object gets translated to "[object Object]"

