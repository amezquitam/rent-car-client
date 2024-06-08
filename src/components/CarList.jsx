import React from "react";
import { useAppContext } from "../context/AppContext";
import FlipCard from "./FlipCard";
import CarFront from "./CarFront";
import CarBack from "./CarBack";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";

export default function CarList() {
  const { state, rentCar } = useAppContext();
  const { filteredCars } = state;

  const navigate = useNavigate();

  const rentCarHandle = (car) => {
    console.log("sadfsd");
    rentCar(car);
    navigate("/rent-car");
  };

  return (
    <div className="relative flex min-h-screen bg-gradient-to-tr from-stone-500 via-stone-50 to-stone-200">
      <div className="mx-[5%] flex min-h-full flex-1 flex-col py-16">
        <h1 className="mb-16 text-6xl text-stone-700 xl:text-6xl">
          Available Vehicles
        </h1>
        <Filter className="mb-16" />
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10">
          {filteredCars.map((car) => (
            <FlipCard
              key={car.model}
              aspectRatio="aspect-[16/10]"
              onClick={() => rentCarHandle({ ...car })}
              front={<CarFront car={car} />}
              back={<CarBack car={car} />}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
