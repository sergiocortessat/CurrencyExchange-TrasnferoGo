export const SET_FROM_CURRENCY = "SET_FROM_CURRENCY";
export const SET_TO_CURRENCY = "SET_TO_CURRENCY";
export const SET_AMOUNT = "SET_AMOUNT";
export const SET_CONVERTED_AMOUNT = "SET_CONVERTED_AMOUNT";
export const SET_CONVERSION_RATE = "SET_CONVERSION_RATE";
export const SET_DISABLE_BUTTON = "SET_DISABLE_BUTTON";

interface SetFromCurrencyAction {
  type: typeof SET_FROM_CURRENCY;
  payload: string;
}

interface SetToCurrencyAction {
  type: typeof SET_TO_CURRENCY;
  payload: string;
}

interface SetAmountAction {
  type: typeof SET_AMOUNT;
  payload: string;
}

interface SetConvertedAmountAction {
  type: typeof SET_CONVERTED_AMOUNT;
  payload: string;
}

interface SetConversionRateAction {
  type: typeof SET_CONVERSION_RATE;
  payload: number;
}

interface SetDisableButtonAction {
  type: typeof SET_DISABLE_BUTTON;
  payload: boolean;
}

export type AppAction =
  | SetFromCurrencyAction
  | SetToCurrencyAction
  | SetAmountAction
  | SetConvertedAmountAction
  | SetConversionRateAction
  | SetDisableButtonAction;

export const setFromCurrency = (
  fromCurrency: string
): SetFromCurrencyAction => ({
  type: SET_FROM_CURRENCY,
  payload: fromCurrency,
});

export const setToCurrency = (toCurrency: string): SetToCurrencyAction => ({
  type: SET_TO_CURRENCY,
  payload: toCurrency,
});

export const setAmount = (amount: string): SetAmountAction => ({
  type: SET_AMOUNT,
  payload: amount,
});

export const setConvertedAmount = (
  convertedAmount: string
): SetConvertedAmountAction => ({
  type: SET_CONVERTED_AMOUNT,
  payload: convertedAmount,
});

export const setConversionRate = (
  conversionRate: number
): SetConversionRateAction => ({
  type: SET_CONVERSION_RATE,
  payload: conversionRate,
});

export const setDisableButton = (
  disableButton: boolean
): SetDisableButtonAction => ({
  type: SET_DISABLE_BUTTON,
  payload: disableButton,
});
