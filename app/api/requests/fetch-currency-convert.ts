import { isConversionResult } from "../types";

export const fetchCurrencyConvert = async (
  from: string,
  to: string,
  amountFrom: number
) => {
  const apiKey = process.env.NEXT_PUBLIC_CURRENCYBEACON_API_KEY;
  const response = await (
    await fetch(
      `https://api.currencybeacon.com/v1/convert?api_key=${apiKey}&from=${from}&to=${to}&amount=${amountFrom}`
    )
  ).json();

  if (response && response.meta.code === 200 && isConversionResult(response)) {
    return response;
  } else {
    throw new Error("Something went wrong converting currencies");
  }
};
