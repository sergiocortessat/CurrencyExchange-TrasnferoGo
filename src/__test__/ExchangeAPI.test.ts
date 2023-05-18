import fetchConversionRate from '../services/ExchangeAPI';
import { TRANSFERGOAPI } from '../services/EndPoints';

describe('fetchConversionRate', () => {
  it('should fetch conversion rate correctly', async () => {
    // Arrange
    const from = 'USD';
    const to = 'EUR';
    const amount = '100';

    // Store the original fetch function
    const originalFetch = global.fetch;

    // Mock the fetch function
    const mockResponse = {
      from: from,
      to: to,
      rate: 1.2,
      fromAmount: 100,
      toAmount: 120,
    };

    jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockResponse),
      }) as jest.Mock<Promise<Response>, [RequestInfo, RequestInit?]>;

    // Act
    const result = await fetchConversionRate(from, to, amount);

    // Assert
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
