import { isValidABARouting, formatRoutingMasked } from '../src/utils/routing';

describe('ABA routing', () => {
  // Known valid routing numbers (public test examples)
  test('valid routing numbers', () => {
    expect(isValidABARouting('011000015')).toBe(true); // Wells Fargo
    expect(isValidABARouting('021000021')).toBe(true); // Chase
  });

  test('invalid routing numbers', () => {
    expect(isValidABARouting('123456789')).toBe(false);
    expect(isValidABARouting('000000000')).toBe(false);
  });

  test('masking', () => {
    expect(formatRoutingMasked('021000021')).toBe('*****0021'.slice(0, 9));
  });
});
