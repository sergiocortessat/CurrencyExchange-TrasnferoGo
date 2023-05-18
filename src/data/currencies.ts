import EUR from '../assets/EUR.png'
import USD from '../assets/USD.png'
import GBP from '../assets/GBP.png'
import UAH from '../assets/UAH.png'

export const SupportedCurrencies = ['EUR', 'USD', 'GBP', 'UAH']

export interface ImageTypes {
   [key: string]: string;
}
export const currencyImages:ImageTypes = {
  EUR: EUR,
  USD: USD,
  GBP: GBP,
  UAH: UAH,
};