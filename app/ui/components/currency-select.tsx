import { useCurrencyList } from "@/app/api/hooks/use-currency-list";
import { alphabeticallyByKey } from "@/app/utils/sort";
import React, { useMemo } from "react";
import { CurrencySelectShadow } from "./currency-select-shadow";

interface ICurrencySelectProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => any;
  selected: string;
}

export const CurrencySelect = ({
  onChange,
  selected,
}: ICurrencySelectProps) => {
  const { isPending, isError, data: currencies } = useCurrencyList();
  const sortedCurrencies = useMemo(() => {
    return currencies?.toSorted(alphabeticallyByKey("name"));
  }, [currencies]);

  if (isPending) {
    return <CurrencySelectShadow />;
  }

  if (isError || !sortedCurrencies) {
    return <span>Error</span>;
  }

  return (
    <select onChange={onChange} className="margin-sm rounded-sm mx-2 p-1">
      {sortedCurrencies.map((currency) => (
        <option
          selected={currency.short_code === selected}
          value={currency.short_code}
        >
          {currency.name}
        </option>
      ))}
    </select>
  );
};
