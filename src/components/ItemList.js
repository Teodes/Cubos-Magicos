import { useEffect, useState } from "react";
import { getFetch } from "./getFetch";
import Item from "./Item";

export default function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getFetch(products).then((response) => {
      setProducts(response);
    });
  });
  return (
    <>
      {products.map((product) => (
        <Item
          name={product.name}
          key={product.id}
          stock={product.stock}
          src={product.url}
        />
      ))}
    </>
  );
}
