import { useEffect, useState } from "react";
import { getFetch } from "./getFetch";
import Item from "./Item";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch(products)
      .then((response) => {
        setProducts(response);
      })
      .finally(() => {
        setLoading(false);
      });
  });
  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        products.map((product) => (
          <Item
            name={product.name}
            key={product.id}
            stock={product.stock}
            src={product.url}
          />
        ))
      )}
    </>
  );
}
