import React, { createContext, useState } from "react";

export const ProductsDataContexts = createContext(null);

export const ProductsDataContext = ({ children }) => {
  const [productData, setProductData] = useState();
  return (
    <ProductsDataContexts.Provider value={{ productData, setProductData }}>
      {children}
    </ProductsDataContexts.Provider>
  );
};