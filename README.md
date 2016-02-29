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
