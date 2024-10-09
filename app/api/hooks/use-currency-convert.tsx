import { useQuery } from "@tanstack/react-query";
import { fetchCurrencyConvert } from "../requests/fetch-currency-convert";

export const useCurrencyConvert = (
  from: string,
  to: string,
  amountFrom: number
) => {
  const result = useQuery({
    queryKey: [`currencyConvert`, from, to, amountFrom],
    queryFn: () => fetchCurrencyConvert(from, to, amountFrom),
  });
  return result;
};
