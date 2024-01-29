import { useEffect, useState } from "react";
import { useControlProducts } from "../hooks/useControlProducts";

export const calculatePrice = () => {
    const { products } = useControlProducts();
    const [totalPrice, setTotalPrice] = useState(0);
    const handleTotalPrice = () => {
        let total = 0;
        products.forEach((item) => {
          total += item.price * item.amount;
        });
        setTotalPrice(total);
      };

      useEffect(() => {
        handleTotalPrice();
      }, [products]);

  return {totalPrice}
}