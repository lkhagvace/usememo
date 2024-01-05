import React from "react";
import { useMemo, useContext } from "react";
import { ProductContextValue } from "@/context/ProductContext";

export const Shoppingcard = () => {
  const { productValue, setProductValue } = useContext(ProductContextValue);
  const calculating = () => {
    return productValue.reduce((acc, cur) => acc + cur.id, 0);
  };
  const total = useMemo(() => calculating(), [productValue]);
  return <div>{total}</div>;
};
