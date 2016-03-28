// Number of characters in range.
var alphaRange = 58;

// Bounds
var lowerBound = 'A'.charCodeAt(0);
var upperBound = 'z'.charCodeAt(0);

function charEncoder(shift) {
  return function encodeChar(char) {
    var shiftMod = shift % alphaRange;
    var charCode = char.charCodeAt(0);
    var shiftedCharCode = charCode + shiftMod;

    if (shiftedCharCode > upperBound) {
      return String.fromCharCode(shiftedCharCode - alphaRange);
    }

    if (shiftedCharCode < lowerBound) {
      return String.fromCharCode(shiftedCharCode + alphaRange);
    }

    return String.fromCharCode(shiftedCharCode);
  }
}

function caesar(shift, message) {
  return message
    .split('')
    .map(charEncoder(shift))
    .join('');
}

function unCaesar(shift, secret) {
  return secret
    .split('')
    .map(charEncoder(-shift))
    .join('');
}

// Caesar cipher for encoding and decoding strings.
// You give it a number to shift characters to the right.
// i.e. send in (1, abc) and you get 'bcd' has the encrypted string.
module.exports = {
  caesar: caesar,
  unCaesar: unCaesar
}

// Test.
var assert = require('assert');
assert.equal(
  unCaesar(42, caesar(42, 'AQuickBrownFoxJumpedOverTheLazyDog')),
  'AQuickBrownFoxJumpedOverTheLazyDog'
);
