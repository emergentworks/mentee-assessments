
const Challenge = require('./index');

test('#challenge is a function', () => {
  expect(typeof Challenge.challenge).toEqual(`function`);
});

test('#add takes in two arguments and returns their sum', () => {
  expect(Challenge.add(5, 5)).toEqual(10);
});
