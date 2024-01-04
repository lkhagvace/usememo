import { createContext, useState } from "react";
export const ProductContextValue = createContext([]);
export const ProductProvider = ({ children }) => {
  const [productValue, setProductValue] = useState([]);
  return (
    <ProductContextValue.Provider value={{ productValue, setProductValue }}>
      {children}
    </ProductContextValue.Provider>
  );
};
