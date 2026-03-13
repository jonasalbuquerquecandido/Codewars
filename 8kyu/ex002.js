/* In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

makeNegative(1);    // return -1
makeNegative(0);    // return 0
makeNegative(-5);   // return -5
makeNegative(0.12); // return -0.12*/

const makeNegative = (n) => n > 0 ? n * -1 : n

function makeNegative(num) {
  if (num > 0) {
    return num * -1;
  } else {
    return num;
    }
}

console.log(makeNegative(5));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));