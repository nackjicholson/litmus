var assert = require('assert');

function exclaimAll(sentences) {
}

assert.deepEqual(
  exclaimAll(['I love burritos', 'Hakuna matata', 'Taco night']),
  ['I love burritos!', 'Hakuna matata!', 'Taco night!'],
  'adds an exclaimation point to the end of each sentence in the list'
)
