import CarInfo from "./CarInfo";
import CarIcon from "./CarIcon";

/** @param {{car: import("../data/cars").Car}} car */
export default function CarBack({ car }) {
  return (
    <>
      <CarIcon icon={car.icon} alt={car.model} />
      <CarInfo>
        <h3>
          {car.country} - {car.city}
        </h3>
        <h3>{car.year}</h3>
      </CarInfo>
    </>
  );
}
