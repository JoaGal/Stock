import React, { useState } from "react";
import "../styles/Calculator.css";
export const Calculator = ({setCalculator}) => {
  const buttons = [
    { value: "Clear", cName: "clear" },
    { value: "/", cName: "operator" },
    { value: "*", cName: "operator" },
    { value: "7", cName: "number" },
    { value: "8", cName: "number" },
    { value: "9", cName: "number" },
    { value: "-", cName: "operator" },
    { value: "4", cName: "number" },
    { value: "5", cName: "number" },
    { value: "6", cName: "number" },
    { value: "+", cName: "plus" },
    { value: "1", cName: "number" },
    { value: "2", cName: "number" },
    { value: "3", cName: "number" },
    { value: "0", cName: "equals" },
    { value: "00", cName: "number" },
    { value: ".", cName: "number" },
    { value: "=", cName: "equal" },
  ];
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
    <div className="container_cal" onClick={()=> setCalculator(false)}>
      <div className="calculator">
        <div>
          <h2 className="value">{ result === "" ? 0 : result }</h2>
          {buttons.map((item, index) => (
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
