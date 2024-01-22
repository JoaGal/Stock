import React, { useContext } from "react";
import { InputValueContexts } from "../context/InputValueContext";

export const InputCustom = (props) => {
  const { label, type, name, value } = props;
  const { inputValue, setInputValue } = useContext(InputValueContexts);

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="inputCustom">
      <input
        placeholder=" "
        type={type}
        onChange={handleChange}
        name={name}
        className="boxShadow"
        value={value}
      />
      <label>{label}</label>
    </div>
  );
};
