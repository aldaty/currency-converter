export interface Currency {
  name: string;
  short_code: string;
}

export type Currencies = Currency[];

export function isCurrencies(currencies: any[]): currencies is Currencies {
  return currencies.reduce((isCurrencies, currency) => {
    return (
      isCurrencies &&
      currency &&
      typeof (currency as Currency).name === "string" &&
      typeof (currency as Currency).short_code === "string"
    );
  }, true);
}

export type ConversionResult = {
  value: number;
};

export function isConversionResult(result: any): result is ConversionResult {
  return result && typeof (result as ConversionResult).value === "number";
}
