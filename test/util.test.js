import add from './util';

// eslint-disable-next-line no-undef
it('should add two number', () => {
  const res = add(5, 2);
  if (res !== 7) {
    throw new Error(`Expected to return 7 but ${res} was returned`);
  }
});

// const assert = require('assert');

// describe('Array', () => {
//   describe('#indexOf()', () => {
//     it('should return -1 when the value is not present', ()=> {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });
