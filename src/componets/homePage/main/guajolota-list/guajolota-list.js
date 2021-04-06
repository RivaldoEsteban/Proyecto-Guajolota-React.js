import React, { useState, useEffect } from "react";
import Card from "./card/card.js";
import productList from "../../../../API/dataBase";

function GujolotaList({ setShoppingCart }) {
  useEffect(() => {
    setProducts({
      list: productList,
    });
  }, []);
  const [products, setProducts] = useState({
    list: "",
  });
  if (!products.list) {
    return <p>cargando</p>;
  }
  return (
    <>
      {products.list.map((product) => {
        return (
          <Card
            setShoppingCart={setShoppingCart}
            productName={product.name}
            price={product.price}
            image={product.image}
            key={product.id}
            id={product.id}
          />
        );
      })}
    </>
  );
}

export default GujolotaList;
