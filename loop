//QN 1
let num = 7;
let isPrime = true;
if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log("Prime number");
} else {
  console.log("Not a prime number");
}


//QN 2
let num = 1234;
let reverse = 0;
while (num > 0) {
  let digit = num % 10;
  reverse = reverse * 10 + digit;
  num = Math.floor(num / 10);
}
console.log("Reversed number:", reverse);


//QN 3
let num = 98765;
let count = 0;
while (num > 0) {
  count++;
  num = Math.floor(num / 10);
}
console.log("Number of digits:", count);

//QN 4
let n = 5;
let a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 3; i <= n; i++) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}

//QN 5
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += "*";
  }
  console.log(row);
}

//QN 6
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}