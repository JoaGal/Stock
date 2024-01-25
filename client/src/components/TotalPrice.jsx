import React from "react";
import { useCalculatePrice } from "../hooks/useCalculatePrice";

export const TotalPrice = () => {
  const { totalPrice } = useCalculatePrice();

  return (
    <div className="home_container-price boxShadow">
      <h1>Total: ${totalPrice.toFixed(2)}</h1>
      <button onClick={() => setCalculator(true)}>
        <i className="fa-solid fa-calculator" />
      </button>
    </div>
  );
};
