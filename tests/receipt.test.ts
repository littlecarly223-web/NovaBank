import { makeReceiptRef } from '../src/utils/receipt';

describe('receipt ref', () => {
  test('format', () => {
    const ref = makeReceiptRef(new Date('2026-01-02T03:04:05Z'));
    expect(ref).toMatch(/^NB-20260102-\d{6}$/);
  });
});
