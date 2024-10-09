import { isCurrencies } from "../types";

export const fetchCurrencyList = async (type: "fiat" | "crypto") => {
  const apiKey = process.env.NEXT_PUBLIC_CURRENCYBEACON_API_KEY;

  const result = await (
    await fetch(
      `https://api.currencybeacon.com/v1/currencies?api_key=${apiKey}&type=${type}`
    )
  ).json();
  const maybeCurrencies = result?.response;
  if (result && result.meta.code === 200 && isCurrencies(maybeCurrencies)) {
    return maybeCurrencies;
  } else {
    throw new Error("Something went wrong fetching currencies");
  }
};
