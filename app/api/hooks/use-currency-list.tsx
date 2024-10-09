import { useQuery } from "@tanstack/react-query";
import { fetchCurrencyList } from "../requests/fetch-currency-list";

export const useCurrencyList = (type: "fiat" | "crypto" = "fiat") => {
  const result = useQuery({
    queryKey: ["currencyList"],
    queryFn: () => fetchCurrencyList(type),
  });
  return result;
};
