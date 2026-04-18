const { reducerfn } = require('./reducer');

test('Increment should add 1 to state', () => {
  const result = reducerfn(5, { type: 'Increment' });
  expect(result).toBe(6);
});

test("Decrement should minus 1 to state" , () =>
{
  const result = reducerfn(5,{type:"Decrement"});
  expect(result).toBe(4);
});
test("If state is 15 and action is reset it should be 0", () =>
{
  const result = reducerfn(15,{type:"Reset"});
  expect(result).toBe(0);
})
