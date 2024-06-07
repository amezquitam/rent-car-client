import CarInfo from "./CarInfo";
import CarIcon from "./CarIcon";

/** @param {{car: import("../data/cars").Car}} car */
export default function CarFront({ car }) {
  return (
    <>
      <CarIcon icon={car.icon} alt={car.model} />
      <CarInfo>
        <h3>{car.model}</h3>
        <h3>${car.price * 0.02}/day</h3>
      </CarInfo>
    </>
  );
}
