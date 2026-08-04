export function makeReceiptRef(date = new Date(), suffixDigits = 6): string {
  const ymd = date.toISOString().slice(0, 10).replace(/-/g, '');
  const rand = Math.floor(Math.random() * Math.pow(10, suffixDigits))
    .toString()
    .padStart(suffixDigits, '0');
  return `NB-${ymd}-${rand}`;
}
