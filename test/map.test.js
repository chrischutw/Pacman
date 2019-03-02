const {
  placeFunction,
  turnRight,
  turnLeft,
  moveFunction,
  reportFunction,
  validation,
  moveCheckX,
  moveCheckY
} = require('../src/map');

test('Place wrong x value', () => {
  expect(validation(6, 1, 'NORTH')).toBe(false);
});
test('Place wrong x and y value', () => {
  expect(validation(6, 6, 'EAST')).toBe(false);
});
test('Place wrong y value', () => {
  expect(validation(2, 6, 'WEST')).toBe(false);
});
test('Place wrong x value', () => {
  expect(validation(-1, 1, 'SOUTH')).toBe(false);
});
test('Place wrong y value', () => {
  expect(validation(3, -1, 'EAST')).toBe(false);
});

test('Place wrong x and y value', () => {
  expect(validation(-1, -1, 'WEST')).toBe(false);
});
test('Place wrong f value', () => {
  expect(validation(2, 3, 'WST')).toBe(false);
});

test('Place correct x value', () => {
  expect(validation(2, 2, 'WEST')).toBe(true);
});
test('Place wrong x value', () => {
  expect(moveCheckX(6)).toBe(false);
});
test('Place wrong x value', () => {
  expect(moveCheckX(-2)).toBe(false);
});

test('Place wrong y value', () => {
  expect(moveCheckX(-2)).toBe(false);
});

test('Place wrong y value', () => {
  expect(moveCheckX(8)).toBe(false);
});

test('Place correct x value', () => {
  expect(moveCheckX(3)).toBe(true);
});

test('Place correct y value', () => {
  expect(moveCheckX(4)).toBe(true);
});
