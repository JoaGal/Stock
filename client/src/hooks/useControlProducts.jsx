import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserDataContexts } from "../context/UserDataContext";
import { InputValueContexts } from "../context/InputValueContext";
import { toast } from "react-toastify";

export const useControlProducts = () => {
  const [products, setProducts] = useState([]);
  const { userData } = useContext(UserDataContexts);
  const { inputValue, setInputValue } = useContext(InputValueContexts);

  const productMessage = (message, setUpdateProduct) => {
    setUpdateProduct({ open: false, create: true });
    setInputValue();
    getProducts();
    toast.success(message);
  };

  //Create Product
  const createProducts = (setUpdateProduct) => {
    Axios.post("https://control-stock-backend.vercel.app/products/insert", {
      product: inputValue.product,
      amount: parseInt(inputValue.amount),
      price: parseFloat(inputValue.price),
      idUser: userData.id,
    })
      .then(() => {
        productMessage("Product created", setUpdateProduct);
      })
      .catch(() => {
        toast.error("Error creating product");
      });
  };

  //Edit Product
  const editProducts = (setUpdateProduct) => {
    Axios.put("https://control-stock-backend.vercel.app/products/update", {
      product: inputValue.product,
      amount: parseInt(inputValue.amount),
      price: parseFloat(inputValue.price),
      id: inputValue.id,
    })
      .then(() => {
        productMessage("Product updated", setUpdateProduct);
      })
      .catch(() => {
        toast.error("Error updating product");
      });
  };

  //Get Products
  const getProducts = () => {
    if (userData?.id !== undefined) {
      Axios.get(`https://control-stock-backend.vercel.app/products/get/${userData?.id}`)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getProducts();
  }, [userData]);

  //Delete Product // Cambiar la url por /products/delete
  const deleteProduct = (id) => {
    Axios.delete(
      `https://control-stock-backend.vercel.app/products/delete/${id}`
    ).then(() => {
      getProducts();
      toast.success("Client deleted");
    });
  };

  return {
    products,
    setProducts,
    getProducts,
    createProducts,
    editProducts,
    deleteProduct,
  };
};
