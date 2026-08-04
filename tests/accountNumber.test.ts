import { hasTrivialPattern, isSequential } from '../src/utils/accountNumber';

describe('accountNumber heuristics', () => {
  test('detects identical digits', () => {
    expect(hasTrivialPattern('1111111111')).toBe(true);
  });

  test('detects simple sequence', () => {
    expect(isSequential('1234567890')).toBe(true);
    expect(isSequential('0987654321')).toBe(true);
  });

  test('accepts complex random-like numbers', () => {
    expect(hasTrivialPattern('1234512345')).toBe(true); // repeated chunk
    expect(hasTrivialPattern('1357913579')).toBe(true); // repeated chunk
    expect(hasTrivialPattern('1203948573')).toBe(false);
  });
});
