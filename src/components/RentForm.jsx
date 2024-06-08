import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import FlipCard from "./FlipCard";
import CarBack from "./CarBack";
import CarFront from "./CarFront";
import { useNavigate } from "react-router-dom";

export default function RentForm() {
  const { state } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.carToRent === null) {
      navigate("/");
    }
  }, []);

  if (state.carToRent === null) {
    return <></>;
  }

  const [daysCount, setDaysCount] = useState(1);

  const incrementCounter = () => {
    if (daysCount < 7) setDaysCount(daysCount + 1);
  };

  const decrementCounter = () => {
    if (daysCount > 1) setDaysCount(daysCount - 1);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="container mx-auto max-w-screen-lg">
        <div>
          <div className="mb-6 rounded bg-white p-4 px-4 shadow-lg md:p-8">
            <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="text-lg font-medium">Personal Details</p>
                <p>Please fill out all the fields.</p>

                <hr className="my-6" />

                <FlipCard
                  aspectRatio="aspect-[16/10]"
                  back={<CarBack car={state.carToRent} />}
                  front={<CarFront car={state.carToRent} />}
                />
              </div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 gap-4 gap-y-2 text-sm md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                      placeholder="email@domain.com"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address">Address / Street</label>
                    <input
                      type="text"
                      className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="country">Country / region</label>
                    <div className="mt-1 flex h-10 items-center rounded border border-gray-200 bg-gray-50">
                      <input
                        placeholder="Country"
                        className="w-full appearance-none bg-transparent px-4 text-gray-800 outline-none"
                      />
                      <button
                        tabIndex="-1"
                        className="cursor-pointer text-gray-300 outline-none transition-all hover:text-red-600 focus:outline-none"
                      >
                        <svg
                          className="mx-2 h-4 w-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button
                        tabIndex="-1"
                        htmlFor="show_more"
                        className="cursor-pointer border-l border-gray-200 text-gray-300 outline-none transition-all hover:text-blue-600 focus:outline-none"
                      >
                        <svg
                          className="mx-2 h-4 w-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">State / province</label>
                    <div className="mt-1 flex h-10 items-center rounded border border-gray-200 bg-gray-50">
                      <input
                        placeholder="State"
                        className="w-full appearance-none bg-transparent px-4 text-gray-800 outline-none"
                      />
                      <button
                        tabIndex="-1"
                        className="cursor-pointer text-gray-300 outline-none transition-all hover:text-red-600 focus:outline-none"
                      >
                        <svg
                          className="mx-2 h-4 w-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button
                        tabIndex="-1"
                        htmlFor="show_more"
                        className="cursor-pointer border-l border-gray-200 text-gray-300 outline-none transition-all hover:text-blue-600 focus:outline-none"
                      >
                        <svg
                          className="mx-2 h-4 w-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="soda">How many days?</label>
                    <div className="mt-1 flex h-10 w-28 items-center rounded border border-gray-200 bg-gray-50">
                      <button
                        tabIndex="-1"
                        htmlFor="show_more"
                        onClick={decrementCounter}
                        className="cursor-pointer border-r border-gray-200 text-gray-500 outline-none transition-all hover:text-blue-600 focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-2 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <input
                        placeholder="0"
                        value={daysCount}
                        readOnly={true}
                        className="w-full appearance-none bg-transparent px-2 text-center text-gray-800 outline-none"
                      />
                      <button
                        tabIndex="-1"
                        htmlFor="show_more"
                        onClick={incrementCounter}
                        className="cursor-pointer border-l border-gray-200 text-gray-500 outline-none transition-all hover:text-blue-600 focus:outline-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-2 h-4 w-4 fill-current"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="text-right md:col-span-5">
                    <div className="inline-flex items-end">
                      <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
