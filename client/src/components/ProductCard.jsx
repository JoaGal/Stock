import React from "react";
import  Axios  from "axios";
import { toast } from "react-toastify";
import "../styles/Home.css"

export const ProductCard = ({openUpdateClient, item, getClients}) => {


    const deleteClient = (id) => {
        Axios.delete(`https://control-stock-server.vercel.app/api/delete/${id}`).then(() => {
          getClients();
          toast.success("Client deleted");
        });
      };

  return (
    <div className="productCard_container boxShadow">
      <ul>
        <li>
          <i className="fa-brands fa-product-hunt productsData" />
          <h3>{item.product}</h3>
        </li>
        <li>
        <i className="fa-sharp fa-solid fa-basket-shopping productsData" />
          <h3>{item.amount}</h3>
        </li>
        <li>
        <i className="fa-solid fa-tag productsData" />
          <h3>${item.price}</h3>
        </li>
      </ul>
      <div className="productCard_buttons">
        <button className="update" onClick={() => openUpdateClient(item)}>
          <i className="fa-solid fa-pen" />
        </button>
        <button className="delete" onClick={() => deleteClient(item.id)}>
        <i className="fa-solid fa-trash" />
        </button>
      </div>
    </div>
  );
};
