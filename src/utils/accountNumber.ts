export function isSequential(s: string): boolean {
  const asc = '01234567890';
  const desc = '09876543210';
  return asc.includes(s) || desc.includes(s);
}

export function hasTrivialPattern(s: string): boolean {
  if (/^(\d)\1+$/.test(s)) return true; // all identical
  if (isSequential(s)) return true;
  // reject simple repeated blocks like 1212121212
  for (let size = 1; size <= 5; size++) {
    if (s.length % size !== 0) continue;
    const chunk = s.slice(0, size);
    if (chunk.repeat(s.length / size) === s) return true;
  }
  return false;
}

export function randomDigit(): string {
  return Math.floor(Math.random() * 10).toString();
}

export async function generateAccountNumber(
  uniquenessCheck: (candidate: string) => Promise<boolean>,
  maxAttempts = 1000
): Promise<string> {
  for (let i = 0; i < maxAttempts; i++) {
    const candidate = Array.from({ length: 10 }, () => randomDigit()).join('');
    if (hasTrivialPattern(candidate)) continue;
    // additional heuristic: avoid repeated two-digit patterns like 1212121212 already covered
    const unique = await uniquenessCheck(candidate);
    if (unique) return candidate;
  }
  throw new Error('Unable to generate a unique account number');
}
