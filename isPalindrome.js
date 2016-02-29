var assert = require('assert');

function isPalindrome(str) {
  // Process an inbound string, to check if it is a palindrome.
  // A palindrome is a word, phrase, number, or other sequence of characters
  // which reads the same backwards as forwards.
}

assert.equal(
  isPalindrome('just some words'),
  false,
  '"just some words" is not a palindrome'
);

assert.equal(
  isPalindrome('kayak'),
  true,
  '"kayak" is a palindrome'
);

assert.equal(
  isPalindrome('A man a plan a canal Panama'),
  true,
  '"A man a plan a canal Panama" is a palindrome'
);
