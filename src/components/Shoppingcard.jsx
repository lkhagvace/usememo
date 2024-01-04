import React from "react";
import { useMemo, useContext } from "react";
import { ProductContextValue } from "@/context/ProductContext";

export const Shoppingcard = () => {
  const { productValue, setProductValue } = useContext(ProductContextValue);
  // console.log("productValue", productValue);
  const calculating = () => {
    productValue.map();
  };
  const totalPrice = useMemo(() => calculating, []);
  return <div>{totalPrice}</div>;
};
