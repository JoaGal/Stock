import React, { useState } from "react";
import "../styles/components/Calculator.css";
import { CalculatorData } from "./data/CalculatorData";

export const Calculator = ({ calculator, setCalculator }) => {
  const [value, setValue] = useState("0");
  const ops = ["/", "*", "+", "-", "."];

  const updateValue = (val) => {
    if (
      (ops.includes(val) && value === "0") ||
      (ops.includes(val) && ops.includes(value.slice(-1)))
    ) {
      return;
    } else if (val.includes("=")) {
      setValue(eval(value).toString());
      return;
    }
    setValue(value === "0" ? val : value + val);
  };

  const clearValue = () => {
    setValue("0");
  };

  return (
    <>
      {calculator && (
        <div className="cal_container">
          <div className="cal_box">
            <button
              className="close boxShadow"
              onClick={() => setCalculator(!calculator)}
            >
              <i className="fas fa-times" />
            </button>
            <div>
              <h2 className="value">{value}</h2>
              {CalculatorData.map((item, index) => (
                <span
                  key={index}
                  className={item.cName}
                  onClick={
                    item.value === "Clear"
                      ? clearValue
                      : () => updateValue(item.value)
                  }
                >
                  {item.value}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
