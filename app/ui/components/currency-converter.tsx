"use client";
import { useCurrencyConvert } from "@/app/api/hooks/use-currency-convert";
import { useCallback, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { CurrencySelect } from "./currency-select";

const DEFAULTS = {
  from: "USD",
  to: "EUR",
  fromAmount: 100,
};

export const CurrencyConverter = () => {
  const [selectedFrom, changeSelectedFrom] = useState(DEFAULTS.from);
  const [selectedTo, changeSelectedTo] = useState(DEFAULTS.to);
  const [fromAmount, changeFromAmount] = useState(DEFAULTS.fromAmount);

  const onChangeFrom = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      changeSelectedFrom(e.target.value);
    },
    []
  );

  const onChangeTo = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    changeSelectedTo(e.target.value);
  }, []);

  const onChangeAmount = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      changeFromAmount(Number(e.target.value));
    },
    500
  );

  const {
    isPending,
    isError,
    data: conversionResult,
  } = useCurrencyConvert(selectedFrom, selectedTo, fromAmount);

  if (isError) {
    return <p>"Something went wrong"</p>;
  }

  return (
    <div className="black border-solid border-2 border-sky-500 rounded-md px-4">
      <div className="my-4">
        <CurrencySelect onChange={onChangeFrom} selected={selectedFrom} />
        <input
          type="number"
          defaultValue={fromAmount}
          onChange={onChangeAmount}
          className="margin-sm rounded-sm mx-2 p-1"
        />
      </div>
      <div className="my-4">
        <CurrencySelect onChange={onChangeTo} selected={selectedTo} />
        {isPending ? (
          <span>Loading...</span>
        ) : (
          <input
            type="number"
            value={conversionResult?.value}
            disabled
            className="margin-sm rounded-sm mx-2 p-1"
          />
        )}
      </div>
    </div>
  );
};
