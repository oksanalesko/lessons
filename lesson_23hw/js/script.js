"use strict"

// VIDEO 1==========================================

// Варіант 1

console.log('35' + - "22");

// Варіант 2

console.log('35' * "22");

// Варіант 3

// console.log('558' > 22++);

// Варіант 4

let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);

// Варіант 5

console.log(!false && 11 || 18 && !'');

// Варіант 6

let nameVar = 0;
console.log(nameVar ?? "Без имени")

// VIDEO 2==========================================

// Варіант 1

if (1 === "1") {
   console.log('Істина!');
} else {
   console.log('Брехня!');
}

// Варіант 2

if (5 == "5") {
   console.log('Істина!');
} else {
   console.log('Брехня!');
}

// Варіант 3

let message = (92 > '11' && 58 < 100) ? 'Істина!' : 'Брехня';
console.log(message);

// Варіант 4

if (0) {
   console.log('Брехня!')
} else if (" ") {
   console.log('Істина!');
}

// VIDEO 3==========================================

// Задача 1

let numOne = 1;
while (numOne < 6) {
   console.log(numOne);
   numOne++;
}

let numTwo = 1;
while (numTwo < 6) console.log(numTwo++);

let numThree = 1;
do {
   console.log(numThree);
   numThree++;
} while (numThree < 6);

for (let numFour = 1; numFour < 6; numFour++) {
   console.log(numFour);
}

let numFive;
for (numFive = 1; numFive < 6; numFive++) {
   console.log(numFive);
}

// Задача 2

let numSix = 8;
while (numSix) {
   console.log(numSix);
   numSix--;
}

// Задача 3

let numSeven = 0;
while (numSeven < 3) {
   numSeven++;
   console.log(`Число: ${numSeven}`);
}

// Задача 4

firstFor: for (let numEight = 0; numEight < 2; numEight++) {
   for (let size = 0; size < 3; size++) {
      if (size == 1) {
         break firstFor;
      }
      console.log(size);
   }
}

// VIDEO 4==========================================

// Задача 1

let numNine = Math.round(1.005 * 100) / 100;
console.log(numNine);

let numTen = 1.005 + Number.EPSILON;
console.log(Math.round(numTen * 100) / 100);

// Задача 2

let value = "135.58";
console.log(parseFloat(value));

// Задача 3

let valueOne = 58 + "Фрілансер";
// console.log(valueOne);
if (isNaN(valueOne)) {
   console.log('Результат виразу NaN');
}

// Задача 4

console.log(Math.max(10, 58, 39, -150, 0));

// Задача 5

let numEleven = 58.858;
console.log(Math.floor(numEleven));

// VIDEO 5==========================================

// Задача 1

let fls = "фрілансер";
let text = `Привіт! Я ${fls}`;
console.log(text);

// Задача 2

let textOne = 'фрілансер';
console.log(textOne[5]);
console.log(textOne.slice(5,6));

// Задача 3

let textTwo = 123 + "456";
console.log(textTwo);

// Задача 4

let textThree = 'фрілансер';
console.log(textThree.toUpperCase());

// Задача 5

let textFour = 'фрілансер';
console.log(textFour.slice(3,6));


// Задача 6

let textFive = 'фрілансер';
console.log(textFive.includes('лан',4));

// ==================================================
