import { useEffect, useState } from "react";
import "../styles/Home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "../components/Form";
import { useClients } from "../hooks/useClients";
import { useOpenForm } from "../hooks/useOpenForm";
import { CardClient } from "../components/CardClient";
import { Calculator } from "../components/Calculator";

export const Home = () => {
  const { clientsList, getClients } = useClients();
  const [totalPrice, setTotalPrice] = useState(0);
  const [form, setForm] = useState({
    product: "",
    amount: "",
    price: "",
    id: "",
  });
  const [calculator, setCalculator] = useState(false);
  const { openUpdateClient, openUpdate, setOpenUpdate } = useOpenForm(setForm);
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const functionForm = (text) => {
    setOpenUpdate({ open: false, create: true });
    getClients();
    setForm({ product: "", amount: "", price: "", id: "" });
    toast.success(text);
  };

  const handleTotalPrice = () => {
    let total = 0;
    clientsList.forEach((item) => {
      total += item.price * item.amount;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    handleTotalPrice();
  }, [clientsList]);

  return (
    <div className="container">
      {openUpdate.open && (
        <Form
          functionForm={functionForm}
          handleChange={handleChange}
          setOpenUpdate={setOpenUpdate}
          form={form}
          setForm={setForm}
          openUpdate={openUpdate}
        />
      )}
      <div className="container_clients">
        <button className="more_clientes" onClick={openUpdateClient}>
          +
        </button>
        {clientsList.map((item) => (
          <CardClient
            key={item.id}
            item={item}
            openUpdateClient={openUpdateClient}
            getClients={getClients}
          />
        ))}
      </div>
      <div className="container_totalPrice">
        <h1>Total: ${totalPrice}</h1>
        <button onClick={()=> setCalculator(true)}>
          <i className="fa-solid fa-calculator" />
        </button>
      </div>
       { calculator && <Calculator setCalculator={setCalculator} /> }
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};
