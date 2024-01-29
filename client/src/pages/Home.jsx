import { useContext, useEffect, useState } from "react";
import "../styles/Home.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormProduct } from "../components/FormProduct";
import { ProductCard } from "../components/ProductCard";
import { useControlProducts } from "../hooks/useControlProducts";
import { useControlUser } from "../hooks/useControlUser";
import { UserDataContexts } from "../context/UserDataContext";
import { useNavigate } from "react-router-dom";
import { CalculatorCard } from "../components/CalculatorCard";

export const Home = () => {
  const { products, createProducts, editProducts, deleteProduct, updateProduct, openUpdateProduct, setUpdateProduct } = useControlProducts();
  const { getUser } = useControlUser();
  const navigate = useNavigate();
  const { userData } = useContext(UserDataContexts);

  const handleAddProduct = () => {
    userData ? openUpdateProduct() : navigate("/login");
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = () => {
    updateProduct.create ? createProducts() : editProducts();
  };


  return (
    <>
      <div className="box">
        <h1 className="textShadow">Stock Control</h1>
        <h2 className="textShadow">Create your own list with the blue button</h2>
        <button className="more_products boxShadow" onClick={handleAddProduct}>
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
      <CalculatorCard />
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
