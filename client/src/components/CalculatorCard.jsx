import React, { useState } from "react";
import { calculatePrice } from "../functions/calculatePrice";
import { Calculator } from "./Calculator";

export const CalculatorCard = () => {
  const { totalPrice } = calculatePrice();
  const [calculator, setCalculator] = useState(false);

  return (
    <>
      <div className="home_container-price boxShadow">
        <h1>Total: ${totalPrice.toFixed(2)}</h1>
        <button onClick={() => setCalculator(true)}>
          <i className="fa-solid fa-calculator" />
        </button>
      </div>
      <Calculator calculator={calculator} setCalculator={setCalculator} />
    </>
  );
};
