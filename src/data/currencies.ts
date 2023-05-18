import EUR from "../assets/EUR.png";
import PLN from "../assets/PLN.png";
import GBP from "../assets/GBP.png";
import UAH from "../assets/UAH.png";

export const SupportedCurrencies = ["EUR", "PLN", "GBP", "UAH"];

export interface ImageTypes {
  [key: string]: string;
}
export const currencyImages: ImageTypes = {
  EUR: EUR,
  PLN: PLN,
  GBP: GBP,
  UAH: UAH,
};
