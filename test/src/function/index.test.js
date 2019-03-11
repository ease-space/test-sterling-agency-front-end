const testFunc = () => {
  return false;
};

describe('test testFunc function', () => {
  test('testFunc function should return boolean', () => {
    expect(typeof testFunc()).toBe('boolean');
  });
});
