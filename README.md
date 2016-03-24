# litmus

Fairly simple code exercises designed to determine a persons comfort with
using a computer to write javascript.

### addOneToEach

Process an array of numbers, adding 1 to each number in the array in order
to produce a new array of numbers.

Solutions:

`map` over the array. Good.

```js
function addOneToEach(numbers) {
  return numbers.map(n => n + 1)
}
```

`for` or `forEach` to produce a new array. Good.
```js
function addOneToEach(numbers) {
  var arr = [];

  for (var i = 0; i < numbers.length; i++) {
    arr.push(numbers[i] + 1);
  }

  return arr;
}
```

`for` or `forEach` which alters array by reference. Meh, okay.
```js
function addOneToEach(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] + 1;
  }

  return numbers;
}
```

### isPalindrome

Process an inbound string, to check if it is a palindrome.
A palindrome is a word, phrase, number, or other sequence of characters
which reads the same backwards as forwards.

Strip and lowercase the string. Then reverse it, and compare the two.

```js
function isPalindrome(str) {
  var noSpacesStr = str.replace(/\s/g, '').toLowerCase();
  var reversedStr = noSpacesStr.split('').reverse().join('');
  return noSpacesStr === reversedStr;
}
```

### wordifyNumber

Process an integer number and turn it into a string of words
separated by hyphens. Each digit in the number being transformed to a word
i.e. `wordifyNumber(8675309)` => `eight-six-seven-five-three-zero-nine`;

Solution:
  - set up a list of words (indexed in numerical order)
  - write a recursive function to split an integer numeral into a list of it's digits.
  - map the list of digits to word and join them with a hyphen.

```js
var assert = require('assert');

const digitWords = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
];

function digits(n) {
  if (n < 10) {
    return [n];
  }

  const numeral = Math.floor(n / 10);
  const digit = n % 10;

  return digits(numeral).concat(digit) ;
}

function wordifyNumber(number) {
  return digits(number)
    .map(n => digitToWord[n])
    .join('-');
}

assert.deepEqual(
  wordifyNumber(8675309),
  "eight-six-seven-five-three-zero-nine",
  'wordifies a number, concatenated with dashes'
);
```
