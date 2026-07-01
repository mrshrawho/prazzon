const { chunk, capitalize } = require('./index');

// TODO: Implement proper test runner (Jest/Mocha)
console.log('Running sanity checks...');

const res1 = chunk([1,2,3,4], 2);
console.assert(res1.length === 2, 'Chunk failed');

const res2 = capitalize('hello');
console.assert(res2 === 'Hello', 'Capitalize failed');

console.log('Done.');