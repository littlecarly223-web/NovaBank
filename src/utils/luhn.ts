function luhnCheckDigit(prefixDigits: string): number {
  const digits = prefixDigits.split('').map(Number);
  // Starting from rightmost, double every second digit (for generating check digit we treat positions accordingly)
  let sum = 0;
  const len = digits.length + 1; // include check digit position
  for (let i = 0; i < digits.length; i++) {
    const positionFromRight = len - i;
    let d = digits[i];
    if (positionFromRight % 2 === 0) {
      d = d * 2;
      if (d > 9) d -= 9;
    }
    sum += d;
  }
  return (10 - (sum % 10)) % 10;
}

export function generateLuhn16(): string {
  // generate first 15 digits randomly
  let prefix = '';
  for (let i = 0; i < 15; i++) prefix += Math.floor(Math.random() * 10);
  const check = luhnCheckDigit(prefix);
  return prefix + String(check);
}

export function luhnValidate(cardNumber: string): boolean {
  if (!/^\d{13,19}$/.test(cardNumber)) return false;
  const digits = cardNumber.split('').map(Number).reverse();
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let d = digits[i];
    if (i % 2 === 1) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
  }
  return sum % 10 === 0;
}

export function generateCVV(): string {
  return String(Math.floor(100 + Math.random() * 900));
}

export function generateExpiryMonthsYears(years = 3): { mm: string; yyyy: string } {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = String(now.getFullYear() + years);
  return { mm, yyyy };
}
