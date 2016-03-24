var assert = require('assert');

function wordifyNumber(number) {}

assert.deepEqual(
  wordifyNumber(8675309),
  "eight-six-seven-five-three-zero-nine",
  'wordifies a number, concatenated with dashes'
);
