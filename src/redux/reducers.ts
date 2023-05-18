import {
  SET_FROM_CURRENCY,
  SET_TO_CURRENCY,
  SET_AMOUNT,
  SET_CONVERTED_AMOUNT,
  SET_CONVERSION_RATE,
  SET_DISABLE_BUTTON,
  AppAction,
} from "./actions";

export interface AppState {
  fromCurrency: string;
  toCurrency: string;
  amount: string;
  convertedAmount: string;
  conversionRate: number;
  disableButton: boolean;
}

const initialState: AppState = {
  fromCurrency: "EUR",
  toCurrency: "GBP",
  amount: "1.00",
  convertedAmount: "",
  conversionRate: 0,
  disableButton: false,
};

const appReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case SET_FROM_CURRENCY:
      return { ...state, fromCurrency: action.payload };
    case SET_TO_CURRENCY:
      return { ...state, toCurrency: action.payload };
    case SET_AMOUNT:
      return { ...state, amount: action.payload };
    case SET_CONVERTED_AMOUNT:
      return { ...state, convertedAmount: action.payload };
    case SET_CONVERSION_RATE:
      return { ...state, conversionRate: action.payload };
    case SET_DISABLE_BUTTON:
      return { ...state, disableButton: action.payload };
    default:
      return state;
  }
};

export default appReducer;
