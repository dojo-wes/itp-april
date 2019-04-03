var users = ["Wes", "Michelle", "Dimitri", "John", [1, 2]];

// users.push("Seal");
// console.log(users);
// users.pop();
// console.log(users);

// console.log(users[2]);
users[4] = "Prince";

// console.log(users[0]);
// console.log(users[0]);
// console.log(users[users.length - 1][1]);

// for(var i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// Values Greater than Second
// For[1, 3, 5, 7, 9, 13], print values that are greater than its 2 nd value.Return how many values this is.

var test = [1, 3, 5, 7, 9, 13]; // 5, 7, 9, 13 -> 4
var test2 = [1, 10, 2, 3, 4]; // -> 0
var test3 = [2]; // -> 0

function valuesGreaterThanSecond(arr) {
  // how would we print all the values?
  var count = 0;
  for(var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    // how do we compare values to the second value?
      // what do we want to compare?
        // the other values in the array
      // what comparison do we want to make?
        // whether the current value is greater than the second value
    // console.log(arr[i] > arr[1]);
    // how do we only print if the value is greater than the second value?
      // if statement
    if(arr[i] > arr[1]) {
      console.log(arr[i]);
      count++;
    }
  }
  // what the heck is a return?
  return count;
}

var returnedVal = valuesGreaterThanSecond(test);
console.log("count for test1:", returnedVal);
console.log("count for test2:", valuesGreaterThanSecond(test2));
console.log("count for test3:", valuesGreaterThanSecond(test3));