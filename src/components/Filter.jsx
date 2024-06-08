import React from "react";
import PriceInput from "./PriceInput";
import TextInput from "./TextInput";
import { useAppContext } from "../context/AppContext";
import AddIcon from "../assets/create-icon.png";

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
      <button
        type="button"
        className="flex items-center gap-6 rounded-3xl bg-slate-50 px-6 py-2 hover:bg-stone-300"
      >
        <span>Add new car</span>
        <img
          src={AddIcon}
          className="aspect-square w-10 object-cover"
          alt="add"
        />
      </button>
    </div>
  );
}
