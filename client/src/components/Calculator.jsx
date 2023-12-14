import React, { useState } from "react";
import "../styles/components/Calculator.css";
import { CalculatorData } from "./data/CalculatorData";
export const Calculator = ({setCalculator}) => {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const clearResult = () => {
    setCalc("");
    setResult("");
  };

  return (
    <div className="cal_container" >
      <div className="cal_box">
      <button className="close boxShadow" onClick={()=> setCalculator(false)}>
          <i className="fas fa-times" />
        </button>
        <div>
          <h2 className="value">{ result === "" ? 0 : result }</h2>
          {CalculatorData.map((item, index) => (
            <span
              key={index}
              className={item.cName}
              onClick={item.value === "Clear" ? clearResult : () => updateCalc(item.value)}
            >
              {item.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
