import { createContext, useContext, useEffect, useReducer } from "react";
import cars from "../data/cars";
import axios from "axios";

const SET_FILTERS = "SET_FILTERS";
const SET_CLIENT = "SET_CLIENT";
const SET_CARS = "SET_CARS";
const RENT_CAR = "RENT_CAR";
const ADD_CAR = "ADD_CAR";

const AppContext = createContext();

const getPrice = (car) => car.price * 0.002;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FILTERS:
      const { country, city, minimumPrice, maximumPrice } = action.payload;

      const filteredCars = state.allCars.filter((car) => {
        return (
          (country
            ? car.country.toLowerCase().includes(country.toLowerCase())
            : true) &&
          (city ? car.city.toLowerCase().includes(city.toLowerCase()) : true) &&
          getPrice(car) >= minimumPrice &&
          getPrice(car) <= maximumPrice
        );
      });
      return {
        ...state,
        filters: action.payload,
        filteredCars,
      };
    case RENT_CAR:
      return {
        ...state,
        carToRent: action.payload,
      };
    case ADD_CAR:
      const updatedCars = [...state.allCars, action.payload];
      return {
        ...state,
        allCars: updatedCars,
        filteredCars: updatedCars,
      };
    case SET_CLIENT:
      return {
        ...state,
        client: action.payload,
      };
    case SET_CARS:
      return {
        ...state,
        allCars: action.payload,
      };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    allCars: [],
    filteredCars: [],
    filters: {
      country: null,
      city: null,
      minimumPrice: 0.0,
      maximumPrice: 1000.0,
    },
    client: null,
    carToRent: null,
    carToAdd: null,
  });

  useEffect(() => {
    axios
      .get("cars")
      .then((response) => setCars(response.data))
      .then(putStaticCars)
      .catch(console.error);
  }, []);

  const putStaticCars = async (mappedCars) => {
    for (const car of cars) {
      if (
        mappedCars.filter((savedCar) => car.model === savedCar.model).length ===
        0
      ) {
        await axios.post("cars", {
          ...car,
          image: car.icon,
          pricePerDay: getPrice(car),
        });
      }
    }

    const response = await axios.get("cars");

    setCars(response.data);

    setFilters({
      country: null,
      city: null,
      minimumPrice: 0.0,
      maximumPrice: 1000.0,
    });
  };

  const setFilters = (filters) => {
    dispatch({ type: SET_FILTERS, payload: filters });
  };

  const setCars = async (cars) => {
    const mappedCars = cars.map((car) => ({
      ...car,
      icon: car.image,
      price: (car.pricePerDay * 1) / 0.002,
    }));

    dispatch({ type: SET_CARS, payload: mappedCars });
    return mappedCars;
  };

  const setClient = (client) => {
    dispatch({ type: SET_CLIENT, payload: client });
  };

  const rentCar = (car) => {
    dispatch({ type: RENT_CAR, payload: car });
  };

  const addCar = (car) => {
    dispatch({ type: ADD_CAR, payload: car });
  };

  return (
    <AppContext.Provider
      value={{ state, setFilters, rentCar, addCar, setClient }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
