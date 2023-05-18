  import {TRANSFERGOAPI} from './EndPoints'

  interface CurrencyData {
    from: string;
    to: string;
    rate: number;
    fromAmount: number;
    toAmount: number;
  }

  const fetchConversionRate = async (
    from: string,
    to: string,
    amount: string
  ): Promise<CurrencyData | undefined> => {
    try {
      const response = await fetch(
        `${TRANSFERGOAPI}?from=${from}&to=${to}&amount=${amount}`
      );
      const data: CurrencyData = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching conversion rate:', error);
      return undefined;
    }
  };

  export default fetchConversionRate;
