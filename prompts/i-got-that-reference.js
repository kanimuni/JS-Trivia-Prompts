var num = 9001;
var name = 'Zach';
var obj1 = {val: 'foo'};
var obj2 = {val: 'bar'};
var obj3 = {val: 'baz'};

function alter(num, name, obj1, obj2) {
  num += 1337;
  name = 'Beth';
  obj1 = obj3;
  obj2.val = 'qux';
}

alter(num, name, obj1, obj2);

console.log(num); //9001
console.log(name); // "Zach"
console.log(obj1); // {val:'foo'} WHY?
console.log(obj2.val); // 'qux'   WHY?

// What will each of the above log (and why)?
