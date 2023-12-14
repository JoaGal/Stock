import "../styles/components/Form.css";
import { FormData } from "./data/FormData";
import Axios from "axios";
import { toast } from "react-toastify";
import { InputCustom } from "./InputCustom";

export const Form = ({functionForm, handleChange, setOpenUpdate, form, setForm, openUpdate}) => {
    
    const createClient = () => {
        Axios.post("https://control-stock-server.vercel.app/api/insert", {
          product: form.product,
          amount: parseInt(form.amount),
          price: parseFloat(form.price),
        }).then(() => {
            functionForm("Client created")
        }).catch(() => {
            toast.error("Error creating client")
        });
      };
    
      const updateClient = (id) => {
        Axios.put("https://control-stock-server.vercel.app/api/update", {
          id: id,
          product: form.product,
          amount: parseInt(form.amount),
          price: parseFloat(form.price),
        }).then(() => {
            functionForm("Client updated")
        }).catch(() => {
            toast.error("Error updating client")
        });
      };

      const handleSubmit = () => {
        openUpdate.create ? createClient() : updateClient(form.id);
      };

      const closeForm = () => {
        setOpenUpdate({ open: false, create: true });
        setForm({ product: "", amount: "", price: "", id: "" });
      };

  return (
    <div className="form_container">
      <div className="form_box">
        <button className="close boxShadow" onClick={closeForm}>
          <i className="fas fa-times" />
        </button>
        <h1 className="textShadow">Add Client</h1>
        {FormData.map((item, index) => (
          <InputCustom
            key={index}
            label={item.label}
            type={item.type}
            onChange={handleChange}
            name={item.name}
            value={form[item.name]}
          />
        ))}
        <button className="submit boxShadow" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
