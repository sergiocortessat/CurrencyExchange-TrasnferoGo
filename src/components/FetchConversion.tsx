import {
    setConvertedAmount,
    setConversionRate,
} from "../redux/actions";
import fetchConversionRate from "../services/ExchangeAPI";
import { AppAction } from '../redux/actions'
import { Dispatch } from "redux";

const fetchConversion = async (
    amount: string,
    fromCurrency: string,
    toCurrency: string,
    dispatch: Dispatch<AppAction>,
) => {
    if (!amount || !fromCurrency || !toCurrency || parseFloat(amount) === 0) {
        return;
    }

    const data = await fetchConversionRate(fromCurrency, toCurrency, amount);
    if (data && data.toAmount !== undefined) {
        dispatch(setConvertedAmount(data.toAmount.toString()));
        dispatch(setConversionRate(data.rate));
    }
};

export default fetchConversion;
