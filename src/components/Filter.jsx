import React from "react";
import PriceInput from "./PriceInput";
import TextInput from "./TextInput";
import { useAppContext } from "../context/AppContext";

export default function Filter({ className }) {
  const { state, setFilters } = useAppContext();

  const setMinimumPrice = (minimumPrice) => {
    setFilters({ ...state.filters, minimumPrice });
  };

  const setMaximumPrice = (maximumPrice) => {
    setFilters({ ...state.filters, maximumPrice });
  };

  const setCountry = (country) => {
    setFilters({ ...state.filters, country });
  };

  const setCity = (city) => {
    setFilters({ ...state.filters, city });
  };

  return (
    <div className={"flex flex-wrap gap-9 " + className}>
      <PriceInput set={setMinimumPrice} text="Minimum Price" />
      <PriceInput set={setMaximumPrice} text="Maximum Price" />
      <TextInput set={setCountry} text="Country" placeholder="Country" />
      <TextInput set={setCity} text="City" placeholder="City" />
    </div>
  );
}
