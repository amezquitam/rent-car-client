import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/AppContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RentForm from "./components/RentForm.jsx";
import "./axios.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route index path="/rent-car" element={<RentForm />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>,
);
