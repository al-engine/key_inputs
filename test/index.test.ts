import KeyInputs from '../src';

test('', () => {
  const keyInputs = new KeyInputs();
  expect(keyInputs.keysPress.length).toBe(0);
  expect(keyInputs.keysHold.length).toBe(0);
});
