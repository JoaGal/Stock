import React from "react";
import  Axios  from "axios";
import { toast } from "react-toastify";
import "../styles/Home.css"

export const CardClient = ({openUpdateClient, item, getClients}) => {


    const deleteClient = (id) => {
        Axios.delete(`https://control-stock-server.vercel.app/api/delete/${id}`).then(() => {
          getClients();
          toast.success("Client deleted");
        });
      };

  return (
    <div className="client-container">
      <div className="client_box">
        <div>
          <i className="fa-brands fa-product-hunt" />
          <h3>{item.product}</h3>
        </div>
        <div>
        <i className="fa-sharp fa-solid fa-basket-shopping" />
          <h3>{item.amount}</h3>
        </div>
        <div>
        <i className="fa-solid fa-tag" />
          <h3>${item.price}</h3>
        </div>
      </div>
      <div className="client_buttons">
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
