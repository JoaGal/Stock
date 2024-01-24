import { useContext, useEffect, useState } from "react";
import "../styles/Home.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormProduct } from "../components/FormProduct";
import { useFormProduct } from "../hooks/useFormProduct";
import { ProductCard } from "../components/ProductCard";
import { Calculator } from "../components/Calculator";
import { useControlProducts } from "../hooks/useControlProducts";
import { useControlUser } from "../hooks/useControlUser";
import { UserDataContexts } from "../context/UserDataContext";
import { useNavigate } from "react-router-dom";
import { useCalculatePrice } from "../hooks/useCalculatePrice";

export const Home = () => {
  const [calculator, setCalculator] = useState(false);
  const { products, createProducts, editProducts, deleteProduct } = useControlProducts();
  const { openUpdateProduct, updateProduct, setUpdateProduct } = useFormProduct();
  const { getUser } = useControlUser();
  const {totalPrice} = useCalculatePrice()
  const navigate = useNavigate();
  const { userData } = useContext(UserDataContexts);

  const handleAddProduct = () => {
    userData ? openUpdateProduct() : navigate("/login");
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = () => {
    updateProduct.create ? createProducts(setUpdateProduct) : editProducts(setUpdateProduct);
  };

  return (
    <>
      <div className="box">
        <h1 className="textShadow">Control Stock</h1>
        <h2 className="textShadow">Create your own list with the blue button</h2>
        <button className="more_clientes boxShadow" onClick={handleAddProduct}>
          +
        </button>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            openUpdateProduct={openUpdateProduct}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
      <div className="home_container-price boxShadow">
        <h1>Total: ${totalPrice.toFixed(2)}</h1>
        <button onClick={() => setCalculator(true)}>
          <i className="fa-solid fa-calculator" />
        </button>
      </div>
      {calculator && <Calculator setCalculator={setCalculator} />}
      {updateProduct?.open && (
        <FormProduct
          setUpdateProduct={setUpdateProduct}
          handleSubmit={handleSubmit}
        />
      )}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
};
