import { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { InputValueContexts } from '../context/InputValueContext';

export const useFormProduct = () => {
  const {setInputValue} = useContext(InputValueContexts)
    const [updateProduct, setUpdateProduct] = useState({
        open: false,
        create: true,
      });

      const openUpdateProduct = (props) => {
        if (props?.id !== undefined) {
          setUpdateProduct({ open: !updateProduct.open, create: false });
          setInputValue({
            product: props.product,
            amount: props.amount,
            price: props.price,
            id: props.id,
          });
          toast.warning("Can't revert a update");
        } else {
          setUpdateProduct({ open: !updateProduct.open, create: true });
          props === true && setInputValue();
        }
      };


  return {openUpdateProduct, updateProduct, setUpdateProduct}
}
