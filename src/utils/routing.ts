export function isValidABARouting(r: string): boolean {
  if (!/^\d{9}$/.test(r)) return false;
  const d = r.split('').map(Number);
  const sum = 3 * (d[0] + d[3] + d[6]) + 7 * (d[1] + d[4] + d[7]) + 1 * (d[2] + d[5] + d[8]);
  return sum % 10 === 0;
}

export function formatRoutingMasked(r: string): string {
  if (!/^\d{9}$/.test(r)) return r;
  return '*****' + r.slice(5);
}
