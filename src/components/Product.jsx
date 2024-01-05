import { data } from "autoprefixer";
import React, { useEffect, useState, useContext, createElement } from "react";
import { ProductContextValue } from "@/context/ProductContext";

export const Product = () => {
  const { productValue, setProductValue } = useContext(ProductContextValue);
  const [data, setData] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const adding = (product) => {
    setProductValue([...productValue, product]);
  };
  return (
    <div>
      {data.map((product) => {
        return (
          <div className="w-64 h-64 my-8 bg-blue-600 flex flex-col justify-center">
            <div className="text-white">name: {product.title}</div>
            <div className="text-white">price: {product.id}</div>
            <button onClick={() => adding(product)} className="text-white">
              Add to card
            </button>
          </div>
        );
      })}
    </div>
  );
};
