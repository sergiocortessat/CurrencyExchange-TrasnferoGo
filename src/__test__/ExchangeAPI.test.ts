import fetchConversionRate from '../services/ExchangeAPI';

describe('fetchConversionRate', () => {
  it('should fetch conversion rate correctly', async () => {
    const from = 'USD';
    const to = 'EUR';
    const amount = '100';

    const originalFetch = global.fetch;

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        from: from,
        to: to,
        rate: 1.2,
        fromAmount: 100,
        toAmount: 120,
      }),
    });

    const result = await fetchConversionRate(from, to, amount);

    expect(result).toBeDefined();
    expect(result?.from).toBe(from);
    expect(result?.to).toBe(to);
    expect(result?.rate).toBe(1.2);
    expect(result?.fromAmount).toBe(100);
    expect(result?.toAmount).toBe(120);

    // Restore the original fetch function
    global.fetch = originalFetch;
  });
});
