import { useState } from 'react'
import { toast } from 'react-toastify';

export const useOpenForm = (setForm) => {
    const [openUpdate, setOpenUpdate] = useState({
        open: false,
        create: true,
      });

      const openUpdateClient = (props) => {
        if (props.id !== undefined) {
          setOpenUpdate({ open: !openUpdate.open, create: false });
          setForm({
            product: props.product,
            amount: props.amount,
            price: props.price,
            id: props.id,
          });
          toast.warning("Can't revert a update");
        } else {
          setOpenUpdate({ open: !openUpdate.open, create: true });
          props === true && setForm({ product: "", amount: "", price: "", id: "" });
        }
      };
  return {openUpdateClient, openUpdate, setOpenUpdate}
}
