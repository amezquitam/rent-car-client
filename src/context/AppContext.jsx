import { createContext, useContext, useReducer } from "react";
import cars from "../data/cars";

const SET_FILTERS = "SET_FILTERS";
const RENT_CAR = "RENT_CAR";
const ADD_CAR = "ADD_CAR";
const SET_CLIENT = "SET_CLIENT";

const AppContext = createContext();

const getPrice = (car) => car.price * 0.02;

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
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    allCars: cars,
    filteredCars: cars,
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

  const setFilters = (filters) => {
    dispatch({ type: SET_FILTERS, payload: filters });
  };

  const rentCar = (car) => {
    dispatch({ type: RENT_CAR, payload: car });
  };

  const addCar = (car) => {
    dispatch({ type: ADD_CAR, payload: car });
  };

  return (
    <AppContext.Provider value={{ state, setFilters, rentCar, addCar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
