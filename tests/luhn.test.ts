import { generateLuhn16, luhnValidate, generateCVV, generateExpiryMonthsYears } from '../src/utils/luhn';

describe('Luhn utilities', () => {
  test('generate and validate card', () => {
    const card = generateLuhn16();
    expect(card.length).toBe(16);
    expect(luhnValidate(card)).toBe(true);
  });

  test('cvv format', () => {
    const cvv = generateCVV();
    expect(/^\d{3}$/.test(cvv)).toBe(true);
  });

  test('expiry years ahead', () => {
    const { mm, yyyy } = generateExpiryMonthsYears();
    expect(Number(yyyy)).toBeGreaterThanOrEqual(new Date().getFullYear() + 3);
    expect(/^[0-1]\d$/.test(mm)).toBe(true);
  });
});
