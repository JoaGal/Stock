import "../styles/components/Form.css";
import { FormProductData } from "./data/FormProductData";
import { InputCustom } from "./InputCustom";
import { useContext } from "react";
import { InputValueContexts } from "../context/InputValueContext";

export const FormProduct = ({ setUpdateProduct, handleSubmit }) => {
  const { setInputValue, inputValue } = useContext(InputValueContexts);

  const closeFormProduct = () => {
    setUpdateProduct({ open: false, create: true });
    setInputValue();
  };

  return (
    <div className="form_container">
      <div className="form_box">
        <button className="close boxShadow" onClick={closeFormProduct}>
          <i className="fas fa-times" />
        </button>
        <h1 className="textShadow">Add Product</h1>
        {FormProductData.map((item, index) => (
          <InputCustom
            key={index}
            label={item.label}
            type={item.type}
            name={item.name}
            value={inputValue && inputValue[item.name]}
          />
        ))}
        <button className="submit boxShadow" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
